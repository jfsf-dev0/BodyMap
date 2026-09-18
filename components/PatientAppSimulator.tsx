'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Utensils,
  Camera,
  Droplets,
  ShoppingCart,
  TrendingUp,
  Check,
  CheckCircle2,
  Clock,
  Sparkles,
  Plus,
} from 'lucide-react';

export default function PatientAppSimulator() {
  const [activeTab, setActiveTab] = useState<'cardapio' | 'diario' | 'agua' | 'compras'>('cardapio');
  const [waterDrunkMl, setWaterDrunkMl] = useState(1750);
  const waterTargetMl = 3200;

  const [shoppingItems, setShoppingItems] = useState([
    { id: 1, name: 'Peito de frango grelhado', qty: '1.2 kg', category: 'Açougue & Ovos', checked: false },
    { id: 2, name: 'Ovos caipiras', qty: '3 dúzias', category: 'Açougue & Ovos', checked: true },
    { id: 3, name: 'Arroz branco ou integral', qty: '1 kg', category: 'Mercearia', checked: false },
    { id: 4, name: 'Aveia em flocos finos', qty: '500g', category: 'Mercearia', checked: true },
    { id: 5, name: 'Banana prata & Maçãs', qty: '12 unidades', category: 'Hortifrúti', checked: false },
    { id: 6, name: 'Azeite de oliva extravirgem', qty: '500 ml', category: 'Mercearia', checked: true },
    { id: 7, name: 'Whey Protein Isolado', qty: '1 pote (900g)', category: 'Suplementos', checked: false },
  ]);

  const [photoSent, setPhotoSent] = useState(false);

  const toggleShoppingItem = (id: number) => {
    setShoppingItems(
      shoppingItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const addWater = (ml: number) => {
    setWaterDrunkMl((prev) => Math.min(waterTargetMl, prev + ml));
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-400 font-semibold">
          Experiência do Paciente
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
          O Aplicativo que Garante Adesão Diária ao Plano
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Ao contrário do visual infantil dos concorrentes, o app do paciente do BodyMap possui padrão Apple Health: elegante, rápido e focado em engajamento.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Smartphone Mockup Frame */}
        <div className="relative w-[320px] sm:w-[350px] h-[640px] rounded-[42px] border-4 border-slate-700 bg-slate-950 p-4 shadow-2xl shadow-emerald-500/10 flex flex-col justify-between overflow-hidden">
          {/* Top Speaker / Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 h-4 w-28 bg-slate-850 rounded-full z-30" />

          {/* Phone Header */}
          <div className="pt-5 pb-3 border-b border-slate-800/80 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-emerald-400 font-mono-tech uppercase font-bold">
                BodyMap Paciente
              </div>
              <div className="text-xs font-bold text-white">Olá, João Freire 👋</div>
            </div>
            <div className="rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 text-[9px] font-mono-tech text-emerald-300">
              Fase 2 • Hipertrofia
            </div>
          </div>

          {/* Screen Content by Tab */}
          <div className="flex-1 py-3 overflow-y-auto space-y-3 font-sans">
            {/* TAB 1: MEU CARDÁPIO */}
            {activeTab === 'cardapio' && (
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                  Próxima Refeição em 45 min
                </div>

                <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-3">
                  <div className="flex justify-between items-center text-xs font-bold text-white mb-1">
                    <span>Almoço Anabólico</span>
                    <span className="font-mono-tech text-emerald-400 text-[10px]">12:30</span>
                  </div>
                  <ul className="text-[11px] text-slate-300 space-y-1 font-mono-tech">
                    <li>• 160g de Peito de Frango grelhado</li>
                    <li>• 180g de Arroz branco (5 col. sopa)</li>
                    <li>• 80g de Feijão preto cozido</li>
                    <li>• Salada verde à vontade + 1 col. azeite</li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-emerald-500/20 flex justify-between text-[10px] text-emerald-300">
                    <span>Opção 2: Patinho moído</span>
                    <span className="font-bold cursor-pointer">Ver substituições ➜</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 opacity-75">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-300 mb-1">
                    <span>Lanche da Tarde</span>
                    <span className="font-mono-tech text-slate-400 text-[10px]">16:00</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono-tech">
                    Iogurte proteico + 30g de Aveia + 1 scoop de Whey
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: DIÁRIO FOTOGRÁFICO */}
            {activeTab === 'diario' && (
              <div className="space-y-3">
                <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                  Diário Fotográfico do Prato
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                  <div className="h-32 rounded-lg bg-slate-950 border border-dashed border-slate-700 flex flex-col items-center justify-center p-3">
                    <Camera className="h-8 w-8 text-emerald-400 mb-1" />
                    <span className="text-[11px] text-white font-semibold">Tirar foto do almoço</span>
                    <span className="text-[9px] text-slate-500 font-mono-tech">Envia direto para o prontuário do nutri</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPhotoSent(true);
                      setTimeout(() => setPhotoSent(false), 3000);
                    }}
                    className="mt-3 w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 py-2 text-xs font-bold text-slate-950 transition-all cursor-pointer"
                  >
                    {photoSent ? '✓ Foto Sincronizada com o Nutri!' : 'Simular Envio de Foto'}
                  </button>
                </div>

                <div className="rounded-xl bg-slate-900 p-2.5 text-[10px] font-mono-tech text-slate-400">
                  <span>Feed do Nutri: Dr. Gabriel visualizou seu café da manhã há 2h e deu feedback!</span>
                </div>
              </div>
            )}

            {/* TAB 3: HIDRATAÇÃO 1 TOQUE */}
            {activeTab === 'agua' && (
              <div className="space-y-3 text-center">
                <div className="text-[10px] font-mono-tech uppercase text-slate-400">
                  Meta Hídrica Inteligente
                </div>

                <div className="relative mx-auto my-2 flex h-28 w-28 items-center justify-center rounded-full border-4 border-cyan-500 bg-cyan-950/20 text-white font-bold font-mono-tech text-lg shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <div>
                    <div>{waterDrunkMl}</div>
                    <div className="text-[9px] text-cyan-300 font-normal">/ {waterTargetMl} ml</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-300 font-mono-tech">
                  {Math.round((waterDrunkMl / waterTargetMl) * 100)}% da meta diária concluída
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 font-mono-tech">
                  <button
                    type="button"
                    onClick={() => addWater(250)}
                    className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500/20"
                  >
                    +250 ml (Copo)
                  </button>
                  <button
                    type="button"
                    onClick={() => addWater(500)}
                    className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-bold hover:bg-cyan-500/20"
                  >
                    +500 ml (Garrafa)
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: LISTA DE COMPRAS */}
            {activeTab === 'compras' && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono-tech text-slate-400 uppercase">
                  <span>Lista da Semana (Auto)</span>
                  <span>{shoppingItems.filter((i) => i.checked).length}/{shoppingItems.length} comprados</span>
                </div>

                <div className="space-y-1.5 text-xs font-mono-tech">
                  {shoppingItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleShoppingItem(item.id)}
                      className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all ${
                        item.checked
                          ? 'bg-slate-950 border-slate-800 text-slate-500 line-through'
                          : 'bg-slate-900 border-slate-750 text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-4 w-4 rounded border flex items-center justify-center ${
                            item.checked ? 'bg-emerald-500 border-emerald-500 text-slate-950' : 'border-slate-600'
                          }`}
                        >
                          {item.checked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-400">{item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="pt-2 border-t border-slate-800/80 grid grid-cols-4 gap-1 text-[9px] font-mono-tech text-center">
            <button
              type="button"
              onClick={() => setActiveTab('cardapio')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'cardapio' ? 'text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Utensils className="h-4 w-4" />
              <span>Plano</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('diario')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'diario' ? 'text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>Fotos</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agua')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'agua' ? 'text-cyan-400 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <Droplets className="h-4 w-4" />
              <span>Água</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compras')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'compras' ? 'text-emerald-400 font-bold' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Compras</span>
            </button>
          </div>
        </div>

        {/* Feature Explanations on the Right */}
        <div className="max-w-md space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Camera className="h-4 w-4 text-emerald-400" />
              <span>Diário Fotográfico Integrado</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              O paciente tira a foto do prato na hora de comer. A foto sincroniza no prontuário do nutricionista, permitindo que você avalie porções e adaptações entre as consultas.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Droplets className="h-4 w-4 text-cyan-400" />
              <span>Tracker de Hidratação de 1 Toque</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              Sem burocracia de digitar números. Botões rápidos de copo (250ml) ou garrafa (500ml) com lembretes push inteligentes ao longo do dia.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-amber-400" />
              <span>Lista de Compras Automática</span>
            </h4>
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">
              O app soma todos os alimentos do plano semanal e separa por setor do mercado (Hortifrúti, Carnes, Grãos). O paciente vai ticando no supermercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
