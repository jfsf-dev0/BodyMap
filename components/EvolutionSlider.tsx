'use client';

import React, { useState } from 'react';
import { BodyScanRecord } from '../lib/types';
import { compareScans } from '../lib/bodymap-engine';
import { Calendar, TrendingDown, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

interface EvolutionSliderProps {
  baselineScan: BodyScanRecord;
  followupScan: BodyScanRecord;
}

export default function EvolutionSlider({ baselineScan, followupScan }: EvolutionSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const comparison = compareScans(baselineScan, followupScan);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-7 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold text-slate-900">
              Comparador Morfológico Temporal
            </h3>
            <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-mono-tech text-slate-600">
              {comparison.daysBetween} dias de protocolo
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Arraste o divisor central para visualizar a transformação corporal e os deltas métricos entre as consultas.
          </p>
        </div>

        {/* Delta Badges */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech">
          <div className="flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2.5 py-1 text-emerald-800">
            <TrendingDown className="h-3.5 w-3.5 text-emerald-600" />
            <span>Gordura:</span>
            <strong className="font-bold">{comparison.deltaBodyFatPercent}%</strong>
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-sky-50 border border-sky-200 px-2.5 py-1 text-sky-800">
            <TrendingUp className="h-3.5 w-3.5 text-sky-600" />
            <span>Massa Magra:</span>
            <strong className="font-bold">+{comparison.deltaLeanMassKg} kg</strong>
          </div>

          <div className="flex items-center gap-1 rounded-lg bg-amber-50 border border-amber-200 px-2.5 py-1 text-amber-800">
            <TrendingDown className="h-3.5 w-3.5 text-amber-600" />
            <span>Cintura:</span>
            <strong className="font-bold">{comparison.deltaWaistCm} cm</strong>
          </div>
        </div>
      </div>

      {/* Interactive Drag Split View */}
      <div className="relative my-6 select-none overflow-hidden rounded-xl border border-slate-200 bg-slate-50 h-72 sm:h-84">
        {/* Left Side: Baseline (T0) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-slate-100"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 w-[320px] sm:w-[480px]">
            <div className="flex items-center gap-2">
              <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-mono-tech text-slate-700 uppercase font-semibold">
                Linha de Base (T0)
              </span>
              <span className="text-xs text-slate-500 font-mono-tech">
                {baselineScan.scanDate}
              </span>
            </div>

            <div className="flex items-center justify-center h-36">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-slate-700 font-mono-tech tabular-nums tracking-tight">
                  {baselineScan.biomarkers.bodyFatPercentage}%
                </div>
                <div className="text-xs text-slate-500 font-mono-tech mt-1">Gordura Corporal</div>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs font-mono-tech text-slate-600">
                  <div>Peso: <span className="font-bold text-slate-900">{baselineScan.weightKg}kg</span></div>
                  <div>Cintura: <span className="font-bold text-slate-900">{baselineScan.measurements.waist}cm</span></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 font-mono-tech">
              Scan Inicial em Consultório
            </div>
          </div>
        </div>

        {/* Right Side: Follow-up (T1) */}
        <div
          className="absolute inset-y-0 right-0 overflow-hidden bg-emerald-50/40"
          style={{ width: `${100 - sliderPosition}%` }}
        >
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 w-[320px] sm:w-[480px] right-0">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs text-slate-500 font-mono-tech">
                {followupScan.scanDate}
              </span>
              <span className="rounded bg-emerald-100 border border-emerald-300 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-800 uppercase font-bold">
                Reavaliação (T1)
              </span>
            </div>

            <div className="flex items-center justify-center h-36">
              <div className="text-center">
                <div className="text-4xl sm:text-5xl font-extrabold text-emerald-700 font-mono-tech tabular-nums tracking-tight">
                  {followupScan.biomarkers.bodyFatPercentage}%
                </div>
                <div className="text-xs text-emerald-800 font-mono-tech mt-1 font-semibold">Gordura Corporal</div>
                <div className="mt-2 flex items-center justify-center gap-4 text-xs font-mono-tech text-slate-700">
                  <div>Peso: <span className="font-bold text-slate-900">{followupScan.weightKg}kg</span></div>
                  <div>Cintura: <span className="font-bold text-slate-900">{followupScan.measurements.waist}cm</span></div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-emerald-700 font-mono-tech text-right font-semibold">
              Evolução após 90 dias
            </div>
          </div>
        </div>

        {/* Draggable Divider Line & Handle */}
        <div
          className="absolute inset-y-0 z-30 flex items-center justify-center pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-0.5 h-full bg-slate-900" />
          <div className="absolute flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-900 bg-white text-slate-900 shadow-md pointer-events-auto cursor-ew-resize">
            <span className="text-xs font-bold font-mono-tech">↔</span>
          </div>
        </div>

        {/* Hidden Range Input */}
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
        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
          <div className="text-slate-500 text-[10px] uppercase font-semibold">Massa Adiposa</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-500">{baselineScan.biomarkers.fatMassKg}kg</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
            <span className="text-emerald-700 font-bold">{followupScan.biomarkers.fatMassKg}kg</span>
          </div>
          <div className="text-[10px] text-emerald-700 mt-1">
            {(followupScan.biomarkers.fatMassKg - baselineScan.biomarkers.fatMassKg).toFixed(1)}kg eliminados
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
          <div className="text-slate-500 text-[10px] uppercase font-semibold">Massa Muscular</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-500">{baselineScan.biomarkers.leanMassKg}kg</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
            <span className="text-sky-700 font-bold">{followupScan.biomarkers.leanMassKg}kg</span>
          </div>
          <div className="text-[10px] text-sky-700 mt-1">
            +{(followupScan.biomarkers.leanMassKg - baselineScan.biomarkers.leanMassKg).toFixed(1)}kg hipertrofia
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
          <div className="text-slate-500 text-[10px] uppercase font-semibold">Abdômen (Umbilical)</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-500">{baselineScan.measurements.abdomen}cm</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
            <span className="text-emerald-700 font-bold">{followupScan.measurements.abdomen}cm</span>
          </div>
          <div className="text-[10px] text-emerald-700 mt-1">
            {(followupScan.measurements.abdomen - baselineScan.measurements.abdomen).toFixed(1)}cm de redução
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 border border-slate-200 p-3">
          <div className="text-slate-500 text-[10px] uppercase font-semibold">Gordura Visceral</div>
          <div className="mt-1 flex items-baseline justify-between">
            <span className="text-slate-500">Nível {baselineScan.biomarkers.visceralFatLevel}</span>
            <ArrowRight className="h-3 w-3 text-slate-400" />
            <span className="text-emerald-700 font-bold">Nível {followupScan.biomarkers.visceralFatLevel}</span>
          </div>
          <div className="text-[10px] text-emerald-700 mt-1 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="h-3 w-3" />
            Risco Reduzido
          </div>
        </div>
      </div>
    </div>
  );
}
