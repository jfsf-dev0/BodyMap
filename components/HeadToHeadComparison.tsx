'use client';

import React from 'react';
import { Check, X, Sparkles, Zap, Shield, Smartphone, FileText, Clock, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function HeadToHeadComparison() {
  return (
    <section id="comparativo-webdiet" className="py-16 lg:py-24 border-t border-slate-800/80 bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 text-xs font-mono-tech text-emerald-400 mb-3">
            <Zap className="h-3.5 w-3.5" />
            <span>A Nova Geração de Software de Nutrição</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Por que os Nutricionistas estão Migrando do WebDiet para o BodyMap?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Compare lado a lado a lentidão e a poluição visual de sistemas legados com a velocidade cirúrgica, estética editorial e inteligência 3D do BodyMap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card WebDiet (O Passado) */}
          <div className="rounded-2xl border border-rose-900/30 bg-slate-950/90 p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-rose-500/10 border-b border-l border-rose-500/20 px-3 py-1 rounded-bl-xl text-[10px] font-mono-tech text-rose-400 uppercase font-semibold">
              Software Legado (WebDiet)
            </div>

            <div>
              <div className="text-lg font-bold text-slate-300 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-rose-400" />
                <span>WebDiet & Softwares Tradicionais</span>
              </div>
              <p className="text-xs text-slate-400 mt-1 mb-6">
                Construídos em arquiteturas antigas, acumulando abas e poluição visual ao longo dos anos.
              </p>

              <div className="space-y-4 text-xs text-slate-400">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block">Prescrição Lenta (30 a 45 min):</strong>
                    O nutricionista precisa pular por 7 ou 8 telas desconexas para montar um único plano alimentar durante a consulta.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block">PDFs com Estética Datada ("Cara de Bot"):</strong>
                    Relatórios em tabelas cheias de linhas hospitalares e cores saturadas que parecem impressos de 2015.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block">Preço Abusivo por Recursos 3D:</strong>
                    Cobram R$ 139,90/mês no plano Black para liberar o módulo Body3D.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block">App do Paciente Infantilizado:</strong>
                    Interface com excesso de gamificação e elementos visuais que não conversam com o público de alto padrão.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-200 block">Sobrecarga Cognitiva (Feature Bloat):</strong>
                    Dezenas de ferramentas paralelas sem foco clínico real.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-900 text-[11px] font-mono-tech text-rose-400/80">
              Resultado: O nutricionista perde horas do dia digitando e cobra menos pelo atendimento.
            </div>
          </div>

          {/* Card BodyMap (O Futuro / Head-to-Head Winner) */}
          <div className="rounded-2xl border-2 border-emerald-500 bg-slate-950 p-6 sm:p-8 flex flex-col justify-between shadow-2xl shadow-emerald-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 px-3.5 py-1 rounded-bl-xl text-[10px] font-mono-tech uppercase font-bold tracking-wider">
              A Nova Referência ★ BodyMap
            </div>

            <div>
              <div className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-emerald-400" />
                <span>BodyMap Clinical & 3D Intelligence</span>
              </div>
              <p className="text-xs text-emerald-400/90 mt-1 mb-6">
                Construído para consultorias premium que valorizam estética, velocidade e adesão do paciente.
              </p>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Prescrição Dietética em &lt; 10 minutos:</strong>
                    Construtor inteligente com base TACO completa, autocompletes imediatos, cálculo em tempo real de macros g/kg e substituições na mesma tela.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Dossiê Editorial 9pt (Padrão MetricLab):</strong>
                    Layout impecável de revista científica, diagramado em 2 páginas A4 (frente e verso), que multiplica o valor percebido da consulta em até 5x.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Scanner 3D Nativo & Sem Custo Extra:</strong>
                    Antropometria óptica por fotos integrada em todos os planos, sem forçar planos caros de R$ 140/mês.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">App do Paciente "Apple Health Grade":</strong>
                    Diário fotográfico de refeições com envio em tempo real para o prontuário, tracker de água de 1 toque e lista de supermercado dinâmica.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-white block">Automação Completa via WhatsApp:</strong>
                    Lembretes automáticos 24h antes, link de escaneamento pré-consulta e acompanhamento de retornos sem esforço manual.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between">
              <div className="text-[11px] font-mono-tech text-emerald-400">
                Mais de 1.400 profissionais já migraram este ano.
              </div>
              <Link
                href="/consultorio"
                className="rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-3 py-1.5 text-xs transition-all"
              >
                Testar Grátis
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
