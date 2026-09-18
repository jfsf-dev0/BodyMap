'use client';

import React, { useState, useEffect } from 'react';
import { BodyMeasurements, BiologicalSex } from '../lib/types';
import { Eye, Layers, RotateCw, CheckCircle2, ChevronRight, Ruler } from 'lucide-react';

interface BodyMeshViewerProps {
  measurements: BodyMeasurements;
  sex: BiologicalSex;
  bodyFatPercent: number;
  highlightPart?: string | null;
  onSelectPart?: (part: string) => void;
  interactive?: boolean;
}

export default function BodyMeshViewer({
  measurements,
  sex,
  bodyFatPercent,
  highlightPart,
  onSelectPart,
  interactive = true,
}: BodyMeshViewerProps) {
  const [angle, setAngle] = useState<'front' | 'side' | 'back'>('front');
  const [activeLayer, setActiveLayer] = useState<'wireframe' | 'fat_heatmap' | 'muscle_mass'>('wireframe');
  const [selectedPoint, setSelectedPoint] = useState<string | null>(highlightPart || 'waist');

  useEffect(() => {
    if (highlightPart) {
      setSelectedPoint(highlightPart);
    }
  }, [highlightPart]);

  const handlePointClick = (key: string) => {
    setSelectedPoint(key);
    if (onSelectPart) {
      onSelectPart(key);
    }
  };

  // Cores técnicas limpas de software médico
  const strokeColor = '#334155'; // Graphite / Slate
  const highlightColor = '#059669'; // Emerald sutil

  return (
    <div className="relative flex flex-col items-center justify-between rounded-xl border border-slate-200 bg-white p-4 sm:p-6 shadow-xs overflow-hidden">
      {/* Subtle CAD Software Grid */}
      <div className="absolute inset-0 bg-grid-software opacity-40 pointer-events-none" />

      {/* Top Toolbar (Segmented Controls) */}
      <div className="relative z-20 flex w-full flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        {/* View Angle Switcher */}
        <div className="flex items-center rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-medium">
          <button
            type="button"
            onClick={() => setAngle('front')}
            className={`px-3 py-1 rounded-md transition-all ${
              angle === 'front' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Frontal (0°)
          </button>
          <button
            type="button"
            onClick={() => setAngle('side')}
            className={`px-3 py-1 rounded-md transition-all ${
              angle === 'side' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Sagital (90°)
          </button>
          <button
            type="button"
            onClick={() => setAngle('back')}
            className={`px-3 py-1 rounded-md transition-all ${
              angle === 'back' ? 'bg-white text-slate-900 font-semibold shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Posterior (180°)
          </button>
        </div>

        {/* Diagnostic Layer Mode */}
        <div className="flex items-center gap-1 text-xs font-mono-tech">
          <button
            type="button"
            onClick={() => setActiveLayer('wireframe')}
            className={`px-2.5 py-1 rounded-md border transition-all ${
              activeLayer === 'wireframe'
                ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Superfície Óptica
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('fat_heatmap')}
            className={`px-2.5 py-1 rounded-md border transition-all ${
              activeLayer === 'fat_heatmap'
                ? 'bg-amber-600 border-amber-600 text-white font-semibold'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Tecido Adiposo
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('muscle_mass')}
            className={`px-2.5 py-1 rounded-md border transition-all ${
              activeLayer === 'muscle_mass'
                ? 'bg-sky-600 border-sky-600 text-white font-semibold'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            Massa Magra
          </button>
        </div>
      </div>

      {/* Main Anatomical Vector Visualization */}
      <div className="relative my-4 flex h-[380px] w-full items-center justify-center">
        <svg
          viewBox="0 0 320 480"
          className="h-full w-auto max-w-full transition-all duration-200"
        >
          <defs>
            {/* Technical CAD Mesh Pattern */}
            <pattern id="mesh-grid-light" width="12" height="12" patternUnits="userSpaceOnUse">
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.75"
              />
            </pattern>

            {/* Subtle Shading Gradients */}
            <linearGradient id="fat-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="muscle-light" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Central Vertical Axis */}
          <line
            x1="160"
            y1="20"
            x2="160"
            y2="460"
            stroke="#e2e8f0"
            strokeDasharray="4,4"
            strokeWidth="1"
          />

          {/* Body Silhouette Geometry */}
          {angle === 'front' ? (
            <g id="body-front">
              {/* Head */}
              <ellipse
                cx="160"
                cy="50"
                rx="22"
                ry="28"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Neck */}
              <path
                d="M 152 78 L 152 92 L 168 92 L 168 78 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1"
              />

              {/* Torso & Hips */}
              <path
                d={
                  sex === 'male'
                    ? "M 130 95 C 115 105 105 130 112 170 C 116 195 125 210 128 235 C 122 250 118 265 124 285 L 196 285 C 202 265 198 250 192 235 C 195 210 204 195 208 170 C 215 130 205 105 190 95 Z"
                    : "M 134 95 C 122 105 116 130 122 165 C 126 190 134 205 132 230 C 120 245 110 265 116 285 L 204 285 C 210 265 200 245 188 230 C 186 205 194 190 198 165 C 204 130 198 105 186 95 Z"
                }
                fill={
                  activeLayer === 'fat_heatmap'
                    ? 'url(#fat-light)'
                    : activeLayer === 'muscle_mass'
                    ? 'url(#muscle-light)'
                    : 'url(#mesh-grid-light)'
                }
                stroke={strokeColor}
                strokeWidth="1.4"
              />

              {/* Left Arm (Viewer Right) */}
              <path
                d="M 194 102 C 218 115 228 150 230 195 C 232 225 230 260 228 275 L 216 273 C 218 255 220 220 216 195 C 212 170 206 140 190 125 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Right Arm (Viewer Left) */}
              <path
                d="M 126 102 C 102 115 92 150 90 195 C 88 225 90 260 92 275 L 104 273 C 102 255 100 220 104 195 C 108 170 114 140 130 125 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />

              {/* Legs */}
              <path
                d="M 132 285 C 128 320 124 360 130 400 C 134 430 132 455 130 465 L 148 465 C 150 445 152 420 150 395 C 146 360 152 320 156 285 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              <path
                d="M 164 285 C 168 320 174 360 170 395 C 168 420 170 445 172 465 L 190 465 C 188 455 186 430 190 400 C 196 360 192 320 188 285 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />

              {/* Anatomical Lines */}
              <line x1="160" y1="160" x2="160" y2="230" stroke="#94a3b8" strokeWidth="0.8" strokeDasharray="3,3" />
              <circle cx="160" cy="225" r="2.5" fill="#64748b" />
            </g>
          ) : angle === 'side' ? (
            <g id="body-side">
              <path
                d="M 152 30 C 168 30 178 40 176 58 C 174 65 182 68 182 72 L 174 76 C 172 82 165 84 158 84 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              <path d="M 154 84 L 150 102 L 166 102 L 166 84 Z" fill="url(#mesh-grid-light)" stroke={strokeColor} strokeWidth="1" />
              <path
                d="M 148 102 C 138 125 140 165 144 195 C 146 225 138 250 142 285 L 176 285 C 182 255 186 215 178 180 C 172 150 176 120 166 102 Z"
                fill={activeLayer === 'fat_heatmap' ? 'url(#fat-light)' : 'url(#mesh-grid-light)'}
                stroke={strokeColor}
                strokeWidth="1.4"
              />
              <path
                d="M 156 112 C 164 140 162 185 160 220 L 150 220 C 152 185 152 145 146 115 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1"
              />
              <path
                d="M 144 285 C 138 330 142 385 144 425 C 146 445 144 460 140 465 L 168 465 C 172 455 174 425 168 390 C 162 345 172 315 176 285 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
            </g>
          ) : (
            <g id="body-back">
              <ellipse cx="160" cy="50" rx="22" ry="28" fill="url(#mesh-grid-light)" stroke={strokeColor} strokeWidth="1.2" />
              <path
                d="M 130 95 C 115 105 105 130 112 170 C 116 195 125 210 128 235 C 122 250 118 265 124 285 L 196 285 C 202 265 198 250 192 235 C 195 210 204 195 208 170 C 215 130 205 105 190 95 Z"
                fill="url(#mesh-grid-light)"
                stroke={strokeColor}
                strokeWidth="1.4"
              />
              <path d="M 132 285 L 130 465 L 148 465 L 154 285 Z" fill="url(#mesh-grid-light)" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M 166 285 L 172 465 L 190 465 L 188 285 Z" fill="url(#mesh-grid-light)" stroke={strokeColor} strokeWidth="1.2" />
            </g>
          )}

          {/* Software Caliper Reference Lines (Crisp Black/Emerald) */}
          <g id="calipers-clean">
            {/* Tórax */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('chest')}>
              <line
                x1="60"
                y1="145"
                x2="260"
                y2="145"
                stroke={selectedPoint === 'chest' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'chest' ? '2' : '1'}
                strokeDasharray={selectedPoint === 'chest' ? '' : '2,2'}
              />
              <circle
                cx="260"
                cy="145"
                r={selectedPoint === 'chest' ? '4.5' : '3'}
                fill={selectedPoint === 'chest' ? '#059669' : '#64748b'}
              />
            </g>

            {/* Cintura */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('waist')}>
              <line
                x1="70"
                y1="200"
                x2="250"
                y2="200"
                stroke={selectedPoint === 'waist' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'waist' ? '2' : '1'}
                strokeDasharray={selectedPoint === 'waist' ? '' : '2,2'}
              />
              <circle
                cx="250"
                cy="200"
                r={selectedPoint === 'waist' ? '4.5' : '3'}
                fill={selectedPoint === 'waist' ? '#059669' : '#64748b'}
              />
            </g>

            {/* Abdômen */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('abdomen')}>
              <line
                x1="70"
                y1="225"
                x2="250"
                y2="225"
                stroke={selectedPoint === 'abdomen' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'abdomen' ? '2' : '1'}
                strokeDasharray={selectedPoint === 'abdomen' ? '' : '2,2'}
              />
              <circle
                cx="250"
                cy="225"
                r={selectedPoint === 'abdomen' ? '4.5' : '3'}
                fill={selectedPoint === 'abdomen' ? '#059669' : '#64748b'}
              />
            </g>

            {/* Quadril */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('hips')}>
              <line
                x1="60"
                y1="265"
                x2="260"
                y2="265"
                stroke={selectedPoint === 'hips' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'hips' ? '2' : '1'}
                strokeDasharray={selectedPoint === 'hips' ? '' : '2,2'}
              />
              <circle
                cx="260"
                cy="265"
                r={selectedPoint === 'hips' ? '4.5' : '3'}
                fill={selectedPoint === 'hips' ? '#059669' : '#64748b'}
              />
            </g>

            {/* Braço */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('bicepsRight')}>
              <line
                x1="45"
                y1="180"
                x2="105"
                y2="180"
                stroke={selectedPoint === 'bicepsRight' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'bicepsRight' ? '2' : '1'}
              />
              <circle
                cx="45"
                cy="180"
                r={selectedPoint === 'bicepsRight' ? '4.5' : '3'}
                fill={selectedPoint === 'bicepsRight' ? '#059669' : '#64748b'}
              />
            </g>

            {/* Coxa */}
            <g className="cursor-pointer group" onClick={() => handlePointClick('thighRight')}>
              <line
                x1="65"
                y1="340"
                x2="152"
                y2="340"
                stroke={selectedPoint === 'thighRight' ? '#059669' : '#94a3b8'}
                strokeWidth={selectedPoint === 'thighRight' ? '2' : '1'}
              />
              <circle
                cx="65"
                cy="340"
                r={selectedPoint === 'thighRight' ? '4.5' : '3'}
                fill={selectedPoint === 'thighRight' ? '#059669' : '#64748b'}
              />
            </g>
          </g>
        </svg>

        {/* Floating Measurement Callout Card (Clean Software Style) */}
        {selectedPoint && (
          <div className="absolute right-3 top-3 rounded-lg border border-slate-200 bg-white p-3 shadow-sm font-mono-tech max-w-[170px]">
            <div className="text-[10px] uppercase text-slate-500 font-semibold tracking-wider">
              {selectedPoint === 'chest' && 'Peitoral / Tórax'}
              {selectedPoint === 'waist' && 'Cintura (Menor)'}
              {selectedPoint === 'abdomen' && 'Abdômen (Umbilical)'}
              {selectedPoint === 'hips' && 'Quadril (Glúteo)'}
              {selectedPoint === 'bicepsRight' && 'Braço D (Relaxado)'}
              {selectedPoint === 'thighRight' && 'Coxa Medial D'}
              {selectedPoint === 'calfRight' && 'Panturrilha D'}
            </div>
            <div className="text-xl font-bold text-slate-900 tabular-nums mt-0.5">
              {selectedPoint === 'chest' && `${measurements.chest} cm`}
              {selectedPoint === 'waist' && `${measurements.waist} cm`}
              {selectedPoint === 'abdomen' && `${measurements.abdomen} cm`}
              {selectedPoint === 'hips' && `${measurements.hips} cm`}
              {selectedPoint === 'bicepsRight' && `${measurements.bicepsRight} cm`}
              {selectedPoint === 'thighRight' && `${measurements.thighRight} cm`}
              {selectedPoint === 'calfRight' && `${measurements.calfRight} cm`}
            </div>
            <div className="text-[10px] text-emerald-700 mt-1 flex items-center gap-1 font-sans">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
              <span>Aferição Validada</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Software Region Bar */}
      <div className="relative z-20 flex w-full flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-xs font-mono-tech">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-slate-500 text-[11px] mr-1">Regiões Anatômicas:</span>
          {[
            { key: 'chest', label: 'Tórax', val: measurements.chest },
            { key: 'waist', label: 'Cintura', val: measurements.waist },
            { key: 'abdomen', label: 'Abdômen', val: measurements.abdomen },
            { key: 'hips', label: 'Quadril', val: measurements.hips },
            { key: 'bicepsRight', label: 'Braço', val: measurements.bicepsRight },
            { key: 'thighRight', label: 'Coxa', val: measurements.thighRight },
          ].map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => handlePointClick(item.key)}
              className={`px-2 py-0.5 rounded border transition-all tabular-nums text-[11px] ${
                selectedPoint === item.key
                  ? 'bg-slate-900 border-slate-900 text-white font-semibold'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label} <span className="font-bold">{item.val}</span>
            </button>
          ))}
        </div>

        <div className="text-[11px] text-slate-500 flex items-center gap-1">
          <Ruler className="h-3.5 w-3.5 text-slate-400" />
          <span>Escala 1:1 Normalizada</span>
        </div>
      </div>
    </div>
  );
}
