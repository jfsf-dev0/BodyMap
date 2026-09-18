'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, BookOpen } from 'lucide-react';

export default function GraduacaoPage() {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [graduationYear, setGraduationYear] = useState('2026');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegistered(true);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-4xl w-full px-4 py-12 sm:px-6 lg:px-8 flex-1">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-mono-tech text-emerald-800 font-semibold mb-3 shadow-sm">
            <GraduationCap className="h-4 w-4" />
            <span>Exclusivo para Estudantes de Nutrição</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Plano Graduação BodyMap: 100% Gratuito até sua Formatura
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-sans">
            Inicie seus atendimentos de estágio e clínica-escola com a plataforma mais moderna do mercado. Acesso completo sem custos durante toda a graduação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form (6 cols) */}
          <div className="md:col-span-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            {registered ? (
              <div className="text-center py-8 space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inscrição Acadêmica Ativada!</h3>
                <p className="text-xs text-slate-600 font-mono-tech leading-relaxed">
                  Bem-vindo ao BodyMap Acadêmico, {name}! Seu acesso gratuito foi liberado com sucesso para a instituição {university}.
                </p>
                <Link
                  href="/consultorio"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors"
                >
                  <span>Acessar Meu Consultório Acadêmico</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono-tech">
                <div>
                  <label className="block uppercase text-slate-600 mb-1 font-medium">Nome Completo</label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block uppercase text-slate-600 mb-1 font-medium">Instituição de Ensino Superior (Faculdade)</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: UFRJ, USP, UNIFESP, PUC, Estácio..."
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:outline-none font-sans"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block uppercase text-slate-600 mb-1 font-medium">Ano Previsto</label>
                    <select
                      value={graduationYear}
                      onChange={(e) => setGraduationYear(e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                    >
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                  <div>
                    <label className="block uppercase text-slate-600 mb-1 font-medium">Semestre</label>
                    <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none">
                      <option>1º Semestre</option>
                      <option>2º Semestre</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
                >
                  <GraduationCap className="h-4 w-4" />
                  <span>Ativar Minha Conta Acadêmica Gratuita</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Benefits list (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
              <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-emerald-700" />
                <span>O que está incluso no seu acesso acadêmico:</span>
              </h3>

              <ul className="space-y-3 text-xs text-slate-600 font-mono-tech">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Até 20 pacientes ativos</strong> para estágios e estudos de caso clínicos.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Base TACO & TBCA completa</strong> com cálculo automático de micronutrientes.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Scanner 3D Óptico liberado</strong> para prática diagnóstica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Dossiê Editorial 9pt</strong> com identificação acadêmica.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>40% de desconto perpétuo</strong> no plano Pro após a sua formatura.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
