'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ScanDemoWidget from '../components/ScanDemoWidget';
import EvolutionSlider from '../components/EvolutionSlider';
import HeadToHeadComparison from '../components/HeadToHeadComparison';
import PatientAppSimulator from '../components/PatientAppSimulator';
import MealPlanner from '../components/MealPlanner';
import Footer from '../components/Footer';
import { sampleScans } from '../lib/sample-scans';
import Link from 'next/link';
import {
  Scan,
  Utensils,
  Smartphone,
  FileText,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle2,
  Check,
  GraduationCap,
  Layers,
  Activity,
  HeartPulse,
} from 'lucide-react';

export default function HomePage() {
  const baselineScan = sampleScans[0];
  const followupScan = sampleScans[1];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />

      {/* ============================================================ */}
      {/* HERO SECTION: DIRECT HEAD-TO-HEAD WITH WEBDIET              */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-tech-dark opacity-40 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Direct Battle Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 text-xs font-mono-tech text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>A Nova Geração que veio substituir o WebDiet • Prescrição em &lt; 10 min + 3D IA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              O Software de Nutrição que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Redefine o seu Consultório
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto font-sans">
              Prescrição dietética ágil em menos de 10 minutos (base TACO/TBCA), Mapeamento Corporal 3D por fotos com Inteligência Artificial, Dossiê Editorial em 9pt, Prontuário Inteligente e o Aplicativo Mobile mais sofisticado do mercado para seus pacientes.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono-tech">
              <Link
                href="/consultorio"
                className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <Utensils className="h-4 w-4" />
                <span>Acessar Consultório Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/scanner"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 px-5 py-3.5 text-xs font-semibold text-slate-200 backdrop-blur-sm transition-all"
              >
                <Scan className="h-4 w-4 text-cyan-400" />
                <span>Testar Scanner 3D Grátis</span>
              </Link>
              <Link
                href="/graduacao"
                className="flex items-center gap-1.5 rounded-xl border border-emerald-500/40 bg-emerald-950/20 px-4 py-3.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-950/40 transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Sou Estudante (Grátis)</span>
              </Link>
            </div>

            {/* Key Advantages Strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8 text-left font-mono-tech">
              <div className="border-l border-emerald-500/40 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">&lt; 10 min</div>
                <div className="text-xs text-slate-400 mt-0.5">Tempo Médio de Prescrição</div>
              </div>
              <div className="border-l border-emerald-500/40 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 tabular-nums">3D Nativo</div>
                <div className="text-xs text-slate-400 mt-0.5">Sem Taxa Abusiva Black</div>
              </div>
              <div className="border-l border-emerald-500/40 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-cyan-400 tabular-nums">Dossiê 9pt</div>
                <div className="text-xs text-slate-400 mt-0.5">Padrão Editorial MetricLab</div>
              </div>
              <div className="border-l border-emerald-500/40 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-white tabular-nums">PWA Apple</div>
                <div className="text-xs text-slate-400 mt-0.5">App com Diário Fotográfico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DIRECT HEAD-TO-HEAD COMPARISON (WHY MIGRATE FROM WEBDIET)    */}
      {/* ============================================================ */}
      <HeadToHeadComparison />

      {/* ============================================================ */}
      {/* PILLAR 1: LIVE TACO MEAL PLANNER IN ACTION                   */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400 font-semibold">
              Pilar 1 • Prescrição Clínica Ágil
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Monte o Cardápio Completo Durante a Consulta
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Esqueça ter que finalizar a dieta de madrugada depois que o paciente foi embora. Com o cálculo em tempo real e a base TACO integrada, você fecha o plano em menos de 10 minutos.
            </p>
          </div>

          <MealPlanner />
        </div>
      </section>

      {/* ============================================================ */}
      {/* PILLAR 2: 3D SCANNER INTERACTIVE DEMO                       */}
      {/* ============================================================ */}
      <ScanDemoWidget />

      {/* ============================================================ */}
      {/* PILLAR 3: PATIENT MOBILE APP EXPERIENCE                      */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PatientAppSimulator />
        </div>
      </section>

      {/* ============================================================ */}
      {/* PILLAR 4: TEMPORAL EVOLUTION COMPARATOR                      */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400 font-semibold">
              Fidelização & Prova de Resultados
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Comparador Morfológico Temporal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Mostre ao paciente exatamente quantos centímetros e quilos de gordura foram eliminados com o comparador interativo de evolução.
            </p>
          </div>

          <EvolutionSlider baselineScan={baselineScan} followupScan={followupScan} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* STUDENT FUNNEL CALLOUT (CHALLENGING WEBDIET GRADUAÇÃO)       */}
      {/* ============================================================ */}
      <section className="py-12 border-t border-slate-800/80 bg-emerald-950/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-500/40 bg-slate-950/80 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-3 py-1 text-[11px] font-mono-tech text-emerald-300 font-bold">
                <GraduationCap className="h-4 w-4" />
                <span>PLANO GRADUAÇÃO 100% GRATUITO</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                É estudante de Nutrição? O BodyMap é gratuito até você se formar!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                Tenha acesso à base TACO, prescrição em tempo real e ao Scanner 3D para atender seus pacientes de estágio. Sem marcas d`água feias e com transição facilitada após a formatura.
              </p>
            </div>

            <Link
              href="/graduacao"
              className="shrink-0 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all font-mono-tech cursor-pointer"
            >
              Ativar Minha Conta de Estudante ➜
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
