'use client';

import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import PatientAppSimulator from '../../components/PatientAppSimulator';
import Link from 'next/link';
import { ArrowLeft, Smartphone, ShieldCheck, Zap, Heart } from 'lucide-react';

export default function AppPacientePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-5xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
          <Link
            href="/"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Voltar para Início</span>
          </Link>

          <span className="text-xs font-mono-tech text-emerald-400 font-semibold">
            PWA Mobile-First • iOS & Android
          </span>
        </div>

        {/* The Interactive Patient Simulator */}
        <PatientAppSimulator />

        {/* Benefits strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 font-mono-tech text-xs">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center gap-2 text-emerald-400 font-bold mb-2">
              <Zap className="h-4 w-4" />
              <span>Login sem Senha (Magic Link)</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              O paciente nunca esquece a senha. Ele recebe um link direto via WhatsApp que abre o app instantaneamente em qualquer smartphone.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Funciona 100% Offline</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              O cardápio e a lista de compras ficam salvos localmente no aparelho. O paciente consulta suas refeições mesmo sem sinal de internet no supermercado.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex items-center gap-2 text-purple-400 font-bold mb-2">
              <Heart className="h-4 w-4" />
              <span>Feedback Humanizado</span>
            </div>
            <p className="text-slate-400 leading-relaxed font-sans">
              O paciente se sente acompanhado todos os dias pelo nutricionista, aumentando drasticamente a taxa de retorno nas consultas.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
