'use client';

import React, { useState, useEffect } from 'react';
import { BodyMeasurements, BiologicalSex } from '../lib/types';
import { Eye, Layers, RotateCw, Sparkles, CheckCircle2 } from 'lucide-react';

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
  const [showCalipers, setShowCalipers] = useState(true);
  const [selectedPoint, setSelectedPoint] = useState<string | null>(highlightPart || 'waist');
  const [isScanning, setIsScanning] = useState(true);

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

  // Cores dinâmicas de acordo com o layer
  const strokeColor = activeLayer === 'fat_heatmap' 
    ? '#f59e0b' 
    : activeLayer === 'muscle_mass' 
    ? '#06b6d4' 
    : '#10b981';

  return (
    <div className="relative flex flex-col items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/90 p-4 sm:p-6 backdrop-blur-md overflow-hidden shadow-2xl">
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-grid-tech-dark opacity-70 pointer-events-none" />

      {/* Laser Scanning Animation Bar */}
      {isScanning && (
        <div className="pointer-events-none absolute left-0 right-0 z-20 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981] animate-scanline" />
      )}

      {/* Top HUD Controls */}
      <div className="relative z-30 flex w-full flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
        {/* View Angle Switcher */}
        <div className="flex items-center rounded-lg bg-slate-950/80 p-1 border border-slate-800 text-[11px] font-mono-tech">
          <button
            type="button"
            onClick={() => setAngle('front')}
            className={`px-2.5 py-1 rounded transition-all ${
              angle === 'front' ? 'bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Frontal (0°)
          </button>
          <button
            type="button"
            onClick={() => setAngle('side')}
            className={`px-2.5 py-1 rounded transition-all ${
              angle === 'side' ? 'bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Sagital (90°)
          </button>
          <button
            type="button"
            onClick={() => setAngle('back')}
            className={`px-2.5 py-1 rounded transition-all ${
              angle === 'back' ? 'bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Posterior (180°)
          </button>
        </div>

        {/* Layer Filters */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono-tech">
          <button
            type="button"
            onClick={() => setActiveLayer('wireframe')}
            className={`px-2 py-1 rounded border transition-all ${
              activeLayer === 'wireframe'
                ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300'
                : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Malha de Superfície 3D"
          >
            Malha Óptica
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('fat_heatmap')}
            className={`px-2 py-1 rounded border transition-all ${
              activeLayer === 'fat_heatmap'
                ? 'bg-amber-950/60 border-amber-500/50 text-amber-300'
                : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Distribuição de Tecido Adiposo"
          >
            Adiposidade
          </button>
          <button
            type="button"
            onClick={() => setActiveLayer('muscle_mass')}
            className={`px-2 py-1 rounded border transition-all ${
              activeLayer === 'muscle_mass'
                ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Massa Muscular Ativa"
          >
            Massa Magra
          </button>
        </div>
      </div>

      {/* Main Avatar SVG Visualization */}
      <div className="relative my-4 flex h-[380px] w-full items-center justify-center">
        <svg
          viewBox="0 0 320 480"
          className="h-full w-auto max-w-full drop-shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300"
        >
          <defs>
            {/* Holographic Wireframe Pattern */}
            <pattern id="mesh-grid" width="12" height="12" patternUnits="userSpaceOnUse">
              <path
                d="M 12 0 L 0 0 0 12"
                fill="none"
                stroke={strokeColor}
                strokeWidth="0.5"
                strokeOpacity="0.3"
              />
            </pattern>
            {/* Heatmap Gradient for Fat layer */}
            <linearGradient id="fat-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#ef4444" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.05" />
            </linearGradient>
            {/* Muscle Gradient */}
            <linearGradient id="muscle-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#06b6d4" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Central Vertical Axis */}
          <line
            x1="160"
            y1="20"
            x2="160"
            y2="460"
            stroke="rgba(148, 163, 184, 0.2)"
            strokeDasharray="3,3"
            strokeWidth="1"
          />

          {/* Body Silhouette Geometry (Adapts to Sex and Angle) */}
          {angle === 'front' ? (
            <g id="body-front">
              {/* Head */}
              <ellipse
                cx="160"
                cy="50"
                rx="22"
                ry="28"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Neck */}
              <path
                d="M 152 78 L 152 92 L 168 92 L 168 78 Z"
                fill="url(#mesh-grid)"
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
                    ? 'url(#fat-gradient)'
                    : activeLayer === 'muscle_mass'
                    ? 'url(#muscle-gradient)'
                    : 'url(#mesh-grid)'
                }
                stroke={strokeColor}
                strokeWidth="1.5"
              />

              {/* Left Arm (Viewer Right) */}
              <path
                d="M 194 102 C 218 115 228 150 230 195 C 232 225 230 260 228 275 L 216 273 C 218 255 220 220 216 195 C 212 170 206 140 190 125 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Right Arm (Viewer Left) */}
              <path
                d="M 126 102 C 102 115 92 150 90 195 C 88 225 90 260 92 275 L 104 273 C 102 255 100 220 104 195 C 108 170 114 140 130 125 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />

              {/* Legs */}
              {/* Left Leg (Viewer Left) */}
              <path
                d="M 132 285 C 128 320 124 360 130 400 C 134 430 132 455 130 465 L 148 465 C 150 445 152 420 150 395 C 146 360 152 320 156 285 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Right Leg (Viewer Right) */}
              <path
                d="M 164 285 C 168 320 174 360 170 395 C 168 420 170 445 172 465 L 190 465 C 188 455 186 430 190 400 C 196 360 192 320 188 285 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />

              {/* Pectoral / Chest Anatomy lines */}
              <path
                d="M 138 150 Q 160 162 182 150"
                fill="none"
                stroke={strokeColor}
                strokeWidth="1"
                strokeDasharray="2,2"
              />
              {/* Abdomen segmentation */}
              <line x1="160" y1="160" x2="160" y2="230" stroke={strokeColor} strokeWidth="0.8" strokeDasharray="2,2" />
              <circle cx="160" cy="225" r="2.5" fill={strokeColor} opacity="0.8" />
            </g>
          ) : angle === 'side' ? (
            <g id="body-side">
              {/* Head Profile */}
              <path
                d="M 152 30 C 168 30 178 40 176 58 C 174 65 182 68 182 72 L 174 76 C 172 82 165 84 158 84 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
              {/* Neck Profile */}
              <path d="M 154 84 L 150 102 L 166 102 L 166 84 Z" fill="url(#mesh-grid)" stroke={strokeColor} strokeWidth="1" />
              {/* Torso Side with Lordosis/Kyphosis spine curvature */}
              <path
                d="M 148 102 C 138 125 140 165 144 195 C 146 225 138 250 142 285 L 176 285 C 182 255 186 215 178 180 C 172 150 176 120 166 102 Z"
                fill={activeLayer === 'fat_heatmap' ? 'url(#fat-gradient)' : 'url(#mesh-grid)'}
                stroke={strokeColor}
                strokeWidth="1.4"
              />
              {/* Arm Sagittal */}
              <path
                d="M 156 112 C 164 140 162 185 160 220 L 150 220 C 152 185 152 145 146 115 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1"
              />
              {/* Leg Side */}
              <path
                d="M 144 285 C 138 330 142 385 144 425 C 146 445 144 460 140 465 L 168 465 C 172 455 174 425 168 390 C 162 345 172 315 176 285 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.2"
              />
            </g>
          ) : (
            <g id="body-back">
              {/* Back View Geometry */}
              <ellipse cx="160" cy="50" rx="22" ry="28" fill="url(#mesh-grid)" stroke={strokeColor} strokeWidth="1.2" />
              <path
                d="M 130 95 C 115 105 105 130 112 170 C 116 195 125 210 128 235 C 122 250 118 265 124 285 L 196 285 C 202 265 198 250 192 235 C 195 210 204 195 208 170 C 215 130 205 105 190 95 Z"
                fill="url(#mesh-grid)"
                stroke={strokeColor}
                strokeWidth="1.5"
              />
              {/* Scapula lines */}
              <path d="M 136 125 Q 148 145 144 165" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2,2" />
              <path d="M 184 125 Q 172 145 176 165" fill="none" stroke={strokeColor} strokeWidth="1" strokeDasharray="2,2" />
              {/* Glutes */}
              <path d="M 132 265 Q 160 285 160 300 Q 160 285 188 265" fill="none" stroke={strokeColor} strokeWidth="1.2" />
              {/* Legs Back */}
              <path d="M 132 285 L 130 465 L 148 465 L 154 285 Z" fill="url(#mesh-grid)" stroke={strokeColor} strokeWidth="1.2" />
              <path d="M 166 285 L 172 465 L 190 465 L 188 285 Z" fill="url(#mesh-grid)" stroke={strokeColor} strokeWidth="1.2" />
            </g>
          )}

          {/* Interactive Caliper Lines and Hotspots */}
          {showCalipers && (
            <g id="caliper-lines" className="transition-all duration-200">
              {/* Tórax */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('chest')}
              >
                <line
                  x1="70"
                  y1="145"
                  x2="250"
                  y2="145"
                  stroke={selectedPoint === 'chest' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'chest' ? '2' : '1'}
                  strokeDasharray={selectedPoint === 'chest' ? '' : '3,3'}
                />
                <circle
                  cx="250"
                  cy="145"
                  r={selectedPoint === 'chest' ? '5' : '3.5'}
                  fill={selectedPoint === 'chest' ? '#10b981' : '#64748b'}
                  className="transition-all"
                />
              </g>

              {/* Cintura (Menor circunferência) */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('waist')}
              >
                <line
                  x1="80"
                  y1="200"
                  x2="240"
                  y2="200"
                  stroke={selectedPoint === 'waist' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'waist' ? '2' : '1'}
                  strokeDasharray={selectedPoint === 'waist' ? '' : '3,3'}
                />
                <circle
                  cx="240"
                  cy="200"
                  r={selectedPoint === 'waist' ? '5' : '3.5'}
                  fill={selectedPoint === 'waist' ? '#10b981' : '#64748b'}
                  className="transition-all"
                />
              </g>

              {/* Abdômen (Cicatriz Umbilical) */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('abdomen')}
              >
                <line
                  x1="80"
                  y1="225"
                  x2="240"
                  y2="225"
                  stroke={selectedPoint === 'abdomen' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'abdomen' ? '2' : '1'}
                  strokeDasharray={selectedPoint === 'abdomen' ? '' : '3,3'}
                />
                <circle
                  cx="240"
                  cy="225"
                  r={selectedPoint === 'abdomen' ? '5' : '3.5'}
                  fill={selectedPoint === 'abdomen' ? '#10b981' : '#64748b'}
                  className="transition-all"
                />
              </g>

              {/* Quadril */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('hips')}
              >
                <line
                  x1="70"
                  y1="265"
                  x2="250"
                  y2="265"
                  stroke={selectedPoint === 'hips' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'hips' ? '2' : '1'}
                  strokeDasharray={selectedPoint === 'hips' ? '' : '3,3'}
                />
                <circle
                  cx="250"
                  cy="265"
                  r={selectedPoint === 'hips' ? '5' : '3.5'}
                  fill={selectedPoint === 'hips' ? '#10b981' : '#64748b'}
                  className="transition-all"
                />
              </g>

              {/* Bíceps Direito */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('bicepsRight')}
              >
                <line
                  x1="50"
                  y1="180"
                  x2="105"
                  y2="180"
                  stroke={selectedPoint === 'bicepsRight' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'bicepsRight' ? '2' : '1'}
                />
                <circle
                  cx="50"
                  cy="180"
                  r={selectedPoint === 'bicepsRight' ? '5' : '3.5'}
                  fill={selectedPoint === 'bicepsRight' ? '#10b981' : '#64748b'}
                />
              </g>

              {/* Coxa Medial */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('thighRight')}
              >
                <line
                  x1="70"
                  y1="340"
                  x2="152"
                  y2="340"
                  stroke={selectedPoint === 'thighRight' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'thighRight' ? '2' : '1'}
                />
                <circle
                  cx="70"
                  cy="340"
                  r={selectedPoint === 'thighRight' ? '5' : '3.5'}
                  fill={selectedPoint === 'thighRight' ? '#10b981' : '#64748b'}
                />
              </g>

              {/* Panturrilha */}
              <g
                className="cursor-pointer group"
                onClick={() => handlePointClick('calfRight')}
              >
                <line
                  x1="70"
                  y1="410"
                  x2="150"
                  y2="410"
                  stroke={selectedPoint === 'calfRight' ? '#10b981' : 'rgba(148, 163, 184, 0.4)'}
                  strokeWidth={selectedPoint === 'calfRight' ? '2' : '1'}
                />
                <circle
                  cx="70"
                  cy="410"
                  r={selectedPoint === 'calfRight' ? '5' : '3.5'}
                  fill={selectedPoint === 'calfRight' ? '#10b981' : '#64748b'}
                />
              </g>
            </g>
          )}
        </svg>

        {/* Selected Part Callout Floating Badge */}
        {selectedPoint && (
          <div className="absolute right-3 top-6 rounded-xl border border-emerald-500/40 bg-slate-950/90 p-3 shadow-lg backdrop-blur-md transition-all font-mono-tech max-w-[150px]">
            <div className="text-[10px] uppercase text-emerald-400 font-semibold tracking-wider">
              {selectedPoint === 'chest' && 'Peitoral / Tórax'}
              {selectedPoint === 'waist' && 'Cintura (Menor)'}
              {selectedPoint === 'abdomen' && 'Abdômen (Umb.)'}
              {selectedPoint === 'hips' && 'Quadril (Glúteo)'}
              {selectedPoint === 'bicepsRight' && 'Braço D (Relax.)'}
              {selectedPoint === 'thighRight' && 'Coxa Medial D'}
              {selectedPoint === 'calfRight' && 'Panturrilha D'}
            </div>
            <div className="text-lg font-bold text-white tabular-nums mt-0.5">
              {selectedPoint === 'chest' && `${measurements.chest} cm`}
              {selectedPoint === 'waist' && `${measurements.waist} cm`}
              {selectedPoint === 'abdomen' && `${measurements.abdomen} cm`}
              {selectedPoint === 'hips' && `${measurements.hips} cm`}
              {selectedPoint === 'bicepsRight' && `${measurements.bicepsRight} cm`}
              {selectedPoint === 'thighRight' && `${measurements.thighRight} cm`}
              {selectedPoint === 'calfRight' && `${measurements.calfRight} cm`}
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5 flex items-center gap-1">
              <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400" />
              <span>Óptico ±0.4cm</span>
            </div>
          </div>
        )}
      </div>

      {/* Bottom HUD: Live Caliper Quick Selector */}
      <div className="relative z-30 flex w-full flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
        <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono-tech">
          <span className="text-slate-500 mr-1">Regiões:</span>
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
              className={`px-2 py-0.5 rounded border transition-all tabular-nums ${
                selectedPoint === item.key
                  ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300 font-bold'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.label} <span className="text-white font-semibold">{item.val}</span>
            </button>
          ))}
        </div>

        {/* Scan Laser Toggle */}
        <button
          type="button"
          onClick={() => setIsScanning(!isScanning)}
          className={`flex items-center gap-1 text-[10px] font-mono-tech px-2 py-0.5 rounded border transition-all ${
            isScanning
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-slate-950/40 border-slate-800 text-slate-500'
          }`}
        >
          <Sparkles className="h-3 w-3" />
          <span>{isScanning ? 'Scan Ativo' : 'Pausado'}</span>
        </button>
      </div>
    </div>
  );
}
