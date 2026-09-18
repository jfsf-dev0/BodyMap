export type BiologicalSex = 'male' | 'female';

export interface BodyMeasurements {
  neck: number; // cm
  chest: number; // cm
  waist: number; // cm (menor circunferência do abdômen)
  abdomen: number; // cm (cicatriz umbilical)
  hips: number; // cm (maior circunferência glútea)
  bicepsRight: number; // cm (relaxado)
  bicepsLeft: number; // cm (relaxado)
  forearmRight: number; // cm
  forearmLeft: number; // cm
  thighRight: number; // cm (coxa medial)
  thighLeft: number; // cm (coxa medial)
  calfRight: number; // cm
  calfLeft: number; // cm
}

export interface BodyBiomarkers {
  bodyFatPercentage: number; // % BF
  leanMassKg: number; // Massa Livre de Gordura (kg)
  fatMassKg: number; // Massa Gorda (kg)
  boneMassKg: number; // Estimativa de massa óssea (kg)
  totalBodyWaterLiters: number; // Água corporal total estimada (L)
  bmi: number; // Índice de Massa Corporal (kg/m²)
  bmiClassification: string;
  waistToHipRatio: number; // Relação Cintura/Quadril (RCQ)
  waistToHipRisk: 'baixo' | 'moderado' | 'elevado' | 'muito_elevado';
  waistToHeightRatio: number; // Relação Cintura/Estatura (RCE)
  visceralFatLevel: number; // Nível 1-12
  basalMetabolicRateKcal: number; // TMB Kcal
  bodyDensity: number; // g/cm³
  asymmetryScorePercent: number; // % de assimetria lateral média
}

export interface PosturalAssessment {
  shoulderTiltDegrees: number; // Inclinação de ombro (- esquerdo, + direito)
  pelvicTiltDegrees: number; // Báscula de pelve
  headForwardTiltMm: number; // Anteriorização de cabeça (mm)
  notes: string[];
}

export interface BodyScanRecord {
  id: string;
  patientId: string;
  patientName: string;
  age: number;
  sex: BiologicalSex;
  heightCm: number;
  weightKg: number;
  scanDate: string;
  frontPhotoUrl?: string;
  sidePhotoUrl?: string;
  measurements: BodyMeasurements;
  biomarkers: BodyBiomarkers;
  posture: PosturalAssessment;
  confidenceScorePercent: number; // Confiança do algoritmo óptico (ex: 98.6%)
  clinicalNotes?: string;
}

export interface ScanComparison {
  previousScan: BodyScanRecord;
  currentScan: BodyScanRecord;
  daysBetween: number;
  deltaWeightKg: number;
  deltaBodyFatPercent: number;
  deltaLeanMassKg: number;
  deltaWaistCm: number;
  deltaHipsCm: number;
  deltaChestCm: number;
}
