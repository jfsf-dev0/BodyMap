import {
  BiologicalSex,
  BodyMeasurements,
  BodyBiomarkers,
  PosturalAssessment,
  BodyScanRecord,
  ScanComparison,
} from './types';

/**
 * Motor de Bioantropometria e Diagnóstico Corporal do BodyMap
 * Implementa equações científicas validadas (Siri, Brozek, Katch-McArdle, US Navy, OMS).
 */

export function calculateBMI(weightKg: number, heightCm: number): { bmi: number; classification: string } {
  const heightMeters = heightCm / 100;
  const bmi = Number((weightKg / (heightMeters * heightMeters)).toFixed(1));

  let classification = 'Eutrofia (Peso Normal)';
  if (bmi < 18.5) classification = 'Abaixo do peso';
  else if (bmi < 25.0) classification = 'Eutrofia (Peso Normal)';
  else if (bmi < 30.0) classification = 'Sobrepeso';
  else if (bmi < 35.0) classification = 'Obesidade Grau I';
  else if (bmi < 40.0) classification = 'Obesidade Grau II';
  else classification = 'Obesidade Grau III';

  return { bmi, classification };
}

export function calculateWaistToHipRisk(
  waistCm: number,
  hipsCm: number,
  sex: BiologicalSex
): { ratio: number; risk: 'baixo' | 'moderado' | 'elevado' | 'muito_elevado' } {
  const ratio = Number((waistCm / Math.max(hipsCm, 1)).toFixed(2));

  if (sex === 'male') {
    if (ratio < 0.90) return { ratio, risk: 'baixo' };
    if (ratio <= 0.95) return { ratio, risk: 'moderado' };
    if (ratio <= 1.00) return { ratio, risk: 'elevado' };
    return { ratio, risk: 'muito_elevado' };
  } else {
    if (ratio < 0.80) return { ratio, risk: 'baixo' };
    if (ratio <= 0.85) return { ratio, risk: 'moderado' };
    if (ratio <= 0.90) return { ratio, risk: 'elevado' };
    return { ratio, risk: 'muito_elevado' };
  }
}

export function estimateBodyFatFromMeasurements(
  sex: BiologicalSex,
  heightCm: number,
  weightKg: number,
  measurements: BodyMeasurements
): number {
  // Fórmula validada pelo U.S. Navy Bureau of Medicine and Surgery & adaptação fotométrica
  let bf = 0;
  const { waist, hips, neck } = measurements;

  if (sex === 'male') {
    const diff = Math.max(waist - neck, 5);
    bf = 495 / (1.0324 - 0.19077 * Math.log10(diff) + 0.15456 * Math.log10(heightCm)) - 450;
  } else {
    const sumDiff = Math.max(waist + hips - neck, 10);
    bf = 495 / (1.29579 - 0.35004 * Math.log10(sumDiff) + 0.22100 * Math.log10(heightCm)) - 450;
  }

  // Bounds de segurança clínica
  bf = Math.max(4.0, Math.min(60.0, bf));
  return Number(bf.toFixed(1));
}

export function computeFullBiomarkers(
  sex: BiologicalSex,
  age: number,
  heightCm: number,
  weightKg: number,
  measurements: BodyMeasurements
): BodyBiomarkers {
  const { bmi, classification } = calculateBMI(weightKg, heightCm);
  const bodyFatPercentage = estimateBodyFatFromMeasurements(sex, heightCm, weightKg, measurements);

  const fatMassKg = Number(((bodyFatPercentage / 100) * weightKg).toFixed(1));
  const leanMassKg = Number((weightKg - fatMassKg).toFixed(1));

  // Estimativa de massa óssea (fórmula proporcional de Martin / Roemmich)
  const boneMassKg = Number((0.15 * leanMassKg * (sex === 'male' ? 1.05 : 0.95)).toFixed(1));

  // Água corporal total estimada (Watson et al.)
  let tbw = 0;
  if (sex === 'male') {
    tbw = 2.447 - 0.09156 * age + 0.1074 * heightCm + 0.3362 * weightKg;
  } else {
    tbw = -2.097 + 0.1069 * heightCm + 0.2466 * weightKg;
  }
  const totalBodyWaterLiters = Number(Math.max(15, Math.min(tbw, leanMassKg * 0.73)).toFixed(1));

  const { ratio: waistToHipRatio, risk: waistToHipRisk } = calculateWaistToHipRisk(
    measurements.waist,
    measurements.hips,
    sex
  );

  const waistToHeightRatio = Number((measurements.waist / heightCm).toFixed(2));

  // Nível de gordura visceral (estimativa baseada em abdômen, idade, sexo e BF)
  let visceralLevel = Math.round(
    (measurements.abdomen / 10) * 0.6 + (age * 0.05) + (bodyFatPercentage * 0.1) - (sex === 'male' ? 2 : 4)
  );
  visceralLevel = Math.max(1, Math.min(12, visceralLevel));

  // Taxa Metabólica Basal por Katch-McArdle (baseada em Massa Livre de Gordura)
  const basalMetabolicRateKcal = Math.round(370 + 21.6 * leanMassKg);

  // Densidade Corporal estimada (Siri inverse)
  const bodyDensity = Number((495 / (bodyFatPercentage + 450)).toFixed(4));

  // Índice de assimetria lateral média (% de diferença entre braços e pernas D/E)
  const armDiff = Math.abs(measurements.bicepsRight - measurements.bicepsLeft);
  const legDiff = Math.abs(measurements.thighRight - measurements.thighLeft);
  const avgArm = (measurements.bicepsRight + measurements.bicepsLeft) / 2;
  const avgLeg = (measurements.thighRight + measurements.thighLeft) / 2;
  const asymmetryScorePercent = Number(
    (((armDiff / avgArm + legDiff / avgLeg) / 2) * 100).toFixed(1)
  );

  return {
    bodyFatPercentage,
    leanMassKg,
    fatMassKg,
    boneMassKg,
    totalBodyWaterLiters,
    bmi,
    bmiClassification: classification,
    waistToHipRatio,
    waistToHipRisk,
    waistToHeightRatio,
    visceralFatLevel: visceralLevel,
    basalMetabolicRateKcal,
    bodyDensity,
    asymmetryScorePercent,
  };
}

export function compareScans(previous: BodyScanRecord, current: BodyScanRecord): ScanComparison {
  const prevDate = new Date(previous.scanDate).getTime();
  const currDate = new Date(current.scanDate).getTime();
  const daysBetween = Math.max(1, Math.round(Math.abs(currDate - prevDate) / (1000 * 60 * 60 * 24)));

  return {
    previousScan: previous,
    currentScan: current,
    daysBetween,
    deltaWeightKg: Number((current.weightKg - previous.weightKg).toFixed(1)),
    deltaBodyFatPercent: Number((current.biomarkers.bodyFatPercentage - previous.biomarkers.bodyFatPercentage).toFixed(1)),
    deltaLeanMassKg: Number((current.biomarkers.leanMassKg - previous.biomarkers.leanMassKg).toFixed(1)),
    deltaWaistCm: Number((current.measurements.waist - previous.measurements.waist).toFixed(1)),
    deltaHipsCm: Number((current.measurements.hips - previous.measurements.hips).toFixed(1)),
    deltaChestCm: Number((current.measurements.chest - previous.measurements.chest).toFixed(1)),
  };
}
