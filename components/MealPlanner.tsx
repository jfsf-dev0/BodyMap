'use client';

import React, { useState } from 'react';
import { defaultProfile } from '../lib/defaultProfile';
import { TACO_DATABASE } from '../lib/taco';
import { FoodItemTACO, Meal, MealItem, MealOption } from '../lib/types';
import { Plus, Trash2, Search, Sparkles, Clock, FileText, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function MealPlanner() {
  const [profile, setProfile] = useState(defaultProfile);
  const [activeMealIndex, setActiveMealIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFoodId, setSelectedFoodId] = useState<string>('');

  const activeMeal = profile.meals[activeMealIndex] || profile.meals[0];

  // Cálculo de totais
  const calcTotals = () => {
    let kcal = 0;
    let prot = 0;
    let carbo = 0;
    let gord = 0;

    profile.meals.forEach((meal) => {
      const opt = meal.opcoes[0];
      if (opt) {
        opt.itens.forEach((item) => {
          const food = TACO_DATABASE.find((f: FoodItemTACO) => f.id === String(item.foodId) || f.nome.toLowerCase() === item.nome.toLowerCase());
          if (food) {
            const factor = item.gramas / 100;
            kcal += food.calorias * factor;
            prot += food.proteinas * factor;
            carbo += food.carboidratos * factor;
            gord += food.gorduras * factor;
          }
        });
      }
    });

    return {
      kcal: Math.round(kcal),
      prot: Number(prot.toFixed(1)),
      carbo: Number(carbo.toFixed(1)),
      gord: Number(gord.toFixed(1)),
      protGKg: Number((prot / 80).toFixed(2)),
      carboGKg: Number((carbo / 80).toFixed(2)),
      gordGKg: Number((gord / 80).toFixed(2)),
    };
  };

  const totals = calcTotals();
  const targetKcal = profile.calorias || 2400;

  // Filtragem de busca TACO
  const filteredFoods = searchQuery
    ? TACO_DATABASE.filter((f: FoodItemTACO) => f.nome.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : TACO_DATABASE.slice(0, 5);

  const handleAddFood = (food: FoodItemTACO) => {
    const newItem: MealItem = {
      id: `item-${Date.now()}`,
      foodId: Number(food.id) || 10,
      nome: food.nome,
      gramas: 100,
      medida: food.medidasCaseiras[0]?.descricao || '100g',
    };

    const updatedMeals = [...profile.meals];
    updatedMeals[activeMealIndex].opcoes[0].itens.push(newItem);
    setProfile({ ...profile, meals: updatedMeals });
    setSearchQuery('');
  };

  const handleRemoveItem = (itemIndex: number) => {
    const updatedMeals = [...profile.meals];
    updatedMeals[activeMealIndex].opcoes[0].itens.splice(itemIndex, 1);
    setProfile({ ...profile, meals: updatedMeals });
  };

  const handleUpdateGrams = (itemIndex: number, grams: number) => {
    const updatedMeals = [...profile.meals];
    updatedMeals[activeMealIndex].opcoes[0].itens[itemIndex].gramas = Math.max(1, grams);
    setProfile({ ...profile, meals: updatedMeals });
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-7 backdrop-blur-md shadow-2xl">
      {/* Top HUD: Real-time Macro Bar (Beats WebDiet) */}
      <div className="border-b border-slate-800/80 pb-5 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono-tech uppercase text-emerald-400 font-semibold">
                Construtor de Prescrição Dietética
              </span>
              <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono-tech text-emerald-300 font-bold">
                Modo Consulta &lt; 10 min
              </span>
            </div>
            <h3 className="text-lg font-bold text-white mt-0.5">
              Planejamento Nutricional em Tempo Real (Base TACO/TBCA)
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/dossie"
              className="flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md transition-all cursor-pointer"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Gerar Dossiê 9pt</span>
            </Link>
          </div>
        </div>

        {/* Real-time Macro HUD Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono-tech">
          {/* Calorias */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Energia Diária</span>
              <span>Meta: {targetKcal} kcal</span>
            </div>
            <div className="mt-1 text-2xl font-bold text-white tabular-nums">
              {totals.kcal} <span className="text-xs font-normal text-slate-400">kcal</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-2 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full"
                style={{ width: `${Math.min(100, (totals.kcal / targetKcal) * 100)}%` }}
              />
            </div>
          </div>

          {/* Proteínas */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Proteínas</span>
              <span className="text-cyan-400 font-bold">{totals.protGKg} g/kg</span>
            </div>
            <div className="mt-1 text-2xl font-bold text-cyan-400 tabular-nums">
              {totals.prot} <span className="text-xs font-normal text-slate-400">g</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              {((totals.prot * 4 / Math.max(1, totals.kcal)) * 100).toFixed(0)}% do VET
            </div>
          </div>

          {/* Carboidratos */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Carboidratos</span>
              <span className="text-amber-400 font-bold">{totals.carboGKg} g/kg</span>
            </div>
            <div className="mt-1 text-2xl font-bold text-amber-400 tabular-nums">
              {totals.carbo} <span className="text-xs font-normal text-slate-400">g</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              {((totals.carbo * 4 / Math.max(1, totals.kcal)) * 100).toFixed(0)}% do VET
            </div>
          </div>

          {/* Lipídeos */}
          <div className="rounded-xl bg-slate-950/80 border border-slate-800 p-3">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Gorduras Totais</span>
              <span className="text-purple-400 font-bold">{totals.gordGKg} g/kg</span>
            </div>
            <div className="mt-1 text-2xl font-bold text-purple-400 tabular-nums">
              {totals.gord} <span className="text-xs font-normal text-slate-400">g</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">
              {((totals.gord * 9 / Math.max(1, totals.kcal)) * 100).toFixed(0)}% do VET
            </div>
          </div>
        </div>
      </div>

      {/* Main Prescribing Workplace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Meal Selector Strip (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          <div className="text-xs font-bold text-white uppercase font-mono-tech mb-2">
            Refeições do Plano ({profile.meals.length})
          </div>
          {profile.meals.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveMealIndex(idx)}
              className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                activeMealIndex === idx
                  ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold shadow-md'
                  : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-950 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="text-xs font-semibold">{m.nome}</div>
                <div className="text-[10px] font-mono-tech text-slate-400 flex items-center gap-1 mt-0.5">
                  <Clock className="h-3 w-3 text-slate-500" />
                  <span>{m.horario}</span>
                  <span>•</span>
                  <span>{m.opcoes[0]?.itens.length || 0} itens</span>
                </div>
              </div>
              <span className="text-[11px] font-mono-tech text-emerald-400">
                Opção {m.opcoes.length}
              </span>
            </button>
          ))}
        </div>

        {/* Right Column: Active Meal Foods & TACO Fast Search (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">{activeMeal.nome}</span>
                <span className="rounded bg-slate-800 px-2 py-0.5 text-[10px] font-mono-tech text-slate-300">
                  {activeMeal.horario}
                </span>
              </div>
              <span className="text-[10px] font-mono-tech text-emerald-400">
                Opção Principal (A)
              </span>
            </div>

            {/* Food items table */}
            <div className="space-y-2 mb-4">
              {activeMeal.opcoes[0]?.itens.map((item, iIdx) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2.5 rounded-lg border border-slate-800/80 bg-slate-900/60 text-xs font-mono-tech"
                >
                  <div className="flex-1 mr-2">
                    <strong className="text-white block">{item.nome}</strong>
                    <span className="text-[10px] text-slate-400">{item.medida}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      <input
                        type="number"
                        value={item.gramas}
                        onChange={(e) => handleUpdateGrams(iIdx, Number(e.target.value))}
                        className="w-14 bg-transparent text-right font-bold text-emerald-400 focus:outline-none"
                      />
                      <span className="text-slate-400 text-[10px]">g</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleRemoveItem(iIdx)}
                      className="p-1 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remover alimento"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Fast TACO Search Input */}
            <div className="border-t border-slate-800/80 pt-3">
              <div className="relative mb-2">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Buscar alimento na Tabela TACO (ex: Frango, Ovos, Aveia, Arroz, Whey)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-slate-800 bg-slate-900 pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              {/* Fast suggestions */}
              <div className="flex flex-wrap gap-1.5">
                {filteredFoods.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => handleAddFood(f)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-850 text-[11px] font-mono-tech text-slate-300 transition-colors"
                  >
                    <Plus className="h-3 w-3 text-emerald-400" />
                    <span>{f.nome.split(',')[0]}</span>
                    <span className="text-slate-500 text-[9px]">({f.calorias}kcal)</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
