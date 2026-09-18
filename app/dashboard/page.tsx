'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { sampleScans } from '../../lib/sample-scans';
import Link from 'next/link';
import {
  Users,
  Scan,
  TrendingDown,
  Calendar,
  Send,
  Link2,
  CheckCircle2,
  FileText,
  Activity,
  ArrowRight,
  ExternalLink,
  MessageSquare,
  Copy,
  Plus,
} from 'lucide-react';

export default function DashboardPage() {
  const [invitePatientName, setInvitePatientName] = useState('');
  const [invitePhone, setInvitePhone] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [generatedInviteLink, setGeneratedInviteLink] = useState('');

  const handleGenerateInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!invitePatientName) return;

    const slug = invitePatientName.toLowerCase().replace(/\s+/g, '-');
    const token = Math.random().toString(36).substring(2, 9);
    const link = `https://bodymap.ai/scan?token=${token}&p=${slug}`;
    setGeneratedInviteLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedInviteLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tech uppercase text-emerald-700 font-bold">
                Portal Clínico
              </span>
              <span className="rounded bg-slate-100 border border-slate-200 px-2 py-0.5 text-[10px] font-mono-tech text-slate-700 font-medium">
                Clínica Gabriel Nutricionista
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Gestão de Avaliações & Laudos 3D
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/scanner"
              className="flex items-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Novo Scan em Consultório</span>
            </Link>
          </div>
        </div>

        {/* KPI Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-mono-tech">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Pacientes Ativos</span>
              <Users className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 tabular-nums">48</div>
            <div className="text-[11px] text-emerald-700 font-semibold mt-1 flex items-center gap-1">
              <span>+6 novos este mês</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Scans 3D Realizados</span>
              <Scan className="h-4 w-4 text-blue-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 tabular-nums">114</div>
            <div className="text-[11px] text-slate-500 mt-1">
              Média: 2.3 laudos/paciente
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Média Redução BF (90d)</span>
              <TrendingDown className="h-4 w-4 text-emerald-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-700 tabular-nums">-3.4%</div>
            <div className="text-[11px] text-slate-500 mt-1">
              Gordura corporal eliminada
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 text-xs font-medium">
              <span>Taxa de Adesão & Retorno</span>
              <Activity className="h-4 w-4 text-indigo-600" />
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 tabular-nums">92%</div>
            <div className="text-[11px] text-indigo-700 font-semibold mt-1">
              Retornos agendados pontualmente
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Patient Scans Feed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono-tech">
                Histórico Recente de Escaneamentos 3D
              </h2>
              <span className="text-xs text-slate-500 font-mono-tech">
                {sampleScans.length} laudos no sistema
              </span>
            </div>

            <div className="space-y-3">
              {sampleScans.map((scan) => (
                <div
                  key={scan.id}
                  className="rounded-xl border border-slate-200 bg-white p-4 hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-sm text-slate-900 font-semibold">{scan.patientName}</strong>
                      <span className="rounded bg-slate-100 border border-slate-200 px-1.5 py-0.5 text-[10px] font-mono-tech text-slate-600">
                        {scan.scanDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-600">
                      <span>{scan.weightKg} kg</span>
                      <span>•</span>
                      <span className="text-emerald-700 font-bold">{scan.biomarkers.bodyFatPercentage}% BF</span>
                      <span>•</span>
                      <span>{scan.biomarkers.leanMassKg} kg MLG</span>
                      <span>•</span>
                      <span>Cintura: {scan.measurements.waist}cm</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/dossie"
                      className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 px-2.5 py-1.5 text-xs font-mono-tech text-slate-700 shadow-sm transition-colors"
                    >
                      <FileText className="h-3 w-3 text-emerald-700" />
                      <span>Laudo 9pt</span>
                    </Link>
                    <Link
                      href="/#demo"
                      className="flex items-center gap-1 rounded-lg bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 px-2.5 py-1.5 text-xs font-mono-tech text-emerald-800 transition-colors"
                    >
                      <Scan className="h-3 w-3" />
                      <span>Ver 3D</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Pre-Consultation WhatsApp Invite Generator (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-700 text-xs font-mono-tech font-semibold mb-2">
              <Send className="h-4 w-4" />
              <span>Automação Pré-Consulta</span>
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Enviar Link de Scan 3D para o Paciente
            </h3>
            <p className="text-xs text-slate-600 mb-5 leading-relaxed font-sans">
              Gere um link direto para o paciente realizar a captura de fotos guiada em casa pelo smartphone antes da consulta presencial ou online.
            </p>

            <form onSubmit={handleGenerateInvite} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                  Nome do Paciente
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Pedro Henrique"
                  value={invitePatientName}
                  onChange={(e) => setInvitePatientName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-slate-600 mb-1 font-medium">
                  WhatsApp (DDD + Número)
                </label>
                <input
                  type="tel"
                  placeholder="(21) 99876-5432"
                  value={invitePhone}
                  onChange={(e) => setInvitePhone(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-900 focus:border-emerald-600 focus:outline-none font-mono-tech"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-semibold text-white shadow-sm transition-colors cursor-pointer"
              >
                <Link2 className="h-4 w-4" />
                <span>Gerar Link de Escaneamento</span>
              </button>
            </form>

            {/* Generated Link Display */}
            {generatedInviteLink && (
              <div className="mt-5 rounded-xl bg-emerald-50/50 border border-emerald-200 p-3.5 text-xs font-mono-tech space-y-2.5">
                <div className="text-emerald-800 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Link de Acesso Gerado</span>
                </div>
                <div className="break-all text-[11px] text-slate-700 bg-white p-2 rounded border border-slate-200">
                  {generatedInviteLink}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 py-1.5 text-xs text-slate-700 transition-colors shadow-sm"
                  >
                    <Copy className="h-3 w-3" />
                    <span>{copiedLink ? 'Copiado!' : 'Copiar Link'}</span>
                  </button>
                  <a
                    href={`https://wa.me/55${invitePhone.replace(/\D/g, '')}?text=${encodeURIComponent(
                      `Olá ${invitePatientName}! Para adiantarmos sua consulta nutricional, acesse este link seguro e realize seu escaneamento corporal 3D em 1 minuto: ${generatedInviteLink}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 py-1.5 text-xs font-semibold text-white transition-colors shadow-sm"
                  >
                    <MessageSquare className="h-3 w-3" />
                    <span>Abrir WhatsApp</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
