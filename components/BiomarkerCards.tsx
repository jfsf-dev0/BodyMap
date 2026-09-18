'use client';

import React from 'react';
import { BodyBiomarkers, BiologicalSex } from '../lib/types';
import { Activity, Flame, ShieldAlert, Heart, Scale, Cpu, Zap } from 'lucide-react';

interface BiomarkerCardsProps {
  biomarkers: BodyBiomarkers;
  sex: BiologicalSex;
  weightKg: number;
}

export default function BiomarkerCards({ biomarkers, sex, weightKg }: BiomarkerCardsProps) {
  // Cor do risco RCQ
  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case 'baixo':
        return { label: 'Risco Baixo', bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' };
      case 'moderado':
        return { label: 'Risco Moderado', bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30' };
      case 'elevado':
        return { label: 'Risco Elevado', bg: 'bg-orange-500/10 text-orange-400 border-orange-500/30' };
      default:
        return { label: 'Muito Elevado', bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30' };
    }
  };

  const riskBadge = getRiskBadge(biomarkers.waistToHipRisk);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* 1. Percentual de Gordura */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-400">
            Gordura Corporal
          </span>
          <Activity className="h-3.5 w-3.5 text-emerald-400" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
            {biomarkers.bodyFatPercentage}%
          </div>
          <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono-tech">
            <span>{biomarkers.fatMassKg} kg de gordura</span>
          </div>
        </div>
        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 h-full rounded-full"
            style={{ width: `${Math.min(100, Math.max(10, biomarkers.bodyFatPercentage * 2.2))}%` }}
          />
        </div>
      </div>

      {/* 2. Massa Magra (LBM) */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-cyan-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-cyan-400">
            Massa Magra
          </span>
          <Zap className="h-3.5 w-3.5 text-cyan-400" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
            {biomarkers.leanMassKg} <span className="text-xs font-normal text-slate-400">kg</span>
          </div>
          <div className="text-[10px] text-slate-400 flex items-center gap-1 font-mono-tech">
            <span>{((biomarkers.leanMassKg / weightKg) * 100).toFixed(1)}% do peso total</span>
          </div>
        </div>
        <div className="text-[10px] text-cyan-300/80 font-mono-tech">
          Músculos + Órgãos + Água
        </div>
      </div>

      {/* 3. Gordura Visceral */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-amber-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-amber-400">
            Gordura Visceral
          </span>
          <ShieldAlert className="h-3.5 w-3.5 text-amber-400" />
        </div>
        <div className="my-1.5">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white tabular-nums tracking-tight">
              Nível {biomarkers.visceralFatLevel}
            </span>
            <span className="text-[10px] text-slate-400 font-mono-tech">/12</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-tech">
            {biomarkers.visceralFatLevel <= 4
              ? 'Faixa Ótima (Saudável)'
              : biomarkers.visceralFatLevel <= 8
              ? 'Atenção Moderada'
              : 'Alerta Metabólico'}
          </div>
        </div>
        <div className="flex gap-0.5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 flex-1 rounded-sm ${
                i < biomarkers.visceralFatLevel
                  ? i < 4
                    ? 'bg-emerald-400'
                    : i < 8
                    ? 'bg-amber-400'
                    : 'bg-rose-500'
                  : 'bg-slate-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* 4. Relação Cintura/Quadril (RCQ) */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-emerald-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-slate-400">
            Risco Cardíaco (RCQ)
          </span>
          <Heart className="h-3.5 w-3.5 text-rose-400" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
            {biomarkers.waistToHipRatio}
          </div>
          <div className="mt-0.5">
            <span className={`inline-block px-1.5 py-0.5 rounded text-[9px] font-semibold border ${riskBadge.bg}`}>
              {riskBadge.label}
            </span>
          </div>
        </div>
        <div className="text-[10px] text-slate-400 font-mono-tech">
          Padrão Clínico OMS
        </div>
      </div>

      {/* 5. Taxa Metabólica Basal (TMB) */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-orange-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-orange-400">
            Metabolismo Basal
          </span>
          <Flame className="h-3.5 w-3.5 text-orange-400" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
            {biomarkers.basalMetabolicRateKcal}{' '}
            <span className="text-xs font-normal text-slate-400">kcal/dia</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono-tech">
            Katch-McArdle (via MLG)
          </div>
        </div>
        <div className="text-[10px] text-slate-500 font-mono-tech">
          Gasto em repouso
        </div>
      </div>

      {/* 6. Assimetria & Postura */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3.5 backdrop-blur-sm flex flex-col justify-between hover:border-purple-500/40 transition-all">
        <div className="flex items-center justify-between text-slate-400 text-xs">
          <span className="font-mono-tech uppercase text-[10px] tracking-wider text-purple-400">
            Assimetria Lateral
          </span>
          <Scale className="h-3.5 w-3.5 text-purple-400" />
        </div>
        <div className="my-1.5">
          <div className="text-2xl font-bold text-white tabular-nums tracking-tight">
            {biomarkers.asymmetryScorePercent}%
          </div>
          <div className="text-[10px] text-slate-400 font-mono-tech">
            {biomarkers.asymmetryScorePercent <= 2.0
              ? 'Excelente Simetria'
              : biomarkers.asymmetryScorePercent <= 5.0
              ? 'Assimetria Típica'
              : 'Compensação Notável'}
          </div>
        </div>
        <div className="text-[10px] text-purple-300/70 font-mono-tech">
          Bíceps & Coxa D/E
        </div>
      </div>
    </div>
  );
}
