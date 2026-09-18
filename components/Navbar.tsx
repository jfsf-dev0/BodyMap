'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scan, Activity, FileText, BarChart3, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400 group-hover:bg-emerald-500/20 transition-all">
            <Scan className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-white text-lg">BodyMap</span>
              <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 text-[10px] font-semibold text-emerald-300">
                3D AI
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono-tech -mt-0.5 tracking-wider uppercase">
              Bioantropometria Óptica
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-300">
          <Link href="#demo" className="hover:text-emerald-400 transition-colors">
            Scanner Interativo
          </Link>
          <Link href="#tecnologia" className="hover:text-emerald-400 transition-colors">
            Tecnologia
          </Link>
          <Link href="#comparativo" className="hover:text-emerald-400 transition-colors">
            DEXA vs. BodyMap
          </Link>
          <Link href="#dossie" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            Dossiê 9pt
          </Link>
          <Link href="#planos" className="hover:text-emerald-400 transition-colors">
            Planos
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-md hover:bg-slate-900 transition-colors"
          >
            Portal Clínico
          </Link>
          <Link
            href="/scanner"
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all"
          >
            <span>Fazer Scan 3D</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-3">
          <Link
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Scanner Interativo
          </Link>
          <Link
            href="#tecnologia"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Tecnologia & Validação
          </Link>
          <Link
            href="#comparativo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Comparativo com DEXA & Bioimpedância
          </Link>
          <Link
            href="/dossie"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Ver Dossiê Editorial 9pt
          </Link>
          <Link
            href="#planos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Planos e Preços
          </Link>
          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800"
            >
              Portal Clínico do Nutricionista
            </Link>
            <Link
              href="/scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg"
            >
              Iniciar Scan 3D Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
