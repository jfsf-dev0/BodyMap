'use client';

import React, { useState } from 'react';
import { sampleScans } from '../lib/sample-scans';
import { BodyScanRecord } from '../lib/types';
import BodyMeshViewer from './BodyMeshViewer';
import BiomarkerCards from './BiomarkerCards';
import Link from 'next/link';
import { User, Sparkles, FileText, ArrowRight, ShieldCheck, Download, RefreshCw } from 'lucide-react';

export default function ScanDemoWidget() {
  const [selectedScanIndex, setSelectedScanIndex] = useState(1); // Lucas Silva T1
  const activeScan: BodyScanRecord = sampleScans[selectedScanIndex];
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>('waist');

  return (
    <section id="demo" className="relative py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono-tech text-emerald-400 mb-3">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Simulador Interativo em Tempo Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experimente o Mapeamento Corporal 3D
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400">
            Alterne entre perfis clínicos reais, gire o modelo, explore os pontos anatômicos e veja como a IA decompõe a composição corporal em milissegundos.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {sampleScans.map((scan, idx) => (
            <button
              key={scan.id}
              onClick={() => setSelectedScanIndex(idx)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-medium transition-all border ${
                selectedScanIndex === idx
                  ? 'bg-emerald-500/20 border-emerald-500 text-white shadow-lg shadow-emerald-500/10'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <User className={`h-3.5 w-3.5 ${selectedScanIndex === idx ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{scan.patientName}</span>
              <span className="rounded bg-slate-950 px-1.5 py-0.5 text-[10px] font-mono-tech text-slate-400">
                {scan.biomarkers.bodyFatPercentage}% BF
              </span>
            </button>
          ))}
        </div>

        {/* Main Grid: 3D Mesh Viewer + Diagnostic Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 3D Mesh Viewer (7 cols) */}
          <div className="lg:col-span-7">
            <BodyMeshViewer
              measurements={activeScan.measurements}
              sex={activeScan.sex}
              bodyFatPercent={activeScan.biomarkers.bodyFatPercentage}
              highlightPart={selectedBodyPart}
              onSelectPart={(part) => setSelectedBodyPart(part)}
            />
            {/* Disclaimer bar */}
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-tech text-slate-500 px-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                <span>Precisão Óptica Calibrada: {activeScan.confidenceScorePercent}% de assertividade</span>
              </div>
              <div>ID do Scan: {activeScan.id}</div>
            </div>
          </div>

          {/* Right Column: Clinical Profile & Anthropometric Table (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Patient Header Card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">{activeScan.patientName}</h3>
                  <div className="text-xs text-slate-400 font-mono-tech mt-0.5 flex items-center gap-2">
                    <span>{activeScan.age} anos</span>
                    <span>•</span>
                    <span>{activeScan.heightCm} cm</span>
                    <span>•</span>
                    <span className="text-white font-bold">{activeScan.weightKg} kg</span>
                  </div>
                </div>
                <span className="rounded bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-mono-tech text-emerald-400 font-semibold">
                  {activeScan.biomarkers.bmiClassification}
                </span>
              </div>

              <div className="mt-4 rounded-xl bg-slate-950/60 border border-slate-800/80 p-3 text-xs text-slate-300">
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-wider mb-1">
                  Parecer Clínico Automatizado
                </div>
                <p className="leading-relaxed text-slate-300">
                  {activeScan.clinicalNotes}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2">
                <Link
                  href="/dossie"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Ver Dossiê Editorial 9pt</span>
                </Link>
                <Link
                  href="/scanner"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 px-3 py-2.5 text-xs font-semibold text-slate-200 transition-colors"
                  title="Fazer novo scan com fotos próprias"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  <span>Novo Scan</span>
                </Link>
              </div>
            </div>

            {/* Perímetros Detalhados (Tabela com Interação) */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2 mb-3">
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono-tech">
                  Circunferências Anatômicas (cm)
                </span>
                <span className="text-[10px] text-emerald-400 font-mono-tech">
                  Clique para focar no 3D
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                {[
                  { key: 'chest', label: 'Tórax / Peitoral', val: activeScan.measurements.chest },
                  { key: 'waist', label: 'Cintura (Menor)', val: activeScan.measurements.waist },
                  { key: 'abdomen', label: 'Abdômen (Umbilical)', val: activeScan.measurements.abdomen },
                  { key: 'hips', label: 'Quadril (Glúteo)', val: activeScan.measurements.hips },
                  { key: 'bicepsRight', label: 'Braço D (Relaxado)', val: activeScan.measurements.bicepsRight },
                  { key: 'bicepsLeft', label: 'Braço E (Relaxado)', val: activeScan.measurements.bicepsLeft },
                  { key: 'thighRight', label: 'Coxa Medial D', val: activeScan.measurements.thighRight },
                  { key: 'thighLeft', label: 'Coxa Medial E', val: activeScan.measurements.thighLeft },
                  { key: 'calfRight', label: 'Panturrilha D', val: activeScan.measurements.calfRight },
                  { key: 'neck', label: 'Pescoço', val: activeScan.measurements.neck },
                ].map((item) => (
                  <div
                    key={item.key}
                    onClick={() => setSelectedBodyPart(item.key)}
                    className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all ${
                      selectedBodyPart === item.key
                        ? 'bg-emerald-500/20 border-emerald-500/60 text-white'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-300 hover:bg-slate-950 hover:border-slate-700'
                    }`}
                  >
                    <span className="text-slate-400 text-[11px]">{item.label}</span>
                    <span className="font-bold text-white tabular-nums">{item.val} cm</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Biomarker KPI Strip */}
        <div className="mt-6">
          <BiomarkerCards
            biomarkers={activeScan.biomarkers}
            sex={activeScan.sex}
            weightKg={activeScan.weightKg}
          />
        </div>
      </div>
    </section>
  );
}
