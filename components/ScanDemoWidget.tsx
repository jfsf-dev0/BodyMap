'use client';

import React, { useState } from 'react';
import { sampleScans } from '../lib/sample-scans';
import { BodyScanRecord } from '../lib/types';
import BodyMeshViewer from './BodyMeshViewer';
import BiomarkerCards from './BiomarkerCards';
import Link from 'next/link';
import { User, FileText, ShieldCheck, RefreshCw, ChevronRight } from 'lucide-react';

export default function ScanDemoWidget() {
  const [selectedScanIndex, setSelectedScanIndex] = useState(1); // Lucas Silva T1
  const activeScan: BodyScanRecord = sampleScans[selectedScanIndex];
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>('waist');

  return (
    <section id="demo" className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-mono-tech text-slate-700 mb-3">
            <span>Simulador Clínico Interativo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Avaliação Antropométrica Tridimensional
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Alterne entre perfis clínicos reais, explore os pontos anatômicos e veja como a bioantropometria óptica decompõe a composição corporal.
          </p>
        </div>

        {/* Profile Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 font-mono-tech">
          {sampleScans.map((scan, idx) => (
            <button
              key={scan.id}
              onClick={() => setSelectedScanIndex(idx)}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs transition-all border ${
                selectedScanIndex === idx
                  ? 'bg-slate-900 border-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <User className={`h-3.5 w-3.5 ${selectedScanIndex === idx ? 'text-emerald-400' : 'text-slate-400'}`} />
              <span>{scan.patientName}</span>
              <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-600">
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
            <div className="mt-3 flex items-center justify-between text-[11px] font-mono-tech text-slate-500 px-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Calibração Óptica: {activeScan.confidenceScorePercent}% de assertividade</span>
              </div>
              <div>ID Registro: {activeScan.id}</div>
            </div>
          </div>

          {/* Right Column: Clinical Profile & Anthropometric Table (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Patient Header Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900">{activeScan.patientName}</h3>
                  <div className="text-xs text-slate-500 font-mono-tech mt-0.5 flex items-center gap-2">
                    <span>{activeScan.age} anos</span>
                    <span>•</span>
                    <span>{activeScan.heightCm} cm</span>
                    <span>•</span>
                    <span className="text-slate-900 font-bold">{activeScan.weightKg} kg</span>
                  </div>
                </div>
                <span className="rounded bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-700 font-semibold">
                  {activeScan.biomarkers.bmiClassification}
                </span>
              </div>

              <div className="mt-3 rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-700">
                <div className="text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider mb-1 font-semibold">
                  Parecer Clínico
                </div>
                <p className="leading-relaxed text-slate-600">
                  {activeScan.clinicalNotes}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex items-center gap-2 font-mono-tech">
                <Link
                  href="/dossie"
                  className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 px-4 py-2 text-xs font-semibold text-white shadow-xs transition-all"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Ver Dossiê Editorial 9pt</span>
                </Link>
                <Link
                  href="/scanner"
                  className="flex items-center justify-center gap-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition-colors"
                >
                  <RefreshCw className="h-3.5 w-3.5 text-slate-400" />
                  <span>Novo Scan</span>
                </Link>
              </div>
            </div>

            {/* Perímetros Detalhados */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono-tech">
                  Circunferências Anatômicas (cm)
                </span>
                <span className="text-[10px] text-slate-500 font-mono-tech">
                  Clique para focar no modelo
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
                        ? 'bg-slate-900 border-slate-900 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span className={selectedBodyPart === item.key ? 'text-slate-300' : 'text-slate-500'}>
                      {item.label}
                    </span>
                    <span className="font-bold tabular-nums">{item.val} cm</span>
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
