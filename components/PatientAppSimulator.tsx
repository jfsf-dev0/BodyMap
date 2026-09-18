'use client';

import React, { useState } from 'react';
import {
  Smartphone,
  Utensils,
  Camera,
  Droplets,
  ShoppingCart,
  Check,
  CheckCircle2,
  Clock,
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-mono-tech uppercase tracking-wider text-emerald-700 font-semibold">
          Experiência do Paciente
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
          Aplicativo Móvel com Padrão de Design Apple Health
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Interface refinada, livre de poluição visual e projetada para garantir que o paciente registre suas refeições e siga a rotina sem atrito.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Smartphone Mockup Frame (Light iOS Hardware Aesthetic) */}
        <div className="relative w-[320px] sm:w-[340px] h-[620px] rounded-[38px] border-4 border-slate-300 bg-slate-50 p-4 shadow-xl flex flex-col justify-between overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-3.5 w-24 bg-slate-900 rounded-full z-30" />

          {/* Phone Header */}
          <div className="pt-4 pb-2.5 border-b border-slate-200 flex items-center justify-between bg-white -mx-4 px-4">
            <div>
              <div className="text-[10px] text-emerald-700 font-mono-tech uppercase font-bold">
                BodyMap Paciente
              </div>
              <div className="text-xs font-bold text-slate-900">João Freire</div>
            </div>
            <div className="rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[9px] font-mono-tech text-emerald-800 font-semibold">
              Fase 2 • Hipertrofia
            </div>
          </div>

          {/* Screen Content by Tab */}
          <div className="flex-1 py-3 overflow-y-auto space-y-3 font-sans">
            {/* TAB 1: MEU CARDÁPIO */}
            {activeTab === 'cardapio' && (
              <div className="space-y-2.5">
                <div className="text-[10px] font-mono-tech uppercase text-slate-500 font-medium">
                  Próxima Refeição • 12:30
                </div>

                <div className="rounded-xl border border-emerald-200 bg-white p-3 shadow-sm">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900 mb-1">
                    <span>Almoço</span>
                    <span className="font-mono-tech text-emerald-700 text-[10px]">Meta: 680 kcal</span>
                  </div>
                  <ul className="text-[11px] text-slate-700 space-y-1 font-mono-tech">
                    <li>• 160g de Peito de Frango grelhado</li>
                    <li>• 180g de Arroz branco (5 col. sopa)</li>
                    <li>• 80g de Feijão preto cozido</li>
                    <li>• Salada verde à vontade + 1 col. azeite</li>
                  </ul>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex justify-between text-[10px] text-emerald-700 font-mono-tech">
                    <span>Substituição: Patinho moído</span>
                    <span className="font-semibold cursor-pointer">Ver todas ➜</span>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm opacity-80">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-700 mb-1">
                    <span>Lanche da Tarde</span>
                    <span className="font-mono-tech text-slate-500 text-[10px]">16:00</span>
                  </div>
                  <div className="text-[10px] text-slate-600 font-mono-tech">
                    Iogurte natural proteico + 30g Aveia + 1 scoop Whey
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: DIÁRIO FOTOGRÁFICO */}
            {activeTab === 'diario' && (
              <div className="space-y-3">
                <div className="text-[10px] font-mono-tech uppercase text-slate-500 font-medium">
                  Registro Fotográfico do Prato
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-sm">
                  <div className="h-28 rounded-lg bg-slate-50 border border-dashed border-slate-300 flex flex-col items-center justify-center p-3">
                    <Camera className="h-6 w-6 text-emerald-600 mb-1" />
                    <span className="text-[11px] text-slate-800 font-semibold">Tirar foto do prato</span>
                    <span className="text-[9px] text-slate-500 font-mono-tech">Sincroniza com prontuário do nutricionista</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setPhotoSent(true);
                      setTimeout(() => setPhotoSent(false), 3000);
                    }}
                    className="mt-3 w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 py-2 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {photoSent ? '✓ Foto Sincronizada com Sucesso!' : 'Simular Envio de Foto'}
                  </button>
                </div>

                <div className="rounded-xl bg-white border border-slate-200 p-2.5 text-[10px] font-mono-tech text-slate-600 shadow-sm">
                  <span>Feed Clínico: Dr. Gabriel visualizou sua última refeição há 2h e aprovou as porções.</span>
                </div>
              </div>
            )}

            {/* TAB 3: HIDRATAÇÃO */}
            {activeTab === 'agua' && (
              <div className="space-y-3 text-center">
                <div className="text-[10px] font-mono-tech uppercase text-slate-500 font-medium">
                  Consumo Diário de Água
                </div>

                <div className="relative mx-auto my-2 flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-500 bg-blue-50 text-slate-900 font-bold font-mono-tech text-base shadow-sm">
                  <div>
                    <div>{waterDrunkMl}</div>
                    <div className="text-[9px] text-blue-700 font-normal">/ {waterTargetMl} ml</div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-700 font-mono-tech">
                  {Math.round((waterDrunkMl / waterTargetMl) * 100)}% da meta diária atingida
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 font-mono-tech">
                  <button
                    type="button"
                    onClick={() => addWater(250)}
                    className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold hover:bg-blue-100 transition-colors"
                  >
                    +250 ml (Copo)
                  </button>
                  <button
                    type="button"
                    onClick={() => addWater(500)}
                    className="p-2 rounded-lg bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold hover:bg-blue-100 transition-colors"
                  >
                    +500 ml (Garrafa)
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: LISTA DE COMPRAS */}
            {activeTab === 'compras' && (
              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono-tech text-slate-500 uppercase font-medium">
                  <span>Compras da Semana</span>
                  <span>{shoppingItems.filter((i) => i.checked).length}/{shoppingItems.length} itens</span>
                </div>

                <div className="space-y-1.5 text-xs font-mono-tech">
                  {shoppingItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => toggleShoppingItem(item.id)}
                      className={`flex items-center justify-between p-2 rounded-lg border cursor-pointer transition-all ${
                        item.checked
                          ? 'bg-slate-100 border-slate-200 text-slate-400 line-through'
                          : 'bg-white border-slate-200 text-slate-800 shadow-sm'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-4 w-4 rounded border flex items-center justify-center ${
                            item.checked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300'
                          }`}
                        >
                          {item.checked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">{item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom App Navigation Bar */}
          <div className="pt-2 border-t border-slate-200 grid grid-cols-4 gap-1 text-[9px] font-mono-tech text-center bg-white -mx-4 -mb-4 p-2">
            <button
              type="button"
              onClick={() => setActiveTab('cardapio')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'cardapio' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Utensils className="h-4 w-4" />
              <span>Plano</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('diario')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'diario' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Camera className="h-4 w-4" />
              <span>Fotos</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agua')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'agua' ? 'text-blue-700 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <Droplets className="h-4 w-4" />
              <span>Água</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compras')}
              className={`p-1.5 rounded flex flex-col items-center gap-0.5 ${
                activeTab === 'compras' ? 'text-emerald-700 font-bold' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Compras</span>
            </button>
          </div>
        </div>

        {/* Feature Explanations on the Right */}
        <div className="max-w-md space-y-4">
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Camera className="h-4 w-4 text-emerald-600" />
              <span>Diário Fotográfico com Sincronização em Tempo Real</span>
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              O paciente fotografa a refeição antes de comer. A foto é anexada automaticamente na linha do tempo do prontuário, permitindo que você avalie qualidade e porções entre as consultas.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-600" />
              <span>Tracker de Hidratação de 1 Toque</span>
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Sem burocracia de digitação. Botões imediatos de copo (250ml) ou garrafa (500ml) com lembretes inteligentes distribuídos ao longo da jornada do paciente.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <ShoppingCart className="h-4 w-4 text-amber-600" />
              <span>Lista de Compras Inteligente</span>
            </h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              O sistema consolida todos os ingredientes do plano semanal por setor (Hortifrúti, Carnes, Mercearia). O paciente marca os itens adquiridos no supermercado mesmo offline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
