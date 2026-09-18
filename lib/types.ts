export const SCHEMA_VERSION = 2;

// ==========================================
// 1. BIOANTROPOMETRIA 3D & SCANNER TYPES
// ==========================================

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

// ==========================================
// 2. NUTRIÇÃO CLÍNICA & PRESCRIÇÃO (TACO/TBCA)
// ==========================================

export type NutrientKey =
  | 'kcal'
  | 'p'
  | 'c'
  | 'l'
  | 'fibras'
  | 'colesterol'
  | 'calcio'
  | 'magnesio'
  | 'fosforo'
  | 'ferro'
  | 'sodio'
  | 'potassio'
  | 'zinco'
  | 'cobre'
  | 'vitC'
  | 'tiamina'
  | 'riboflavina'
  | 'piridoxina'
  | 'niacina'
  | 'retinol';

export type Nutrients = Partial<Record<NutrientKey, number>>;

export interface Macros {
  kcal: number;
  p: number;
  c: number;
  l: number;
}

export interface Food {
  id: number;
  nome: string;
  grupo: string;
  origem: string;
  n: Nutrients;
}

export interface MealItem {
  id: string;
  foodId?: number;
  nome: string;
  gramas: number;
  medida?: string;
  nota?: boolean;
}

export interface MealOption {
  id: string;
  titulo: string;
  itens: MealItem[];
  extra: Macros;
}

export interface Meal {
  id: number;
  nome: string;
  horario: string;
  opcoes: MealOption[];
}

export interface Supplement {
  id: string;
  nome: string;
  posologia: string;
  obs: string;
}

export interface Recipe {
  nome: string;
  rendimento: string;
  ingredientes: string;
  preparo: string;
}

export type RestrictionKey =
  | 'lactose'
  | 'gluten'
  | 'ovo'
  | 'amendoim'
  | 'oleaginosas'
  | 'frutosDoMar'
  | 'soja'
  | 'vegetariano'
  | 'vegano';

export interface Restrictions {
  tags: RestrictionKey[];
  termos: string;
}

export type Sexo = 'M' | 'F';
export type Objetivo = 'perda' | 'manutencao' | 'ganho';

export interface Antropometria {
  peso?: number;
  altura?: number;
  idade?: number;
  sexo?: Sexo;
  atividade?: number;
  objetivo?: Objetivo;
}

export interface MicrosTexto {
  modo: 'auto' | 'manual';
  lipideos: string;
  minerais: string;
  vitaminas: string;
}

export interface PatientProfile {
  id: string;
  versao: number;
  atualizadoEm: string;
  paciente: string;
  data: string;
  fase: string;
  nutricionista: string;
  crn: string;
  telefone: string;
  local: string;
  calorias: number;
  prot: number;
  carbo: number;
  gord: number;
  fibras: number;
  agua: string;
  antropometria: Antropometria;
  restricoes: Restrictions;
  suplementos: Supplement[];
  meals: Meal[];
  receita: Recipe;
  micros: MicrosTexto;
}

export type PatientStatus = 'ativo' | 'alerta' | 'inativo';
export type PatientGoal = 'Hipertrofia' | 'Emagrecimento' | 'Performance' | 'Saúde & Longevidade' | 'Recomposição Corporal';

export interface Patient {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  dataNascimento: string;
  idade: number;
  genero: 'M' | 'F';
  objetivo: PatientGoal;
  status: PatientStatus;
  statusMotivo?: string;
  restricoes: string[];
  patologias?: string[];
  medicamentos?: string[];
  planoAtivoId: string;
  ultimaConsulta: string;
  proximaConsulta?: string;
  adesaoMedia7d: number;
  streakDias: number;
  notasClinicas: string;
}

export interface FoodItemTACO {
  id: string;
  nome: string;
  categoria: 'Carnes & Ovos' | 'Cereais & Leguminosas' | 'Frutas & Sucos' | 'Laticínios' | 'Gorduras & Óleos' | 'Verduras & Legumes' | 'Suplementos';
  porcaoPadraoGramas: number;
  calorias: number;
  proteinas: number;
  carboidratos: number;
  gorduras: number;
  fibras: number;
  medidasCaseiras: {
    descricao: string;
    gramas: number;
  }[];
}

export interface DiaryEntry {
  id: string;
  pacienteId: string;
  data: string;
  refeicaoId: number;
  refeicaoNome: string;
  status: 'cumprida' | 'adaptada' | 'pulada';
  opcaoEscolhida: 'A' | 'B';
  aguaConsumidaMl: number;
  fotoUrl?: string;
  avaliacaoEstrelas: number;
  notas?: string;
}

export interface ExamRecord {
  id: string;
  pacienteId: string;
  dataColeta: string;
  laboratorio: string;
  parametros: {
    nome: string;
    valor: number;
    unidade: string;
    referenciaMin: number;
    referenciaMax: number;
    otimoMin?: number;
    otimoMax?: number;
    status: 'normal' | 'atencao' | 'critico';
  }[];
  conclusao?: string;
}

