'use client';

import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MealPlanner from '../../components/MealPlanner';
import BodyMeshViewer from '../../components/BodyMeshViewer';
import EvolutionSlider from '../../components/EvolutionSlider';
import { sampleScans } from '../../lib/sample-scans';
import { defaultProfile } from '../../lib/defaultProfile';
import Link from 'next/link';
import {
  Users,
  Calendar,
  Utensils,
  Scan,
  Camera,
  MessageSquare,
  DollarSign,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Plus,
  Send,
  Sparkles,
} from 'lucide-react';

export default function ConsultorioPage() {
  const [activeTab, setActiveTab] = useState<'prontuario' | 'prescricao' | 'antropometria' | 'diario' | 'agenda' | 'financeiro'>('prescricao');
  const activeScan = sampleScans[1];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl w-full px-4 py-8 sm:px-6 lg:px-8 flex-1">
        {/* Top Professional Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tech uppercase text-emerald-400 font-bold">
                Plataforma Clínica do Nutricionista
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-300">
                BodyMap Pro Suite
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Consultório Digital & Modo Atendimento
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/dossie"
              className="flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 px-3.5 py-2 text-xs font-medium text-slate-200 transition-colors"
            >
              <FileText className="h-4 w-4 text-emerald-400" />
              <span>Ver Dossiê 9pt</span>
            </Link>
            <Link
              href="/scanner"
              className="flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
            >
              <Scan className="h-4 w-4" />
              <span>Novo Scan 3D</span>
            </Link>
          </div>
        </div>

        {/* Navigation Tabs for All Clinic Modules (Beats WebDiet) */}
        <div className="flex items-center gap-2 border-b border-slate-800/80 pb-3 mb-8 overflow-x-auto text-xs font-mono-tech">
          <button
            type="button"
            onClick={() => setActiveTab('prescricao')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'prescricao'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Utensils className="h-4 w-4" />
            <span>Prescrição & Dieta TACO</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('antropometria')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'antropometria'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Scan className="h-4 w-4" />
            <span>Antropometria & 3D IA</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('prontuario')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'prontuario'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Users className="h-4 w-4" />
            <span>Prontuário & Anamnese</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('diario')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'diario'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Camera className="h-4 w-4" />
            <span>Diário com Fotos (Feed)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('agenda')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'agenda'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <Calendar className="h-4 w-4" />
            <span>Agenda & WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('financeiro')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg transition-all ${
              activeTab === 'financeiro'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white hover:bg-slate-900'
            }`}
          >
            <DollarSign className="h-4 w-4" />
            <span>Financeiro & Recibos</span>
          </button>
        </div>

        {/* TAB 1: PRESCRIÇÃO DIETÉTICA */}
        {activeTab === 'prescricao' && (
          <div className="space-y-6">
            <MealPlanner />
          </div>
        )}

        {/* TAB 2: ANTROPOMETRIA & 3D IA */}
        {activeTab === 'antropometria' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <BodyMeshViewer
                  measurements={activeScan.measurements}
                  sex={activeScan.sex}
                  bodyFatPercent={activeScan.biomarkers.bodyFatPercentage}
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <h3 className="text-base font-bold text-white mb-2">Protocolos Antropométricos Ativos</h3>
                  <div className="space-y-2 text-xs font-mono-tech">
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-emerald-500/40 flex justify-between items-center">
                      <div>
                        <strong className="text-white block">Scanner 3D Óptico por IA</strong>
                        <span className="text-[10px] text-emerald-400">98.4% correlação DEXA</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                        ATIVO
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                      <div>
                        <strong className="text-slate-300 block">Jackson & Pollock 7 Dobras</strong>
                        <span className="text-[10px] text-slate-500">Plicômetro clínico tradicional</span>
                      </div>
                      <span className="text-slate-400 text-[10px]">Configurado</span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                      <div>
                        <strong className="text-slate-300 block">Bioimpedância (InBody/Tanita)</strong>
                        <span className="text-[10px] text-slate-500">Entrada manual de parâmetros</span>
                      </div>
                      <span className="text-slate-400 text-[10px]">Configurado</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5">
                  <h3 className="text-base font-bold text-white mb-1">Evolução do Paciente (90 Dias)</h3>
                  <div className="text-xs font-mono-tech text-slate-400 mb-4">
                    Gordura: -3.8% • Massa Magra: +1.6kg • Cintura: -5cm
                  </div>
                  <Link
                    href="/scanner"
                    className="block w-full text-center rounded-xl bg-emerald-500 hover:bg-emerald-400 py-2.5 text-xs font-bold text-slate-950 transition-all"
                  >
                    Abrir Escaneamento Completo
                  </Link>
                </div>
              </div>
            </div>

            <EvolutionSlider baselineScan={sampleScans[0]} followupScan={sampleScans[1]} />
          </div>
        )}

        {/* TAB 3: PRONTUÁRIO & ANAMNESE */}
        {activeTab === 'prontuario' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md space-y-6">
            <div className="flex justify-between items-start border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">João Freire</h2>
                <div className="text-xs text-slate-400 font-mono-tech mt-0.5">
                  28 anos • Homem • Hipertrofia & Definição • Última consulta: 18/09/2026
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 text-xs text-emerald-400 font-mono-tech font-semibold">
                Paciente Ativo (Aderência 94%)
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono-tech">
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">Rotina & Hábitos</span>
                <div className="text-slate-300 space-y-1">
                  <div>Sono: 7h30 / noite (Regular)</div>
                  <div>Água: 3.200 ml / dia</div>
                  <div>Treino: Musculação 5x/semana + 20min cardio</div>
                  <div>Intestino: Bristol tipo 4 (Diário)</div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">Alergias & Restrições</span>
                <div className="text-slate-300 space-y-1">
                  <div className="text-amber-400 font-bold">Sem restrições severas</div>
                  <div>Leve aversão a peixes de água doce</div>
                  <div>Sem intolerância à lactose</div>
                </div>
              </div>

              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase block mb-1">Suplementação Prescrita</span>
                <div className="text-slate-300 space-y-1">
                  <div>Creatina Monoidratada: 5g pós-treino</div>
                  <div>Whey Protein Isolado: 30g tarde</div>
                  <div>Ômega 3 (1000mg EPA/DHA): 2 caps almoço</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: FEED DO DIÁRIO COM FOTOS */}
        {activeTab === 'diario' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Feed do Diário Alimentar do Paciente</h3>
                <p className="text-xs text-slate-400 font-mono-tech mt-0.5">
                  Fotos sincronizadas em tempo real através do app do paciente
                </p>
              </div>
              <span className="rounded bg-emerald-500/20 text-emerald-300 px-2.5 py-1 text-xs font-mono-tech font-semibold">
                3 fotos recebidas hoje
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex justify-between text-xs font-mono-tech mb-2">
                  <span className="font-bold text-white">Café da Manhã</span>
                  <span className="text-slate-400">07:45</span>
                </div>
                <div className="h-40 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono-tech">
                  [Foto do Prato: Ovos mexidos + Pão artesanal + Café]
                </div>
                <div className="mt-2 text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Porção 100% aderente à Opção A</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex justify-between text-xs font-mono-tech mb-2">
                  <span className="font-bold text-white">Almoço</span>
                  <span className="text-slate-400">12:35</span>
                </div>
                <div className="h-40 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono-tech">
                  [Foto do Prato: Frango grelhado + Arroz + Feijão + Salada]
                </div>
                <div className="mt-2 text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Prato equilibrado, sem extras</span>
                </div>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
                <div className="flex justify-between text-xs font-mono-tech mb-2">
                  <span className="font-bold text-white">Lanche Pré-Treino</span>
                  <span className="text-slate-400">16:10</span>
                </div>
                <div className="h-40 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 text-xs font-mono-tech">
                  [Foto: Shake de Whey + Banana + Aveia]
                </div>
                <div className="mt-2 text-xs text-emerald-400 font-mono-tech flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Consumido 45 min antes do treino</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: AGENDA & WHATSAPP */}
        {activeTab === 'agenda' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md">
            <div className="flex justify-between items-center border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white">Agenda & Automação WhatsApp Connect</h3>
                <p className="text-xs text-slate-400 font-mono-tech mt-0.5">
                  Disparo de confirmações 24h antes e links de escaneamento pré-consulta
                </p>
              </div>
              <span className="rounded bg-emerald-500/20 text-emerald-300 px-2.5 py-1 text-xs font-mono-tech font-semibold">
                WhatsApp Conectado (Online)
              </span>
            </div>

            <div className="space-y-3">
              {[
                { time: '09:00', patient: 'João Freire', type: 'Retorno 30d + Novo Scan 3D', status: 'Confirmado via WhatsApp' },
                { time: '10:30', patient: 'Mariana Costa', type: 'Primeira Consulta + Anamnese', status: 'Confirmado via WhatsApp' },
                { time: '14:00', patient: 'Rodrigo Mendes', type: 'Ajuste de Cardápio Hipertrofia', status: 'Lembrete Enviado' },
                { time: '16:00', patient: 'Beatriz Alencar', type: 'Avaliação Antropométrica 3D', status: 'Aguardando Confirmação' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono-tech"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-emerald-400 font-bold">{item.time}</span>
                    <div>
                      <strong className="text-white block">{item.patient}</strong>
                      <span className="text-slate-400 text-[10px]">{item.type}</span>
                    </div>
                  </div>
                  <span className="rounded bg-slate-900 border border-slate-700 px-2.5 py-1 text-[10px] text-emerald-300">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: FINANCEIRO */}
        {activeTab === 'financeiro' && (
          <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md">
            <h3 className="text-lg font-bold text-white mb-2">Painel Financeiro do Consultório</h3>
            <p className="text-xs text-slate-400 font-mono-tech mb-6">
              Faturamento mensal, recibos emitidos e controle de planos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 font-mono-tech">
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase">Faturamento Este Mês</span>
                <div className="text-2xl font-bold text-emerald-400 mt-1">R$ 18.450,00</div>
                <div className="text-[10px] text-slate-500 mt-1">41 consultas realizadas</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase">Ticket Médio / Consulta</span>
                <div className="text-2xl font-bold text-white mt-1">R$ 450,00</div>
                <div className="text-[10px] text-slate-500 mt-1">Com Dossiê 9pt + Scan 3D</div>
              </div>
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-800">
                <span className="text-[10px] text-slate-400 uppercase">Previsão Próximo Mês</span>
                <div className="text-2xl font-bold text-cyan-400 mt-1">R$ 22.000,00</div>
                <div className="text-[10px] text-slate-500 mt-1">48 retornos já agendados</div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
