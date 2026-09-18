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
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tech uppercase text-emerald-400">
                Portal Clínico
              </span>
              <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono-tech text-slate-300">
                Clínica Gabriel Nutricionista
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Gestão de Avaliações & Scans 3D
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/scanner"
              className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>Novo Scan em Consultório</span>
            </Link>
          </div>
        </div>

        {/* KPI Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 font-mono-tech">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Pacientes Ativos</span>
              <Users className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white tabular-nums">48</div>
            <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <span>+6 novos este mês</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Scans 3D Realizados</span>
              <Scan className="h-4 w-4 text-cyan-400" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white tabular-nums">114</div>
            <div className="text-[11px] text-slate-400 mt-1">
              Média: 2.3 scans/paciente
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Média Redução BF (90d)</span>
              <TrendingDown className="h-4 w-4 text-emerald-400" />
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-400 tabular-nums">-3.4%</div>
            <div className="text-[11px] text-slate-400 mt-1">
              Gordura corporal eliminada
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <div className="flex items-center justify-between text-slate-400 text-xs">
              <span>Retenção de Consultas</span>
              <Activity className="h-4 w-4 text-purple-400" />
            </div>
            <div className="mt-2 text-2xl font-bold text-white tabular-nums">92%</div>
            <div className="text-[11px] text-purple-300 mt-1">
              Retornos agendados pontualmente
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Patient Scans Feed (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
              <h2 className="text-sm font-bold text-white uppercase tracking-wider font-mono-tech">
                Histórico Recente de Escaneamentos 3D
              </h2>
              <span className="text-xs text-slate-500 font-mono-tech">
                {sampleScans.length} laudos ativos
              </span>
            </div>

            <div className="space-y-3">
              {sampleScans.map((scan) => (
                <div
                  key={scan.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <strong className="text-sm text-white font-semibold">{scan.patientName}</strong>
                      <span className="rounded bg-slate-800 px-1.5 py-0.5 text-[10px] font-mono-tech text-slate-400">
                        {scan.scanDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono-tech text-slate-400">
                      <span>{scan.weightKg} kg</span>
                      <span>•</span>
                      <span className="text-emerald-400 font-bold">{scan.biomarkers.bodyFatPercentage}% BF</span>
                      <span>•</span>
                      <span>{scan.biomarkers.leanMassKg} kg MLG</span>
                      <span>•</span>
                      <span>Cintura: {scan.measurements.waist}cm</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      href="/dossie"
                      className="flex items-center gap-1 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-750 px-2.5 py-1.5 text-xs font-mono-tech text-slate-200 transition-colors"
                    >
                      <FileText className="h-3 w-3 text-emerald-400" />
                      <span>Laudo 9pt</span>
                    </Link>
                    <Link
                      href="/#demo"
                      className="flex items-center gap-1 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 px-2.5 py-1.5 text-xs font-mono-tech text-emerald-300 transition-colors"
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
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/90 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono-tech mb-2">
              <Send className="h-4 w-4" />
              <span>Automação Pré-Consulta</span>
            </div>
            <h3 className="text-base font-bold text-white mb-1">
              Enviar Link de Scan 3D para o Paciente
            </h3>
            <p className="text-xs text-slate-400 mb-5 leading-relaxed">
              Gere um link temporário para o paciente tirar as fotos guiadas em casa pelo celular antes da consulta presencial ou online.
            </p>

            <form onSubmit={handleGenerateInvite} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                  Nome do Paciente
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Pedro Henrique"
                  value={invitePatientName}
                  onChange={(e) => setInvitePatientName(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono-tech uppercase text-slate-400 mb-1">
                  WhatsApp (DDD + Número)
                </label>
                <input
                  type="tel"
                  placeholder="(21) 99876-5432"
                  value={invitePhone}
                  onChange={(e) => setInvitePhone(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white focus:border-emerald-500 focus:outline-none font-mono-tech"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-2.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Link2 className="h-4 w-4" />
                <span>Gerar Link de Escaneamento</span>
              </button>
            </form>

            {/* Generated Link Display */}
            {generatedInviteLink && (
              <div className="mt-5 rounded-xl bg-slate-950 border border-emerald-500/40 p-3.5 text-xs font-mono-tech space-y-2.5">
                <div className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Link Mágico Pronto</span>
                </div>
                <div className="break-all text-[11px] text-slate-300 bg-slate-900 p-2 rounded border border-slate-800">
                  {generatedInviteLink}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 py-1.5 text-xs text-slate-200 transition-colors"
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
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 py-1.5 text-xs font-semibold text-white transition-colors"
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
