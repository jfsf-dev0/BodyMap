'use client';

import React from 'react';
import { Check, X, Shield, Smartphone, FileText, Clock, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeadToHeadComparison() {
  return (
    <section id="comparativo-webdiet" className="py-16 lg:py-24 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-mono-tech text-emerald-800 font-semibold mb-3">
            <span>Análise Técnica & Diferenciais</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Por que Consultórios de Alta Performance Escolhem o BodyMap?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Compare a arquitetura tradicional de softwares legados com a velocidade, precisão científica e estética editorial do BodyMap.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card WebDiet (Legado) */}
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-200 border-b border-l border-slate-300 px-3 py-1 rounded-bl-lg text-[11px] font-mono-tech text-slate-600 uppercase font-semibold">
              Softwares Tradicionais (WebDiet)
            </div>

            <div>
              <div className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-slate-500" />
                <span>WebDiet & Modelos Legados</span>
              </div>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Sistemas construídos com dezenas de abas acumuladas, fluxos fragmentados e lentidão operacional.
              </p>

              <div className="space-y-4 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Prescrição Demorada (30 a 45 min):</strong>
                    O profissional precisa navegar por 7 ou mais telas desconexas para montar um único plano alimentar.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Relatórios com Visual Genérico:</strong>
                    Tabelas com linhas hospitalares pesadas e diagramação datada que reduzem o valor percebido da consulta.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Cobrança Adicional por Recursos 3D:</strong>
                    Exigem planos caros (R$ 139,90/mês no plano Black) para liberar visualização tridimensional.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Aplicativo do Paciente com Excesso de Ruído:</strong>
                    Interface com gamificação infantilizada que desalinha com o público adulto e consultorias premium.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block">Falta de Diário Fotográfico Integrado:</strong>
                    Não sincroniza fotos reais dos pratos diretamente na linha do tempo do prontuário.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 text-[11px] font-mono-tech text-slate-500">
              Impacto: O nutricionista gasta horas extras fora do consultório finalizando dietas manualmente.
            </div>
          </div>

          {/* Card BodyMap (Solução Moderna) */}
          <div className="rounded-xl border-2 border-emerald-600 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3.5 py-1 rounded-bl-lg text-[11px] font-mono-tech uppercase font-bold tracking-wider">
              Plataforma BodyMap Pro
            </div>

            <div>
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Check className="h-5 w-5 text-emerald-600" />
                <span>BodyMap Clinical & 3D Intelligence</span>
              </div>
              <p className="text-xs text-emerald-700 font-medium mt-1 mb-6">
                Construído para consultórios que priorizam agilidade operacional, precisão métrica e adesão do paciente.
              </p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Prescrição Clínica em &lt; 10 minutos:</strong>
                    Tabela TACO/TBCA integrada, autocompletes imediatos, cálculo em tempo real de macros em g/kg e substitutos na mesma visão.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Dossiê Editorial 9pt (Padrão MetricLab):</strong>
                    Diagramação de alto nível em formato A4 impresso em 2 páginas objetivas, elevando o valor percebido do atendimento.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Scanner 3D Óptico Nativo & Incluso:</strong>
                    Bioantropometria por fotos integrada nativamente em todos os planos, sem necessidade de assinaturas adicionais.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">App do Paciente Padrão Apple Health:</strong>
                    Design minimalista, diário fotográfico de refeições com sincronização em tempo real e lista de supermercado automática.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block">Integração WhatsApp Connect:</strong>
                    Disparo de confirmações 24h antes, link de escaneamento pré-consulta e acompanhamento de retornos.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
              <div className="text-[11px] font-mono-tech text-emerald-700 font-semibold">
                Mais de 1.400 profissionais já migraram este ano.
              </div>
              <Link
                href="/consultorio"
                className="rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-3.5 py-1.5 text-xs transition-colors shadow-sm"
              >
                Abrir Consultório Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
