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
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

export default function HomePage() {
  const baselineScan = sampleScans[0];
  const followupScan = sampleScans[1];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-600 selection:text-white">
      <Navbar />

      {/* ============================================================ */}
      {/* HERO SECTION: DIRECT POSITIONING & CLINICAL SPEED            */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-white bg-grid-software">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Positioning Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-xs font-mono-tech text-emerald-800 font-semibold mb-6 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              <span>Plataforma Clínica de Alta Precisão • Prescrição em &lt; 10 min + 3D Óptico</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              O Software de Nutrição que{' '}
              <span className="text-emerald-700">
                Eleva o Nível do seu Consultório
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-sans">
              Prescrição dietética ágil em menos de 10 minutos (base TACO oficial), bioantropometria corporal 3D calibrada por fotos, dossiê editorial impresso em 9pt e aplicativo móvel com diário fotográfico integrado para seus pacientes.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-mono-tech">
              <Link
                href="/consultorio"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
              >
                <Utensils className="h-4 w-4" />
                <span>Acessar Consultório Demo</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/scanner"
                className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3.5 text-xs font-semibold text-slate-700 shadow-sm transition-colors"
              >
                <Scan className="h-4 w-4 text-emerald-700" />
                <span>Testar Scanner 3D</span>
              </Link>
              <Link
                href="/graduacao"
                className="flex items-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 px-4 py-3.5 text-xs font-semibold text-emerald-800 transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
                <span>Plano Graduação (Gratuito)</span>
              </Link>
            </div>

            {/* Key Advantages Strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-200 pt-8 text-left font-mono-tech">
              <div className="border-l-2 border-emerald-600 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">&lt; 10 min</div>
                <div className="text-xs text-slate-500 mt-0.5">Tempo Médio de Prescrição</div>
              </div>
              <div className="border-l-2 border-emerald-600 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-emerald-700 tabular-nums">3D Incluso</div>
                <div className="text-xs text-slate-500 mt-0.5">Sem Taxas Extras de Módulo</div>
              </div>
              <div className="border-l-2 border-emerald-600 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">Dossiê 9pt</div>
                <div className="text-xs text-slate-500 mt-0.5">Padrão Editorial MetricLab</div>
              </div>
              <div className="border-l-2 border-emerald-600 pl-3">
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">PWA Apple</div>
                <div className="text-xs text-slate-500 mt-0.5">App com Diário Fotográfico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DIRECT HEAD-TO-HEAD COMPARISON                              */}
      {/* ============================================================ */}
      <HeadToHeadComparison />

      {/* ============================================================ */}
      {/* PILLAR 1: LIVE TACO MEAL PLANNER IN ACTION                   */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-700 font-semibold">
              Módulo 1 • Prescrição Clínica Ágil
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              Monte o Cardápio Completo Durante a Consulta
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Evite passar madrugadas finalizando dietas pendentes. Com o cálculo em tempo real e a base TACO integrada, o plano alimentar sai concluído em menos de 10 minutos.
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
      <section className="py-16 lg:py-24 border-t border-slate-200 bg-slate-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PatientAppSimulator />
        </div>
      </section>

      {/* ============================================================ */}
      {/* PILLAR 4: TEMPORAL EVOLUTION COMPARATOR                      */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-700 font-semibold">
              Fidelização & Métricas
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Comparador Morfológico Temporal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Demonstre objetivamente ao paciente a evolução de centímetros e redução de gordura com a visualização comparativa lado a lado.
            </p>
          </div>

          <EvolutionSlider baselineScan={baselineScan} followupScan={followupScan} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* STUDENT FUNNEL CALLOUT                                       */}
      {/* ============================================================ */}
      <section className="py-14 border-t border-slate-200 bg-emerald-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-emerald-200 bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-mono-tech text-emerald-800 font-bold">
                <GraduationCap className="h-4 w-4" />
                <span>PLANO GRADUAÇÃO 100% GRATUITO</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                É estudante de Nutrição? O BodyMap é gratuito até a sua formatura.
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Tenha acesso à base TACO, prescrição em tempo real e ao Scanner 3D para atender seus pacientes de estágio e clínica-escola. Sem marcas d`água invasivas e com transição facilitada para o plano profissional.
              </p>
            </div>

            <Link
              href="/graduacao"
              className="shrink-0 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-white shadow-sm transition-colors font-mono-tech cursor-pointer"
            >
              Ativar Acesso de Estudante ➜
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
