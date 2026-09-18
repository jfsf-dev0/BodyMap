'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import ClinicalDossierA4 from '../../components/ClinicalDossierA4';
import { sampleScans } from '../../lib/sample-scans';
import Link from 'next/link';
import { ArrowLeft, User, Printer } from 'lucide-react';

export default function DossiePage() {
  const [selectedScanIndex, setSelectedScanIndex] = useState(1); // Lucas Silva T1
  const activeScan = sampleScans[selectedScanIndex];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 flex flex-col justify-between">
      <div className="no-print">
        <Navbar />
      </div>

      <main className="mx-auto max-w-5xl w-full px-4 py-6 sm:px-6 print:p-0 print:m-0 flex-1">
        {/* Navigation back and profile selector (Hidden on print) */}
        <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para a Página Inicial</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400 font-mono-tech mr-1">Selecionar Laudo:</span>
            {sampleScans.map((scan, idx) => (
              <button
                key={scan.id}
                onClick={() => setSelectedScanIndex(idx)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-mono-tech transition-all border ${
                  selectedScanIndex === idx
                    ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <User className="h-3 w-3" />
                <span>{scan.patientName.split(' ')[0]}</span>
                <span className="text-[10px] text-slate-500">({scan.biomarkers.bodyFatPercentage}%)</span>
              </button>
            ))}
          </div>
        </div>

        {/* The 2-Page 9pt Clinical Dossier Component */}
        <div className="print-container">
          <ClinicalDossierA4 scan={activeScan} />
        </div>
      </main>

      <div className="no-print border-t border-slate-900 py-6 text-center text-xs font-mono-tech text-slate-500">
        BodyMap Clinical Dossier System • Impressão otimizada para formato A4 (210 × 297 mm) em 9pt
      </div>
    </div>
  );
}
