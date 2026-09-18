'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scan, Utensils, FileText, Smartphone, GraduationCap, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
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
                PRO
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono-tech -mt-0.5 tracking-wider uppercase">
              Clinical Nutrition & 3D AI
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300 font-mono-tech">
          <Link href="/consultorio" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Utensils className="h-3.5 w-3.5 text-emerald-400" />
            Prescrição TACO
          </Link>
          <Link href="/scanner" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Scan className="h-3.5 w-3.5 text-cyan-400" />
            Scanner 3D IA
          </Link>
          <Link href="/app-paciente" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <Smartphone className="h-3.5 w-3.5 text-amber-400" />
            App do Paciente
          </Link>
          <Link href="/dossie" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <FileText className="h-3.5 w-3.5 text-emerald-400" />
            Dossiê 9pt
          </Link>
          <Link href="/#comparativo-webdiet" className="hover:text-emerald-400 transition-colors">
            vs. WebDiet
          </Link>
          <Link href="/graduacao" className="hover:text-emerald-400 transition-colors flex items-center gap-1 text-slate-400">
            <GraduationCap className="h-3.5 w-3.5 text-slate-400" />
            Graduação
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3 font-mono-tech">
          <Link
            href="/consultorio"
            className="text-xs font-semibold text-slate-200 hover:text-white px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/80 hover:bg-slate-800 transition-colors"
          >
            Acessar Consultório
          </Link>
          <Link
            href="/scanner"
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-sm shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all cursor-pointer"
          >
            <span>Scan 3D Grátis</span>
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
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-5 space-y-2.5 font-mono-tech">
          <Link
            href="/consultorio"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Prescrição & Dieta TACO
          </Link>
          <Link
            href="/scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Scanner 3D Óptico por IA
          </Link>
          <Link
            href="/app-paciente"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Aplicativo do Paciente (PWA)
          </Link>
          <Link
            href="/dossie"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Dossiê Editorial 9pt (A4)
          </Link>
          <Link
            href="/#comparativo-webdiet"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Por que migrar do WebDiet
          </Link>
          <Link
            href="/graduacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-xs font-medium text-slate-300 hover:text-emerald-400 py-1"
          >
            Plano Graduação (Gratuito)
          </Link>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <Link
              href="/consultorio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-slate-200 bg-slate-900 rounded-lg border border-slate-800"
            >
              Acessar Consultório
            </Link>
            <Link
              href="/scanner"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-bold text-slate-950 bg-emerald-500 hover:bg-emerald-400 rounded-lg"
            >
              Fazer Scan 3D Agora
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
