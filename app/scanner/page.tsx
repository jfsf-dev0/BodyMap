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
  Sparkles,
  FileText,
  User,
  ShieldCheck,
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
    setProcessingStepLabel('1/4: Segmentando silhueta e removendo ruído de fundo...');

    setTimeout(() => {
      setProcessingProgress(45);
      setProcessingStepLabel('2/4: Extraindo 33 pontos de inflexão anatômica (Pose Landmarks)...');
    }, 1200);

    setTimeout(() => {
      setProcessingProgress(75);
      setProcessingStepLabel('3/4: Reconstruindo malha volumétrica 3D e densitometria Siri/Brozek...');
    }, 2400);

    setTimeout(() => {
      setProcessingProgress(98);
      setProcessingStepLabel('4/4: Calibrando índice de gordura visceral e risco cardiovascular OMS...');
    }, 3600);

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
          shoulderTiltDegrees: 0.6,
          pelvicTiltDegrees: 0.3,
          headForwardTiltMm: 8,
          notes: ['Simetria corporal excelente', 'Alinhamento escapular dentro dos parâmetros'],
        },
        confidenceScorePercent: 99.1,
        clinicalNotes: `Mapeamento óptico realizado com sucesso. Densidade corporal calibrada com padrão de eutrofia atlética.`,
      };

      setScanResult(newScan);
      setStep(4);
    }, 4400);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-5xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        {/* Step Indicator Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-mono-tech text-emerald-400 uppercase tracking-wider">
                Mapeamento Corporal 3D
              </span>
              <h1 className="text-2xl font-bold text-white mt-0.5">
                Scanner Bioantropométrico por Inteligência Artificial
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
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] ${
                    step === s.num
                      ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                      : step > s.num
                      ? 'bg-slate-900 border-slate-800 text-slate-400'
                      : 'opacity-40 border-transparent text-slate-600'
                  }`}
                >
                  <span>{s.num}.</span>
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-tech mb-2">
              <User className="h-4 w-4" />
              <span>Etapa 1 de 4: Parâmetros do Paciente</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-2">
              Identificação & Parâmetros Físicos
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Estes dados são utilizados pelas equações de densitometria e para normalização da escala óptica de profundidade.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  Nome Completo do Paciente
                </label>
                <input
                  type="text"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    Sexo Biológico (Equação)
                  </label>
                  <select
                    value={sex}
                    onChange={(e) => setSex(e.target.value as BiologicalSex)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono-tech"
                  >
                    <option value="male">Masculino</option>
                    <option value="female">Feminino</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    Idade (Anos)
                  </label>
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono-tech"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    Estatura (cm)
                  </label>
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) => setHeightCm(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono-tech"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    Massa Corporal (Peso em kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={weightKg}
                    onChange={(e) => setWeightKg(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono-tech"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
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
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-6">
              <div>
                <div className="text-xs font-mono-tech text-emerald-400 uppercase tracking-wider">
                  Etapa 2 de 4: Captura Visual
                </div>
                <h2 className="text-xl font-bold text-white mt-0.5">
                  Posicionamento & 2 Fotos de Smartphone
                </h2>
              </div>

              {/* Angle Switcher */}
              <div className="flex items-center rounded-lg bg-slate-950 p-1 border border-slate-800 text-xs font-mono-tech">
                <button
                  type="button"
                  onClick={() => setActiveCameraView('front')}
                  className={`px-3 py-1.5 rounded transition-all ${
                    activeCameraView === 'front'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1. Foto Frontal (0°)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveCameraView('side')}
                  className={`px-3 py-1.5 rounded transition-all ${
                    activeCameraView === 'side'
                      ? 'bg-emerald-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  2. Foto Perfil (90°)
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Camera Guide Silhouette (7 cols) */}
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
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono-tech mb-2">
                    Diretrizes para Máxima Precisão
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Roupas justas ao corpo (legging, shorts curtos ou roupas de banho).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Braços afastados do tronco em cerca de 15 graus.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Pés paralelos alinhados à largura dos quadris.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Ambiente bem iluminado, sem sombras fortes nas laterais.</span>
                    </li>
                  </ul>
                </div>

                <div className="border border-dashed border-slate-800 rounded-xl p-4 text-center bg-slate-950/40">
                  <Upload className="h-6 w-6 text-slate-500 mx-auto mb-2" />
                  <div className="text-xs font-semibold text-white">Prefere subir fotos já existentes?</div>
                  <div className="text-[11px] text-slate-500 font-mono-tech mt-0.5">
                    Formatos JPG, PNG ou HEIC de celular
                  </div>
                  <button
                    type="button"
                    onClick={handleStartProcessing}
                    className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800 transition-colors"
                  >
                    <span>Simular Upload & Processar</span>
                  </button>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex items-center gap-1 text-xs text-slate-400 hover:text-white"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    <span>Voltar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleStartProcessing}
                    className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-md transition-all cursor-pointer"
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
        {/* STEP 3: TELA DE PROCESSAMENTO DA IA COM SCANNER BAR         */}
        {/* ============================================================ */}
        {step === 3 && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-12 backdrop-blur-md shadow-2xl text-center max-w-xl mx-auto my-12">
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400">
              <Scan className="h-10 w-10 animate-pulse" />
              <div className="absolute inset-0 rounded-2xl border border-emerald-400 animate-ping opacity-25" />
            </div>

            <h3 className="text-xl font-bold text-white">
              Processando Bioantropometria 3D
            </h3>
            <p className="mt-2 text-xs text-slate-400 font-mono-tech max-w-sm mx-auto">
              {processingStepLabel}
            </p>

            {/* Progress Bar */}
            <div className="mt-8 w-full bg-slate-800 rounded-full h-2.5 overflow-hidden border border-slate-700/60">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-400 h-full rounded-full transition-all duration-500 shadow-[0_0_12px_#10b981]"
                style={{ width: `${processingProgress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
              <span>Algoritmo Siri & Brozek DEXA</span>
              <span className="text-emerald-400 font-bold">{processingProgress}%</span>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* STEP 4: RESULTADO COMPLETO DO SCAN & EXPORTAÇÃO             */}
        {/* ============================================================ */}
        {step === 4 && (
          <div className="space-y-6">
            {/* Top Success Strip */}
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/40">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Escaneamento 3D Concluído com Sucesso!
                  </div>
                  <div className="text-xs text-emerald-400/80 font-mono-tech">
                    Precisão óptica estimada: {scanResult.confidenceScorePercent}% • Código do Laudo: {scanResult.id}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Link
                  href="/dossie"
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <FileText className="h-4 w-4" />
                  <span>Imprimir Dossiê Editorial 9pt</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
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
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <h3 className="text-base font-bold text-white mb-2">Diagnóstico Sintético</h3>
                  <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                    <p>
                      O paciente <strong>{scanResult.patientName}</strong> possui <strong>{scanResult.biomarkers.bodyFatPercentage}% de gordura corporal</strong>, totalizando <strong>{scanResult.biomarkers.fatMassKg} kg de tecido adiposo</strong> e <strong>{scanResult.biomarkers.leanMassKg} kg de massa livre de gordura</strong>.
                    </p>
                    <p>
                      A relação cintura/quadril ({scanResult.biomarkers.waistToHipRatio}) e o índice de gordura visceral (Nível {scanResult.biomarkers.visceralFatLevel}) apontam baixo risco para desfechos metabólicos adversos.
                    </p>
                  </div>
                </div>

                {/* Perímetros Table */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <div className="text-xs font-bold text-white uppercase font-mono-tech mb-3">
                    Perimetria Óptica Calculada (cm)
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Pescoço:</span>
                      <span className="text-white font-bold">{scanResult.measurements.neck} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Tórax:</span>
                      <span className="text-white font-bold">{scanResult.measurements.chest} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Cintura:</span>
                      <span className="text-emerald-400 font-bold">{scanResult.measurements.waist} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Abdômen:</span>
                      <span className="text-white font-bold">{scanResult.measurements.abdomen} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Quadril:</span>
                      <span className="text-white font-bold">{scanResult.measurements.hips} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Braço D:</span>
                      <span className="text-white font-bold">{scanResult.measurements.bicepsRight} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Coxa D:</span>
                      <span className="text-white font-bold">{scanResult.measurements.thighRight} cm</span>
                    </div>
                    <div className="p-2 rounded bg-slate-950 border border-slate-800 flex justify-between">
                      <span className="text-slate-400">Panturrilha D:</span>
                      <span className="text-white font-bold">{scanResult.measurements.calfRight} cm</span>
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
