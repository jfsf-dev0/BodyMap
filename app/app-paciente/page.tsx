'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PatientAppSimulator from '../../components/PatientAppSimulator';
import Link from 'next/link';
import { ArrowLeft, Smartphone, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function AppPacientePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-5xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        <div className="mb-6 flex items-center justify-between border-b border-slate-200 pb-4">
          <Link
            href="/"
            className="flex items-center gap-1 text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para Início</span>
          </Link>

          <span className="text-xs font-mono-tech text-emerald-700 font-semibold">
            PWA Mobile-First • Padrão Apple Health
          </span>
        </div>

        {/* The Interactive Patient Simulator */}
        <PatientAppSimulator />

        {/* Benefits strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-tech text-xs">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700 font-bold mb-2">
              <Zap className="h-4 w-4" />
              <span>Acesso Rápido via Magic Link</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-sans">
              O paciente não precisa memorizar senhas complexas. Ele recebe um link seguro pelo WhatsApp que inicializa o aplicativo imediatamente.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-blue-700 font-bold mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Armazenamento Offline</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-sans">
              O cardápio alimentar e a lista de compras permanecem em cache no dispositivo, permitindo consulta mesmo sem sinal de dados no mercado.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-2 text-rose-700 font-bold mb-2">
              <Heart className="h-4 w-4" />
              <span>Acompanhamento Próximo</span>
            </div>
            <p className="text-slate-600 leading-relaxed font-sans">
              O paciente sente a presença contínua do nutricionista entre as consultas através de feedbacks no diário fotográfico, impulsionando a fidelização.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
