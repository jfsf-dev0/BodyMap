'use client';

import React, { useState } from 'react';
import { BodyScanRecord } from '../lib/types';
import { compareScans } from '../lib/bodymap-engine';
import { Calendar, TrendingDown, TrendingUp, Sparkles, ArrowRight, CheckCircle } from 'lucide-react';

interface EvolutionSliderProps {
  baselineScan: BodyScanRecord;
  followupScan: BodyScanRecord;
}

export default function EvolutionSlider({ baselineScan, followupScan }: EvolutionSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const comparison = compareScans(baselineScan, followupScan);

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-6 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              Comparador Morfológico Temporal
            </h3>
            <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-300">
              {comparison.daysBetween} dias de protocolo
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Arraste o divisor central para visualizar a transformação da composição corporal e deltas milimétricos.
          </p>
        </div>

        {/* Delta Badges */}
        <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono-tech">
          {/* Delta BF */}
          <div className="flex items-center gap-1 rounded-lg bg-emerald-950/60 border border-emerald-500/40 px-2.5 py-1 text-emerald-300">
            <TrendingDown className="h-3.5 w-3.5 text-emerald-400" />
            <span>Gordura:</span>
            <strong className="text-white font-bold">{comparison.deltaBodyFatPercent}%</strong>
          </div>

          {/* Delta Lean Mass */}
          <div className="flex items-center gap-1 rounded-lg bg-cyan-950/60 border border-cyan-500/40 px-2.5 py-1 text-cyan-300">
            <TrendingUp className="h-3.5 w-3.5 text-cyan-400" />
            <span>Massa Magra:</span>
            <strong className="text-white font-bold">+{comparison.deltaLeanMassKg} kg</strong>
          </div>

          {/* Delta Waist */}
          <div className="flex items-center gap-1 rounded-lg bg-amber-950/60 border border-amber-500/40 px-2.5 py-1 text-amber-300">
            <TrendingDown className="h-3.5 w-3.5 text-amber-400" />
            <span>Cintura:</span>
            <strong className="text-white font-bold">{comparison.deltaWaistCm} cm</strong>
          </div>
        </div>
      </div>

      {/* Interactive Drag Split View */}
      <div className="relative my-6 select-none overflow-hidden rounded-xl border border-slate-800 bg-slate-950 h-80 sm:h-96">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-grid-tech-dark opacity-60" />

        {/* Left Side: Baseline (T0) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-slate-950"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 w-[320px] sm:w-[480px]">
            {/* Header T0 */}
            <div className="flex items-center gap-2">
              <span className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 text-[10px] font-mono-tech text-slate-300 uppercase">
                Linha de Base (T0)
              </span>
              <span className="text-xs text-slate-400 font-mono-tech">
                {baselineScan.scanDate}
              </span>
            </div>

            {/* Silhouette Representation T0 */}
            <div className="flex items-center justify-center h-48">
              <div className="relative text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-300 font-mono-tech tabular-nums tracking-tight">
                  {baselineScan.biomarkers.bodyFatPercentage}%
                </div>
                <div className="text-xs text-slate-400 font-mono-tech mt-1">Gordura Corporal</div>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs font-mono-tech text-slate-300">
                  <div>Peso: <span className="font-bold text-white">{baselineScan.weightKg}kg</span></div>
                  <div>Cintura: <span className="font-bold text-white">{baselineScan.measurements.waist}cm</span></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-mono-tech">
              Scan Inicial no consultório
            </div>
          </div>
        </div>

        {/* Right Side: Follow-up (T1) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden bg-emerald-950/20"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 w-[320px] sm:w-[480px] right-0">
            {/* Header T1 */}
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-emerald-400/80 font-mono-tech">
                {followupScan.scanDate}
              </span>
              <span className="rounded bg-emerald-500/20 border border-emerald-500/50 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-300 uppercase font-semibold">
                Reavaliação (T1)
              </span>
            </div>

            {/* Silhouette Representation T1 */}
            <div className="flex items-center justify-center h-48">
              <div className="relative text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono-tech tabular-nums tracking-tight">
                  {followupScan.biomarkers.bodyFatPercentage}%
                </div>
                <div className="text-xs text-emerald-300 font-mono-tech mt-1">Gordura Corporal</div>
                <div className="mt-3 flex items-center justify-center gap-4 text-xs font-mono-tech text-emerald-200">
                  <div>Peso: <span className="font-bold text-white">{followupScan.weightKg}kg</span></div>
                  <div>Cintura: <span className="font-bold text-white">{followupScan.measurements.waist}cm</span></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-emerald-400/70 font-mono-tech text-right">
              Mapeamento de 90 dias com IA
            </div>
          </div>
        </div>

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-0.5 h-full bg-emerald-400 shadow-[0_0_12px_#10b981]" />
          <div className="absolute flex h-9 w-9 items-center justify-center rounded-full border-2 border-emerald-400 bg-slate-900 text-emerald-400 shadow-xl pointer-events-auto cursor-ew-resize">
            <span className="text-xs font-bold font-mono-tech">↔</span>
          </div>
        </div>

        {/* Hidden Range Input for full touch and mouse dragging */}
        <input
          type="range"
          min="5"
          max="95"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="absolute inset-0 z-40 opacity-0 cursor-ew-resize w-full h-full"
          aria-label="Controle deslizante de evolução temporal"
        />
      </div>

      {/* Comparison Detailed Metrics Table */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono-tech">
        <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3">
          <div className="text-slate-400 text-[10px] uppercase">Massa Adiposa</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-400">{baselineScan.biomarkers.fatMassKg}kg</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="text-emerald-400 font-bold">{followupScan.biomarkers.fatMassKg}kg</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1">
            {(followupScan.biomarkers.fatMassKg - baselineScan.biomarkers.fatMassKg).toFixed(1)}kg de gordura pura
          </div>
        </div>

        <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3">
          <div className="text-slate-400 text-[10px] uppercase">Massa Muscular</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-400">{baselineScan.biomarkers.leanMassKg}kg</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="text-cyan-400 font-bold">{followupScan.biomarkers.leanMassKg}kg</span>
          </div>
          <div className="text-[10px] text-cyan-400 mt-1">
            +{(followupScan.biomarkers.leanMassKg - baselineScan.biomarkers.leanMassKg).toFixed(1)}kg preservados/hipertrofia
          </div>
        </div>

        <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3">
          <div className="text-slate-400 text-[10px] uppercase">Abdômen / Umbigo</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-400">{baselineScan.measurements.abdomen}cm</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="text-emerald-400 font-bold">{followupScan.measurements.abdomen}cm</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1">
            {(followupScan.measurements.abdomen - baselineScan.measurements.abdomen).toFixed(1)}cm de redução
          </div>
        </div>

        <div className="rounded-lg bg-slate-950/60 border border-slate-800 p-3">
          <div className="text-slate-400 text-[10px] uppercase">Gordura Visceral</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-400">Nível {baselineScan.biomarkers.visceralFatLevel}</span>
            <ArrowRight className="h-3 w-3 text-slate-600" />
            <span className="text-emerald-400 font-bold">Nível {followupScan.biomarkers.visceralFatLevel}</span>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1 flex items-center gap-1">
            <CheckCircle className="h-2.5 w-2.5" />
            Risco Metabólico Reduzido
          </div>
        </div>
      </div>
    </div>
  );
}
