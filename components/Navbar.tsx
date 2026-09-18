'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Scan, Utensils, FileText, Smartphone, GraduationCap, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-sm shadow-sm group-hover:bg-slate-800 transition-all">
            <Scan className="h-4 w-4 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-tight text-slate-900 text-base">BodyMap</span>
              <span className="rounded bg-slate-100 border border-slate-200 px-1.5 py-0.2 text-[9px] font-semibold text-slate-600 uppercase font-mono-tech">
                Software Clínico
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono-tech -mt-0.5 tracking-tight">
              Nutrição & Antropometria 3D
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-slate-600">
          <Link href="/consultorio" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
            <Utensils className="h-3.5 w-3.5 text-slate-400" />
            <span>Prescrição TACO</span>
          </Link>
          <Link href="/scanner" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
            <Scan className="h-3.5 w-3.5 text-slate-400" />
            <span>Avaliação 3D</span>
          </Link>
          <Link href="/app-paciente" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
            <Smartphone className="h-3.5 w-3.5 text-slate-400" />
            <span>App do Paciente</span>
          </Link>
          <Link href="/dossie" className="hover:text-slate-900 transition-colors flex items-center gap-1.5">
            <FileText className="h-3.5 w-3.5 text-slate-400" />
            <span>Dossiê 9pt</span>
          </Link>
          <Link href="/#comparativo-webdiet" className="hover:text-slate-900 transition-colors">
            vs. WebDiet
          </Link>
          <Link href="/graduacao" className="hover:text-emerald-700 transition-colors flex items-center gap-1 text-emerald-600 font-semibold">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>Estudantes (Grátis)</span>
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/consultorio"
            className="text-xs font-medium text-slate-700 hover:text-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 shadow-xs transition-colors"
          >
            Acessar Consultório
          </Link>
          <Link
            href="/consultorio"
            className="flex items-center gap-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all"
          >
            <span>Experimentar Grátis</span>
            <ArrowRight className="h-3.5 w-3.5 text-slate-400" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 text-xs font-medium text-slate-700">
          <Link
            href="/consultorio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-slate-900"
          >
            Prescrição & Dieta TACO
          </Link>
          <Link
            href="/scanner"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-slate-900"
          >
            Avaliação 3D por Fotos
          </Link>
          <Link
            href="/app-paciente"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-slate-900"
          >
            Aplicativo do Paciente (PWA)
          </Link>
          <Link
            href="/dossie"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-slate-900"
          >
            Dossiê Editorial 9pt (A4)
          </Link>
          <Link
            href="/#comparativo-webdiet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 hover:text-slate-900"
          >
            Comparativo com WebDiet
          </Link>
          <Link
            href="/graduacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-emerald-600 font-semibold"
          >
            Plano Graduação (Gratuito)
          </Link>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/consultorio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-medium text-slate-700 bg-slate-50 rounded-lg border border-slate-200"
            >
              Acessar Consultório
            </Link>
            <Link
              href="/consultorio"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg"
            >
              Começar Teste Grátis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
