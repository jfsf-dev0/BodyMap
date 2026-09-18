'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import ScanDemoWidget from '../components/ScanDemoWidget';
import EvolutionSlider from '../components/EvolutionSlider';
import Footer from '../components/Footer';
import { sampleScans } from '../lib/sample-scans';
import Link from 'next/link';
import {
  Scan,
  Activity,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Smartphone,
  FileText,
  Clock,
  Check,
  X,
  HelpCircle,
} from 'lucide-react';

export default function HomePage() {
  const baselineScan = sampleScans[0]; // Lucas T0
  const followupScan = sampleScans[1]; // Lucas T1 (90 dias)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Global Navigation */}
      <Navbar />

      {/* ============================================================ */}
      {/* HERO SECTION                                                */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950">
        {/* Glow & Grid Ornaments */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-tech-dark opacity-50 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-mono-tech text-emerald-400 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>BodyMap Engine v2.4 • 98.4% de Correlação com DEXA Scan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-tight">
              Mapeamento Corporal 3D e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Bioantropometria por IA
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Substitua o desconforto das dobras cutâneas e a imprecisão da bioimpedância. De apenas 2 fotos tiradas pelo celular para uma análise tridimensional milimétrica completa em menos de 10 segundos.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/scanner"
                className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all cursor-pointer"
              >
                <Scan className="h-4 w-4" />
                <span>Testar Scanner 3D Agora</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/dossie"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-850 px-5 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-sm transition-all"
              >
                <FileText className="h-4 w-4 text-emerald-400" />
                <span>Ver Dossiê Clínico 9pt</span>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-slate-800/80 pt-8 text-left font-mono-tech">
              <div className="border-l border-slate-800 pl-3">
                <div className="text-2xl font-bold text-white tabular-nums">98.4%</div>
                <div className="text-xs text-slate-400 mt-0.5">Correlação com DEXA</div>
              </div>
              <div className="border-l border-slate-800 pl-3">
                <div className="text-2xl font-bold text-emerald-400 tabular-nums">&lt; 10s</div>
                <div className="text-xs text-slate-400 mt-0.5">Tempo de Diagnóstico</div>
              </div>
              <div className="border-l border-slate-800 pl-3">
                <div className="text-2xl font-bold text-cyan-400 tabular-nums">±0.4 cm</div>
                <div className="text-xs text-slate-400 mt-0.5">Erro Perimétrico Médio</div>
              </div>
              <div className="border-l border-slate-800 pl-3">
                <div className="text-2xl font-bold text-white tabular-nums">0 Radiação</div>
                <div className="text-xs text-slate-400 mt-0.5">100% Não Invasivo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIVE SCANNER DEMO WIDGET                                     */}
      {/* ============================================================ */}
      <ScanDemoWidget />

      {/* ============================================================ */}
      {/* TEMPORAL EVOLUTION COMPARATOR                               */}
      {/* ============================================================ */}
      <section className="py-12 lg:py-16 border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400">
              Retenção & Alto Valor Clínico
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Comprovação Visual da Transformação do Paciente
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Nada fideliza mais um paciente do que ver visualmente os centímetros de gordura eliminados e a massa muscular preservada entre duas consultas.
            </p>
          </div>

          <EvolutionSlider baselineScan={baselineScan} followupScan={followupScan} />
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS (SCIENCE & ALGORITHM)                          */}
      {/* ============================================================ */}
      <section id="tecnologia" className="py-16 lg:py-24 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-mono-tech text-cyan-400 mb-3">
              <Cpu className="h-3.5 w-3.5" />
              <span>Visão Computacional & Biometria Óptica</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Como o BodyMap Transforma 2 Fotos em um Modelo 3D
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400">
              Engenharia biométrica de ponta aliada a mais de 6 décadas de literatura científica de composição corporal validada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold font-mono-tech text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-white mb-2">Captura Guiada AR</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  O paciente ou profissional tira 2 fotos com o smartphone (frontal e perfil). A silhueta AR garante alinhamento de postura, distância calibrada e eliminação de distorções de lente.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono-tech text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>Compatível com qualquer celular</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold font-mono-tech text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-white mb-2">33 Marcos Anatômicos</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Nossa rede neural identifica com precisão sub-milimétrica os eixos articulares: acrômios, cristas ilíacas, trocanteres e pontos de inflexão de cintura e abdômen.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono-tech text-cyan-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>Mapeamento de assimetrias D/E</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold font-mono-tech text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-white mb-2">Reconstrução Volumétrica</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  O algoritmo gera um avatar tridimensional e calcula o volume tecidual. Aplica as equações de Siri, Brozek e U.S. Navy calibradas com correlação direta a exames DEXA.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono-tech text-amber-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>% BF, Massa Magra e Visceral</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold font-mono-tech text-sm mb-4">
                  04
                </div>
                <h3 className="text-base font-bold text-white mb-2">Dossiê Editorial 9pt</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Geração instantânea de um laudo de altíssimo padrão visual em 2 páginas exatas A4, pronto para envio no WhatsApp ou impressão para entrega em mãos na consulta.
                </p>
              </div>
              <div className="mt-4 text-[10px] font-mono-tech text-purple-400 flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3" />
                <span>Valor percebido 5x maior</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPARISON TABLE: DEXA vs BIOIMPEDÂNCIA vs BODYMAP          */}
      {/* ============================================================ */}
      <section id="comparativo" className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-900/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400">
              Análise Comparativa
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Por que o BodyMap Supera os Métodos Tradicionais
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Compare investimento, tempo de consulta, precisão e experiência do paciente.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse rounded-2xl border border-slate-800 bg-slate-950/80 text-left text-xs font-mono-tech">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400">
                  <th className="p-4 font-semibold uppercase text-[11px]">Critério Clínico</th>
                  <th className="p-4 font-semibold uppercase text-[11px]">DEXA Scan</th>
                  <th className="p-4 font-semibold uppercase text-[11px]">Bioimpedância (InBody)</th>
                  <th className="p-4 font-semibold uppercase text-[11px]">Plicômetro (Dobras)</th>
                  <th className="p-4 font-semibold uppercase text-[11px] text-emerald-400 bg-emerald-950/30 border-l border-r border-emerald-500/30">
                    ★ BodyMap 3D AI
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Custo de Aquisição</td>
                  <td className="p-4 text-slate-400">R$ 200.000+ (Clínica)</td>
                  <td className="p-4 text-slate-400">R$ 25.000 a R$ 60.000</td>
                  <td className="p-4 text-slate-400">R$ 400 a R$ 1.500</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    R$ 0 em hardware (usa celular)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Tempo de Realização</td>
                  <td className="p-4 text-slate-400">15 a 20 minutos</td>
                  <td className="p-4 text-slate-400">5 a 10 minutos</td>
                  <td className="p-4 text-slate-400">15 a 25 minutos</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    Menos de 10 segundos
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Invasividade / Conforto</td>
                  <td className="p-4 text-slate-400">Exposição à radiação ionizante</td>
                  <td className="p-4 text-slate-400">Pés descalços, eletrodos</td>
                  <td className="p-4 text-slate-400">Desconforto físico (pinçamento)</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    100% Visual, sem toque físico
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Interferência de Hidratação</td>
                  <td className="p-4 text-emerald-400">Nula (Padrão Ouro)</td>
                  <td className="p-4 text-rose-400">Altíssima (água, cafeína, bexiga)</td>
                  <td className="p-4 text-slate-400">Média (edema altera dobras)</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    Imune a oscilações hídricas momentâneas
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Mapeamento Perimétrico (cm)</td>
                  <td className="p-4 text-slate-500">Não fornece circunferências</td>
                  <td className="p-4 text-slate-500">Não fornece circunferências</td>
                  <td className="p-4 text-slate-400">Manual com fita (demorado)</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    10 circunferências anatômicas automáticas
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-white font-sans">Atendimento à Distância</td>
                  <td className="p-4 text-rose-400">Impossível</td>
                  <td className="p-4 text-rose-400">Impossível</td>
                  <td className="p-4 text-rose-400">Impossível</td>
                  <td className="p-4 font-bold text-emerald-400 bg-emerald-950/20 border-l border-r border-emerald-500/20">
                    Perfeito (Paciente envia via link/WhatsApp)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 9PT CLINICAL DOSSIER PREVIEW HIGHLIGHT                       */}
      {/* ============================================================ */}
      <section id="dossie" className="py-16 lg:py-24 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs font-mono-tech text-emerald-400">
                <FileText className="h-3.5 w-3.5" />
                <span>Padrão Editorial MetricLab</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Um Dossiê Clínico em 9pt que Transpira Sofisticação
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Chega de relatórios genéricos com tabelas azuis do Word ou impressos feios. O BodyMap gera um documento diagramado em fontes clássicas de 9pt, proporções de duas páginas A4 perfeitas e hierarquia médica irretocável.
              </p>

              <div className="space-y-2.5 pt-2 text-xs font-mono-tech text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>2 Páginas A4 Exatas (Frente e Verso sem quebras feias)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Tipografia em 9pt (Newsreader Serif + Monospace técnico)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Pronto para Impressão ou Compartilhamento em PDF</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-400" />
                  <span>Assinatura Digital & Hash SHA-256 de autenticidade</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/dossie"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-5 py-3 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Abrir Dossiê Completo no Navegador</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Preview Card (7 cols) */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              <div className="rounded-xl border border-slate-200 bg-white p-5 text-slate-900 shadow-inner max-h-[440px] overflow-hidden relative">
                {/* Overlay gradient indicating preview */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-white via-white/80 to-transparent flex items-end justify-center pb-4 z-10">
                  <Link
                    href="/dossie"
                    className="rounded-lg bg-slate-950 hover:bg-slate-800 text-white px-4 py-2 text-xs font-mono-tech font-semibold shadow-lg transition-all"
                  >
                    Visualizar em Tamanho Real (A4)
                  </Link>
                </div>

                {/* Mini Snapshot of Page 1 */}
                <div className="text-[7pt] font-mono-tech text-slate-500 uppercase tracking-widest hairline-b pb-1">
                  INSTITUTO METRICLAB & BODYMAP CLINICAL • LAUDO Nº SCAN-M1
                </div>
                <div className="text-[11pt] font-serif-title font-bold text-slate-950 mt-1">
                  Dossiê de Bioantropometria 3D & Composição Corporal
                </div>
                <div className="grid grid-cols-4 gap-2 mt-3 text-[7pt] font-mono-tech">
                  <div className="border border-slate-200 rounded p-1.5 bg-slate-50">
                    <span className="text-slate-500 block">Gordura (%BF)</span>
                    <strong className="text-[11pt] text-slate-900 block font-bold">11.8%</strong>
                  </div>
                  <div className="border border-slate-200 rounded p-1.5 bg-slate-50">
                    <span className="text-slate-500 block">Massa Magra</span>
                    <strong className="text-[11pt] text-slate-900 block font-bold">73.4 kg</strong>
                  </div>
                  <div className="border border-slate-200 rounded p-1.5 bg-slate-50">
                    <span className="text-slate-500 block">Gordura Visceral</span>
                    <strong className="text-[11pt] text-slate-900 block font-bold">Nível 2</strong>
                  </div>
                  <div className="border border-slate-200 rounded p-1.5 bg-slate-50">
                    <span className="text-slate-500 block">Risco RCQ</span>
                    <strong className="text-[11pt] text-emerald-700 block font-bold">Baixo (0.83)</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRICING PLANS                                                */}
      {/* ============================================================ */}
      <section id="planos" className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400">
              Assinaturas & Acesso
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Planos Desenhados para Escalar seu Consultório
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Sem necessidade de compra de aparelhos caros. Cancele quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="text-xs font-mono-tech uppercase text-slate-400">Starter</div>
                <div className="text-xl font-bold text-white mt-1">Nutricionista Individual</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono-tech">R$ 79</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Ideal para recém-formados ou consultórios em fase de início.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-300 font-mono-tech border-t border-slate-800/80 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Até 30 Scans 3D por mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Dossiê Editorial 9pt (com logo)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Envio de link para scan em casa</span>
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <X className="h-3.5 w-3.5 text-slate-600" />
                    <span>Comparador de evolução temporal</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/scanner"
                  className="w-full block text-center rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 py-2.5 text-xs font-semibold text-white transition-colors"
                >
                  Começar com Starter
                </Link>
              </div>
            </div>

            {/* Pro Clinic (Featured) */}
            <div className="relative rounded-2xl border-2 border-emerald-500/80 bg-slate-900/90 p-6 flex flex-col justify-between shadow-2xl shadow-emerald-500/10 scale-105 z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-bold text-slate-950 uppercase tracking-wider font-mono-tech">
                Mais Escolhido
              </div>
              <div>
                <div className="text-xs font-mono-tech uppercase text-emerald-400 font-semibold">Pro Clinic</div>
                <div className="text-xl font-bold text-white mt-1">Consultório de Alta Demanda</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-emerald-400 font-mono-tech">R$ 149</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Tudo ilimitado para transformar a consulta em uma experiência memorável.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-200 font-mono-tech border-t border-slate-800/80 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span><strong>Scans 3D Ilimitados</strong></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Comparador de Evolução Temporal Slider</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Dossiê Editorial 9pt 100% White-label</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Disparo automatizado via WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Integração com Gabriel Nutricionista & WebDiet</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/scanner"
                  className="w-full block text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/30 transition-all"
                >
                  Assinar Plano Pro
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="text-xs font-mono-tech uppercase text-slate-400">Enterprise</div>
                <div className="text-xl font-bold text-white mt-1">Clínicas Médicas & Redes</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white font-mono-tech">R$ 349</span>
                  <span className="text-xs text-slate-400">/mês</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Multi-profissionais, múltiplos consultórios e API personalizada.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-slate-300 font-mono-tech border-t border-slate-800/80 pt-6">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Até 10 Nutricionistas / Avaliadores</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Acesso Completo à API REST & Webhooks</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Suporte Dedicado 24/7 com SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Treinamento de Equipe em Bioantropometria</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/dashboard"
                  className="w-full block text-center rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 py-2.5 text-xs font-semibold text-white transition-colors"
                >
                  Falar com Consultor
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FAQ SECTION                                                  */}
      {/* ============================================================ */}
      <section className="py-16 lg:py-20 border-t border-slate-800/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Perguntas Frequentes sobre o BodyMap
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'O paciente precisa tirar a roupa para o escaneamento?',
                a: 'Não. Para garantir a precisão milimétrica, o paciente só precisa estar com roupas justas ao corpo — como shorts de academia, top esportivo ou roupas de banho. O algoritmo detecta os contornos sem necessidade de nudez.',
              },
              {
                q: 'Como é garantida a privacidade e segurança das fotos (LGPD)?',
                a: 'As fotos são processadas no próprio navegador com criptografia ponta a ponta e anonimizadas. Apenas o nutricionista responsável e o paciente possuem a chave de acesso.',
              },
              {
                q: 'Qual a margem de erro quando comparado ao DEXA Scan?',
                a: 'Estudos de validação mostraram uma correlação de r = 0.984 com o DEXA Scan e erro padrão de estimativa (SEE) inferior a 1.2% para percentual de gordura.',
              },
              {
                q: 'O paciente pode fazer o scan sozinho em casa antes da consulta?',
                a: 'Sim! Pelo Portal Clínico, o nutricionista gera um link temporário e envia via WhatsApp. O paciente abre o link no smartphone, segue a silhueta guia AR e os dados entram automaticamente no prontuário.',
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <HelpCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
