'use client';

import React from 'react';
import { BodyBiomarkers, BiologicalSex } from '../lib/types';
import { Activity, Flame, ShieldAlert, Heart, Scale, Zap } from 'lucide-react';

interface BiomarkerCardsProps {
  biomarkers: BodyBiomarkers;
  sex: BiologicalSex;
  weightKg: number;
}

export default function BiomarkerCards({ biomarkers, sex, weightKg }: BiomarkerCardsProps) {
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'baixo':
        return { label: 'Risco Baixo', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'moderado':
        return { label: 'Risco Moderado', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'elevado':
        return { label: 'Risco Elevado', bg: 'bg-orange-50 text-orange-700 border-orange-200' };
      default:
        return { label: 'Muito Elevado', bg: 'bg-rose-50 text-rose-700 border-rose-200' };
    }
  };

  const riskBadge = getRiskBadge(biomarkers.waistToHipRisk);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* 1. Percentual de Gordura */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Gordura (%BF)
          </span>
          <Activity className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
            {biomarkers.bodyFatPercentage}%
          </div>
          <div className="text-[10px] text-slate-500 font-mono-tech">
            {biomarkers.fatMassKg} kg massa gorda
          </div>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-emerald-500 h-full rounded-full"
            style={{ width: `${Math.min(100, Math.max(10, biomarkers.bodyFatPercentage * 2.2))}%` }}
          />
        </div>
      </div>

      {/* 2. Massa Magra */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Massa Magra (MLG)
          </span>
          <Zap className="h-3.5 w-3.5 text-sky-600" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
            {biomarkers.leanMassKg} <span className="text-xs font-normal text-slate-500">kg</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono-tech">
            {((biomarkers.leanMassKg / weightKg) * 100).toFixed(1)}% do peso total
          </div>
        </div>
        <div className="text-[10px] text-sky-700 font-mono-tech">
          Músculos + Esqueleto
        </div>
      </div>

      {/* 3. Gordura Visceral */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Gordura Visceral
          </span>
          <ShieldAlert className="h-3.5 w-3.5 text-amber-600" />
        </div>
        <div className="my-1.5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
              Nível {biomarkers.visceralFatLevel}
            </span>
            <span className="text-[10px] text-slate-400 font-mono-tech">/12</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono-tech">
            {biomarkers.visceralFatLevel <= 4
              ? 'Faixa Ótima'
              : biomarkers.visceralFatLevel <= 8
              ? 'Atenção Moderada'
              : 'Alerta Metabólico'}
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-xs ${
                i < biomarkers.visceralFatLevel
                  ? i < 4
                    ? 'bg-emerald-500'
                    : i < 8
                    ? 'bg-amber-500'
                    : 'bg-rose-500'
                  : 'bg-slate-100'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4. Relação Cintura/Quadril (RCQ) */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Risco Cardíaco (RCQ)
          </span>
          <Heart className="h-3.5 w-3.5 text-rose-500" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
            {biomarkers.waistToHipRatio}
          </div>
          <div className="mt-0.5">
            <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold border ${riskBadge.bg}`}>
              {riskBadge.label}
            </span>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono-tech">
          Padrão Clínico OMS
        </div>
      </div>

      {/* 5. Taxa Metabólica Basal (TMB) */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Metabolismo Basal
          </span>
          <Flame className="h-3.5 w-3.5 text-orange-500" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
            {biomarkers.basalMetabolicRateKcal}{' '}
            <span className="text-xs font-normal text-slate-500">kcal</span>
          </div>
          <div className="text-[10px] text-slate-500 font-mono-tech">
            Katch-McArdle (via MLG)
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono-tech">
          Gasto diário de repouso
        </div>
      </div>

      {/* 6. Assimetria */}
      <div className="rounded-xl border border-slate-200 bg-white p-3.5 shadow-xs flex flex-col justify-between hover:border-slate-300 transition-all">
        <div className="flex items-center justify-between text-slate-500 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-500 font-semibold">
            Assimetria Lateral
          </span>
          <Scale className="h-3.5 w-3.5 text-indigo-500" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-slate-900 tabular-nums tracking-tight font-mono-tech">
            {biomarkers.asymmetryScorePercent}%
          </div>
          <div className="text-[10px] text-slate-500 font-mono-tech">
            {biomarkers.asymmetryScorePercent <= 2.0
              ? 'Excelente Simetria'
              : biomarkers.asymmetryScorePercent <= 5.0
              ? 'Assimetria Típica'
              : 'Compensação Notável'}
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono-tech">
          Membros D/E
        </div>
      </div>
    </div>
  );
}
