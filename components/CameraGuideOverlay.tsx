'use client';

import React from 'react';
import { Camera, Check } from 'lucide-react';

interface CameraGuideOverlayProps {
  viewMode: 'front' | 'side';
  onCaptureMock?: () => void;
}

export default function CameraGuideOverlay({ viewMode, onCaptureMock }: CameraGuideOverlayProps) {
  return (
    <div className="relative aspect-[3/4] max-h-[500px] w-full rounded-2xl border border-slate-300 bg-slate-900 overflow-hidden flex flex-col items-center justify-between p-4 sm:p-6 shadow-md">
      {/* Top Status Bar */}
      <div className="relative z-10 flex w-full items-center justify-between">
        <div className="flex items-center gap-1.5 rounded-full bg-slate-800 border border-slate-700 px-3 py-1 text-xs font-mono-tech text-emerald-400">
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          <span>{viewMode === 'front' ? 'VISTA FRONTAL (0°)' : 'VISTA SAGITAL (90°)'}</span>
        </div>
        <div className="rounded-full bg-slate-800 border border-slate-700 px-2.5 py-1 text-[10px] font-mono-tech text-slate-300">
          Distância Recomendada: ~2.0m
        </div>
      </div>

      {/* Center AR Silhouette Vector Overlay */}
      <div className="relative z-10 my-auto flex h-[70%] w-full items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 200 320"
          className="h-full w-auto stroke-emerald-400/70 fill-emerald-500/10 stroke-[1.5] stroke-dasharray-[4,3]"
        >
          {viewMode === 'front' ? (
            <g>
              {/* Head Silhouette */}
              <circle cx="100" cy="35" r="18" />
              {/* Shoulders & Torso */}
              <path d="M 65 70 C 80 62 120 62 135 70 L 145 140 C 135 155 128 175 130 195 L 70 195 C 72 175 65 155 55 140 Z" />
              {/* Arms spaced slightly */}
              <path d="M 60 75 L 40 145 M 140 75 L 160 145" />
              {/* Legs */}
              <path d="M 75 195 L 70 300 M 125 195 L 130 300" />
              {/* Feet Line */}
              <line x1="60" y1="305" x2="140" y2="305" strokeWidth="1" />
              {/* Alignment Center Crosshair */}
              <circle cx="100" cy="150" r="3.5" fill="#10b981" />
            </g>
          ) : (
            <g>
              {/* Head Profile */}
              <ellipse cx="100" cy="35" rx="16" ry="18" />
              {/* Torso Profile */}
              <path d="M 90 70 C 80 95 85 145 92 195 L 115 195 C 122 155 118 95 110 70 Z" />
              {/* Arm Sagittal */}
              <line x1="102" y1="75" x2="100" y2="155" />
              {/* Leg Profile */}
              <path d="M 95 195 L 98 300 M 110 195 L 108 300" />
              <line x1="85" y1="305" x2="125" y2="305" strokeWidth="1" />
            </g>
          )}
        </svg>

        {/* Alignment instructions box in center */}
        <div className="absolute inset-x-0 bottom-2 text-center">
          <span className="rounded-md bg-slate-900/90 px-3 py-1 text-[11px] font-mono-tech text-slate-200 border border-slate-700">
            {viewMode === 'front'
              ? 'Enquadre o corpo inteiro alinhado aos marcadores'
              : 'Fique totalmente de perfil com postura ereta'}
          </span>
        </div>
      </div>

      {/* Bottom Checklist & Trigger */}
      <div className="relative z-10 w-full flex flex-col gap-2 pt-2 border-t border-slate-800">
        <div className="flex items-center justify-between text-[10px] font-mono-tech text-slate-300">
          <div className="flex items-center gap-1 text-emerald-400">
            <Check className="h-3 w-3" />
            <span>Iluminação Uniforme</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <Check className="h-3 w-3" />
            <span>Roupas Justas</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <Check className="h-3 w-3" />
            <span>Pés Alinhados</span>
          </div>
        </div>

        {onCaptureMock && (
          <button
            type="button"
            onClick={onCaptureMock}
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 py-2.5 text-xs font-semibold text-white transition-colors cursor-pointer"
          >
            <Camera className="h-4 w-4" />
            <span>Capturar Imagem {viewMode === 'front' ? 'Frontal' : 'Lateral'}</span>
          </button>
        )}
      </div>
    </div>
  );
}
