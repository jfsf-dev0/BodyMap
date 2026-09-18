'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CameraGuideOverlay from '../../components/CameraGuideOverlay';
import BodyMeshViewer from '../../components/BodyMeshViewer';
import BiomarkerCards from '../../components/BiomarkerCards';
import { BiologicalSex, BodyMeasurements, BodyScanRecord } from '../../lib/types';
import { computeFullBiomarkers } from '../../lib/bodymap-engine';
import { sampleScans } from '../../lib/sample-scans';
import Link from 'next/link';
import {
  Scan,
  Camera,
  Upload,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FileText,
  User,
  RotateCcw,
} from 'lucide-react';

export default function ScannerPage() {
  // Step State: 1 = Data, 2 = Photo Capture, 3 = Processing, 4 = Results
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);

  // Form State
  const [patientName, setPatientName] = useState('João Freire');
  const [sex, setSex] = useState<BiologicalSex>('male');
  const [age, setAge] = useState(28);
  const [heightCm, setHeightCm] = useState(178);
  const [weightKg, setWeightKg] = useState(81.5);

  // Photo State
  const [photoFrontCaptured, setPhotoFrontCaptured] = useState(true);
  const [photoSideCaptured, setPhotoSideCaptured] = useState(true);
  const [activeCameraView, setActiveCameraView] = useState<'front' | 'side'>('front');

  // Processing Animation State
  const [processingProgress, setProcessingProgress] = useState(0);
  const [processingStepLabel, setProcessingStepLabel] = useState('Iniciando análise biométrica...');

  // Computed Scan Result
  const [scanResult, setScanResult] = useState<BodyScanRecord>(sampleScans[1]);

  const handleStartProcessing = () => {
    setStep(3);
    setProcessingProgress(15);
    setProcessingStepLabel('1/4: Segmentando silhueta corporal e calibrando escala métrica...');

    setTimeout(() => {
      setProcessingProgress(45);
      setProcessingStepLabel('2/4: Extraindo 33 marcos anatômicos de referência...');
    }, 1000);

    setTimeout(() => {
      setProcessingProgress(75);
      setProcessingStepLabel('3/4: Reconstruindo malha volumétrica e aplicando equações Siri/Brozek...');
    }, 2000);

    setTimeout(() => {
      setProcessingProgress(98);
      setProcessingStepLabel('4/4: Consolidando perimetria e estratificação cardiovascular...');
    }, 3000);

    setTimeout(() => {
      // Computa medições realistas baseadas nas entradas do usuário
      const baseMeasurements: BodyMeasurements = {
        neck: Number((38.0 + (weightKg - 75) * 0.15).toFixed(1)),
        chest: Number((100.0 + (weightKg - 75) * 0.4).toFixed(1)),
        waist: Number((82.0 + (weightKg - 75) * 0.45).toFixed(1)),
        abdomen: Number((85.0 + (weightKg - 75) * 0.5).toFixed(1)),
        hips: Number((98.0 + (weightKg - 75) * 0.35).toFixed(1)),
        bicepsRight: Number((36.5 + (weightKg - 75) * 0.15).toFixed(1)),
        bicepsLeft: Number((36.2 + (weightKg - 75) * 0.15).toFixed(1)),
        forearmRight: 29.5,
        forearmLeft: 29.2,
        thighRight: Number((58.0 + (weightKg - 75) * 0.25).toFixed(1)),
        thighLeft: Number((57.8 + (weightKg - 75) * 0.25).toFixed(1)),
        calfRight: 38.0,
        calfLeft: 37.8,
      };

      const biomarkers = computeFullBiomarkers(sex, age, heightCm, weightKg, baseMeasurements);

      const newScan: BodyScanRecord = {
        id: `scan-${Date.now().toString().slice(-6)}`,
        patientId: 'pac-custom',
        patientName,
        age,
        sex,
        heightCm,
        weightKg,
        scanDate: new Date().toISOString().split('T')[0],
        measurements: baseMeasurements,
        biomarkers,
        posture: {
          shoulderTiltDegrees: 1.2,
          pelvicTiltDegrees: 0.8,
          headForwardTiltMm: 15,
          notes: ['Leve anteriorização de ombros', 'Alinhamento pélvico neutro'],
        },
        confidenceScorePercent: 98.4,
        clinicalNotes: 'Hipertrofia Limpa 2.700 kcal',
      };

      setScanResult(newScan);
      setStep(4);
    }, 3800);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        {/* Top Professional Header Bar */}
        <div className="border-b border-slate-200 pb-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech uppercase text-emerald-700 font-bold">
                  Bioantropometria Óptica
                </span>
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-800 font-semibold">
                  Protocolo DEXA Calibrado
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Novo Escaneamento Corporal 3D
              </h1>
            </div>

            <div className="flex items-center gap-1.5 font-mono-tech text-xs">
              {[
                { num: 1, label: 'Biometria' },
                { num: 2, label: 'Fotos' },
                { num: 3, label: 'Análise' },
                { num: 4, label: 'Diagnóstico' },
              ].map((s) => (
                <div
                  key={s.num}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs ${
                    step === s.num
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-800 font-bold'
                      : step > s.num
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-slate-50 border-slate-200 text-slate-400'
                  }`}
                >
                  <span className="font-semibold">{s.num}.</span>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* STEP 1: DADOS BIOMÉTRICOS BÁSICOS                            */}
        {/* ============================================================ */}
        {step === 1 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono-tech font-semibold mb-2">
              <User className="h-4 w-4" />
              <span>Etapa 1 de 4: Parâmetros Físicos do Paciente</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Identificação & Medidas de Entrada
            </h2>
            <p className="text-xs text-slate-600 mb-6 font-sans">
              Estes parâmetros alimentam os modelos matemáticos de densitometria e garantem a correta calibração de escala óptica volumétrica.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                  Nome Completo do Paciente
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                    Sexo Biológico (Fórmula)
                  </label>
                  <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value as BiologicalSex)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-mono-tech"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                    Idade (Anos)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                    Estatura (cm)
                  </label>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                    Massa Corporal (Peso em kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-mono-tech"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
              >
                <span>Avançar para Captura de Fotos</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 2: CAPTURA OU UPLOAD DAS DUAS FOTOS                     */}
        {/* ============================================================ */}
        {step === 2 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
              <div>
                <div className="text-xs font-mono-tech text-emerald-700 uppercase tracking-wider font-semibold">
                  Etapa 2 de 4: Captura Óptica
                </div>
                <h2 className="text-xl font-bold text-slate-900 mt-0.5">
                  Posicionamento & 2 Fotos de Smartphone
                </h2>
              </div>

              {/* Angle Switcher */}
              <div className="flex items-center rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-mono-tech">
                <button
                  type="button"
                  onClick={() => setActiveCameraView('front')}
                  className={`px-3 py-1.5 rounded transition-all ${
                    activeCameraView === 'front'
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  1. Foto Frontal (0°)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCameraView('side')}
                  className={`px-3 py-1.5 rounded transition-all ${
                    activeCameraView === 'side'
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  2. Foto Lateral (90°)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Camera Guide (7 cols) */}
              <div className="md:col-span-7">
                <CameraGuideOverlay
                  viewMode={activeCameraView}
                  onCaptureMock={() => {
                    if (activeCameraView === 'front') {
                      setActiveCameraView('side');
                    } else {
                      handleStartProcessing();
                    }
                  }}
                />
              </div>

              {/* Instructions & File Upload Alternative (5 cols) */}
              <div className="md:col-span-5 space-y-4">
                <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono-tech mb-2">
                    Diretrizes para Precisão Diagnóstica
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 font-sans">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Roupas aderentes ao corpo (leggings, shorts curtos ou roupas de banho).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Braços ligeiramente afastados do tronco em 15 graus.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Pés paralelos na largura dos quadris.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Iluminação uniforme e ambiente bem claro.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-dashed border-slate-300 rounded-xl p-4 text-center bg-slate-50/50">
                  <Upload className="h-6 w-6 text-slate-400 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-slate-800">Prefere carregar fotos já capturadas?</div>
                  <div className="text-[11px] text-slate-500 font-mono-tech mt-0.5">
                    Formatos JPG, PNG ou HEIC direto do celular
                  </div>
                  <button
                    type="button"
                    onClick={handleStartProcessing}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    <span>Carregar Arquivos & Processar</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Voltar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleStartProcessing}
                    className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
                  >
                    <span>Iniciar Análise Óptica 3D</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 3: TELA DE PROCESSAMENTO COM PROGRESS BAR              */}
        {/* ============================================================ */}
        {step === 3 && (
          <div className="rounded-2xl border border-slate-200 bg-white p-12 shadow-sm text-center max-w-xl mx-auto my-12">
            <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700">
              <Scan className="h-8 w-8 animate-pulse" />
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              Processando Bioantropometria 3D
            </h3>
            <p className="mt-2 text-xs text-slate-600 font-mono-tech max-w-sm mx-auto">
              {processingStepLabel}
            </p>

            {/* Progress Bar */}
            <div className="mt-8 w-full bg-slate-100 rounded-full h-2.5 overflow-hidden border border-slate-200">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${processingProgress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
              <span>Algoritmos Siri, Brozek & U.S. Navy</span>
              <span className="text-emerald-700 font-bold">{processingProgress}%</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 4: RESULTADO COMPLETO DO SCAN & EXPORTAÇÃO             */}
        {/* ============================================================ */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Top Success Strip */}
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">
                    Escaneamento Concluído com Sucesso
                  </div>
                  <div className="text-xs text-emerald-800 font-mono-tech font-medium">
                    Precisão óptica estimada: {scanResult.confidenceScorePercent}% • Código do Laudo: {scanResult.id}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/dossie"
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Imprimir Dossiê Editorial 9pt</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Novo Scan</span>
                </button>
              </div>
            </div>

            {/* Main Interactive Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <BodyMeshViewer
                  measurements={scanResult.measurements}
                  sex={scanResult.sex}
                  bodyFatPercent={scanResult.biomarkers.bodyFatPercentage}
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                {/* Summary Box */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 mb-2">Diagnóstico Sintético</h3>
                  <div className="text-xs text-slate-600 leading-relaxed space-y-2 font-sans">
                    <p>
                      O paciente <strong>{scanResult.patientName}</strong> apresenta <strong>{scanResult.biomarkers.bodyFatPercentage}% de gordura corporal</strong>, correspondendo a <strong>{scanResult.biomarkers.fatMassKg} kg de massa adiposa</strong> e <strong>{scanResult.biomarkers.leanMassKg} kg de massa livre de gordura</strong>.
                    </p>
                    <p>
                      A relação cintura/quadril ({scanResult.biomarkers.waistToHipRatio}) e a taxa de gordura visceral (Nível {scanResult.biomarkers.visceralFatLevel}) apontam baixo risco cardiovascular, com excelente simetria postural.
                    </p>
                  </div>
                </div>

                {/* Perímetros Table */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="text-xs font-bold text-slate-900 uppercase font-mono-tech mb-3">
                    Perimetria Óptica Calculada (cm)
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Pescoço:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.neck} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Tórax:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.chest} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Cintura:</span>
                      <span className="text-emerald-700 font-bold">{scanResult.measurements.waist} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Abdômen:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.abdomen} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Quadril:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.hips} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Braço D:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.bicepsRight} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Coxa D:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.thighRight} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-50 border border-slate-200 flex justify-between">
                      <span className="text-slate-500">Panturrilha D:</span>
                      <span className="text-slate-900 font-bold">{scanResult.measurements.calfRight} cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom KPI strip */}
            <BiomarkerCards
              biomarkers={scanResult.biomarkers}
              sex={scanResult.sex}
              weightKg={scanResult.weightKg}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
