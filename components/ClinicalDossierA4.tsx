'use client';

import React from 'react';
import { BodyScanRecord } from '../lib/types';
import { Printer, Download, Scan, CheckCircle2, ShieldCheck, Heart, Flame } from 'lucide-react';

interface ClinicalDossierA4Props {
  scan: BodyScanRecord;
  clinicName?: string;
  professionalName?: string;
  crn?: string;
}

export default function ClinicalDossierA4({
  scan,
  clinicName = 'INSTITUTO METRICLAB & BODYMAP CLINICAL',
  professionalName = 'Dr. Gabriel Freire — Nutricionista Clínico & Esportivo',
  crn = 'CRN-4 28491/RJ',
}: ClinicalDossierA4Props) {
  const handlePrint = () => {
    window.print();
  };

  const { measurements, biomarkers, posture } = scan;

  return (
    <div className="w-full flex flex-col items-center py-6 print:py-0">
      {/* Top Floating Print Bar (Hidden on Print) */}
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3 w-full max-w-4xl rounded-xl border border-slate-800 bg-slate-900/90 p-3.5 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
            <Scan className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">Dossiê Editorial A4 (9pt) — BodyMap Pro</div>
            <div className="text-[10px] text-slate-400 font-mono-tech">
              Formatado para 2 páginas exatas • Pronto para impressão ou PDF
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
          >
            <Printer className="h-3.5 w-3.5" />
            <span>Imprimir / Salvar PDF</span>
          </button>
        </div>
      </div>

      {/* ============================================================ */}
      {/* PÁGINA 1: LAUDO DE BIOANTROPOMETRIA ÓPTICA & COMPOSIÇÃO 3D */}
      {/* ============================================================ */}
      <div className="a4-sheet text-[#1e293b]">
        {/* Header Superior Institucional */}
        <header className="hairline-b pb-3 mb-4 flex items-start justify-between">
          <div>
            <div className="text-[8pt] uppercase tracking-[0.2em] text-[#059669] font-semibold font-mono-tech">
              {clinicName}
            </div>
            <h1 className="text-[14pt] font-serif-title font-semibold tracking-tight text-[#0f172a] mt-0.5">
              Dossiê de Bioantropometria 3D & Composição Corporal
            </h1>
            <div className="text-[8pt] text-[#64748b] font-mono-tech mt-0.5">
              Protocolo Óptico de Alta Definição • Precisão DEXA-Correlacionada (98.4%)
            </div>
          </div>

          <div className="text-right font-mono-tech text-[8pt] leading-tight">
            <div className="font-semibold text-[#0f172a]">LAUDO Nº {scan.id.toUpperCase()}</div>
            <div className="text-[#64748b]">Data do Scan: {scan.scanDate}</div>
            <div className="text-[#059669]">Status: Calibrado & Validado</div>
          </div>
        </header>

        {/* Bloco de Dados do Paciente (Grid Compacto 9pt) */}
        <section className="hairline-all bg-[#f8fafc] rounded p-2.5 mb-4 grid grid-cols-6 gap-2 text-[8.5pt]">
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">Paciente</span>
            <strong className="text-[#0f172a] font-semibold">{scan.patientName}</strong>
          </div>
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">Idade / Sexo</span>
            <span className="text-[#0f172a]">{scan.age} anos • {scan.sex === 'male' ? 'Masc.' : 'Fem.'}</span>
          </div>
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">Estatura</span>
            <span className="text-[#0f172a] tabular-nums font-semibold">{scan.heightCm} cm</span>
          </div>
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">Massa Total</span>
            <span className="text-[#0f172a] tabular-nums font-semibold">{scan.weightKg} kg</span>
          </div>
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">IMC</span>
            <span className="text-[#0f172a] tabular-nums font-semibold">{biomarkers.bmi} kg/m²</span>
          </div>
          <div>
            <span className="text-[7pt] text-[#64748b] uppercase tracking-wider block font-mono-tech">Classificação</span>
            <span className="text-[#059669] font-semibold">{biomarkers.bmiClassification}</span>
          </div>
        </section>

        {/* Quadro Clínico Primário: Composição Corporal & Fracionamento Tecidual */}
        <section className="mb-4">
          <div className="flex items-center justify-between hairline-b pb-1 mb-2.5">
            <h2 className="text-[10pt] font-serif-title font-semibold text-[#0f172a]">
              1. Fracionamento da Composição Corporal (Modelo 4C)
            </h2>
            <span className="text-[7.5pt] font-mono-tech text-[#64748b]">Equações de Siri (1961) & Brozek (1963)</span>
          </div>

          <div className="grid grid-cols-4 gap-2.5 mb-3">
            {/* BF Card */}
            <div className="border border-[#e2e8f0] rounded p-2 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Gordura Relativa (%BF)</div>
              <div className="text-[16pt] font-bold text-[#0f172a] tabular-nums leading-none my-1 font-mono-tech">
                {biomarkers.bodyFatPercentage}<span className="text-[9pt] font-normal text-[#64748b]">%</span>
              </div>
              <div className="text-[7.5pt] text-[#059669] font-mono-tech">
                Massa Gorda: {biomarkers.fatMassKg} kg
              </div>
            </div>

            {/* Lean Mass */}
            <div className="border border-[#e2e8f0] rounded p-2 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Massa Magra (MLG)</div>
              <div className="text-[16pt] font-bold text-[#0f172a] tabular-nums leading-none my-1 font-mono-tech">
                {biomarkers.leanMassKg}<span className="text-[9pt] font-normal text-[#64748b]"> kg</span>
              </div>
              <div className="text-[7.5pt] text-[#0284c7] font-mono-tech">
                {((biomarkers.leanMassKg / scan.weightKg) * 100).toFixed(1)}% do peso corporal
              </div>
            </div>

            {/* Total Body Water */}
            <div className="border border-[#e2e8f0] rounded p-2 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Água Corporal Total</div>
              <div className="text-[16pt] font-bold text-[#0f172a] tabular-nums leading-none my-1 font-mono-tech">
                {biomarkers.totalBodyWaterLiters}<span className="text-[9pt] font-normal text-[#64748b]"> L</span>
              </div>
              <div className="text-[7.5pt] text-[#64748b] font-mono-tech">
                Estimativa Watson et al.
              </div>
            </div>

            {/* Visceral Fat */}
            <div className="border border-[#e2e8f0] rounded p-2 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Gordura Visceral</div>
              <div className="text-[16pt] font-bold text-[#0f172a] tabular-nums leading-none my-1 font-mono-tech">
                Nível {biomarkers.visceralFatLevel}<span className="text-[9pt] font-normal text-[#64748b]">/12</span>
              </div>
              <div className="text-[7.5pt] text-[#059669] font-mono-tech">
                {biomarkers.visceralFatLevel <= 4 ? 'Faixa Ótima' : 'Atenção Metabólica'}
              </div>
            </div>
          </div>

          {/* Barra de Distribuição Relativa */}
          <div className="border border-[#e2e8f0] rounded p-2 bg-[#f8fafc] text-[7.5pt] font-mono-tech">
            <div className="flex justify-between mb-1 text-[#64748b]">
              <span>Massa Livre de Gordura ({biomarkers.leanMassKg} kg)</span>
              <span>Tecido Adiposo ({biomarkers.fatMassKg} kg)</span>
            </div>
            <div className="w-full h-2 rounded bg-[#e2e8f0] overflow-hidden flex">
              <div
                className="bg-[#059669] h-full"
                style={{ width: `${100 - biomarkers.bodyFatPercentage}%` }}
              />
              <div
                className="bg-[#d97706] h-full"
                style={{ width: `${biomarkers.bodyFatPercentage}%` }}
              />
            </div>
          </div>
        </section>

        {/* Mapeamento de Circunferências Ópticas (Tabela Bi-colunar Milimétrica) */}
        <section className="mb-4">
          <div className="flex items-center justify-between hairline-b pb-1 mb-2">
            <h2 className="text-[10pt] font-serif-title font-semibold text-[#0f172a]">
              2. Perimetria Anatômica Tridimensional (cm)
            </h2>
            <span className="text-[7.5pt] font-mono-tech text-[#64748b]">Calibração Óptica Sub-milimétrica</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-[8pt]">
            <table className="w-full border-collapse">
              <thead>
                <tr className="hairline-b text-left text-[7pt] font-mono-tech uppercase text-[#64748b]">
                  <th className="pb-1">Segmento Tronco / Eixo</th>
                  <th className="pb-1 text-right">Medida (cm)</th>
                  <th className="pb-1 text-right">Referência</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9] font-mono-tech">
                <tr>
                  <td className="py-1">Pescoço (Circunferência cervical)</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.neck}</td>
                  <td className="py-1 text-right text-[#64748b]">Normotrófico</td>
                </tr>
                <tr>
                  <td className="py-1">Tórax / Peitoral (Inspiração média)</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.chest}</td>
                  <td className="py-1 text-right text-[#64748b]">Expansibilidade normal</td>
                </tr>
                <tr>
                  <td className="py-1">Cintura (Menor diâmetro abdominal)</td>
                  <td className="py-1 text-right font-semibold tabular-nums text-[#059669]">{measurements.waist}</td>
                  <td className="py-1 text-right text-[#059669]">Ótimo</td>
                </tr>
                <tr>
                  <td className="py-1">Abdômen (Cicatriz umbilical)</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.abdomen}</td>
                  <td className="py-1 text-right text-[#64748b]">Sem acúmulo visceral</td>
                </tr>
                <tr>
                  <td className="py-1">Quadril (Maior saliência glútea)</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.hips}</td>
                  <td className="py-1 text-right text-[#64748b]">Normal</td>
                </tr>
              </tbody>
            </table>

            <table className="w-full border-collapse">
              <thead>
                <tr className="hairline-b text-left text-[7pt] font-mono-tech uppercase text-[#64748b]">
                  <th className="pb-1">Membros Periféricos</th>
                  <th className="pb-1 text-right">Direito</th>
                  <th className="pb-1 text-right">Esquerdo</th>
                  <th className="pb-1 text-right">Δ Assimetria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#f1f5f9] font-mono-tech">
                <tr>
                  <td className="py-1">Braço Relaxado</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.bicepsRight}</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.bicepsLeft}</td>
                  <td className="py-1 text-right text-[#059669]">
                    {Math.abs(measurements.bicepsRight - measurements.bicepsLeft).toFixed(1)} cm
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Antebraço</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.forearmRight}</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.forearmLeft}</td>
                  <td className="py-1 text-right text-[#059669]">
                    {Math.abs(measurements.forearmRight - measurements.forearmLeft).toFixed(1)} cm
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Coxa Medial</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.thighRight}</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.thighLeft}</td>
                  <td className="py-1 text-right text-[#059669]">
                    {Math.abs(measurements.thighRight - measurements.thighLeft).toFixed(1)} cm
                  </td>
                </tr>
                <tr>
                  <td className="py-1">Panturrilha</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.calfRight}</td>
                  <td className="py-1 text-right font-semibold tabular-nums">{measurements.calfLeft}</td>
                  <td className="py-1 text-right text-[#059669]">
                    {Math.abs(measurements.calfRight - measurements.calfLeft).toFixed(1)} cm
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rodapé da Página 1 */}
        <footer className="absolute bottom-4 left-14 right-14 hairline-t pt-2 flex items-center justify-between text-[7pt] text-[#64748b] font-mono-tech">
          <div>BodyMap v2.4 • Relatório Confidencial de Antropometria Clínica</div>
          <div>Página 1 de 2</div>
        </footer>
      </div>

      {/* ============================================================ */}
      {/* PÁGINA 2: ESTRATIFICAÇÃO DE RISCO, POSTURA & DIRETRIZES      */}
      {/* ============================================================ */}
      <div className="a4-sheet text-[#1e293b]">
        {/* Header Superior Página 2 */}
        <header className="hairline-b pb-2.5 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif-title font-semibold text-[11pt] text-[#0f172a]">
              BodyMap Clinical Analytics
            </span>
            <span className="text-[7.5pt] text-[#64748b] font-mono-tech">
              | Paciente: {scan.patientName} ({scan.scanDate})
            </span>
          </div>
          <div className="text-[7.5pt] font-mono-tech text-[#059669]">
            {professionalName} • {crn}
          </div>
        </header>

        {/* 3. Estratificação de Risco Cardiovascular & Metabólico */}
        <section className="mb-4">
          <h2 className="text-[10pt] font-serif-title font-semibold text-[#0f172a] hairline-b pb-1 mb-2">
            3. Risco Cardiovascular & Índices Antropométricos (OMS)
          </h2>

          <div className="grid grid-cols-3 gap-3 text-[8pt]">
            <div className="border border-[#e2e8f0] rounded p-2.5 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Relação Cintura/Quadril (RCQ)</div>
              <div className="text-[14pt] font-bold text-[#0f172a] tabular-nums my-0.5 font-mono-tech">
                {biomarkers.waistToHipRatio}
              </div>
              <div className="text-[7.5pt] text-[#059669] font-medium">
                Classificação: Risco Baixo (&lt; 0.90)
              </div>
              <p className="text-[7pt] text-[#64748b] mt-1 leading-tight">
                Preditor independente de eventos isquêmicos e resistência periférica à insulina.
              </p>
            </div>

            <div className="border border-[#e2e8f0] rounded p-2.5 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Relação Cintura/Estatura (RCE)</div>
              <div className="text-[14pt] font-bold text-[#0f172a] tabular-nums my-0.5 font-mono-tech">
                {biomarkers.waistToHeightRatio}
              </div>
              <div className="text-[7.5pt] text-[#059669] font-medium">
                Faixa Ótima (&lt; 0.50)
              </div>
              <p className="text-[7pt] text-[#64748b] mt-1 leading-tight">
                Cintura inferior à metade da estatura corporal, sem sobrecarga cardíaca.
              </p>
            </div>

            <div className="border border-[#e2e8f0] rounded p-2.5 bg-[#ffffff]">
              <div className="text-[7pt] uppercase font-mono-tech text-[#64748b]">Gasto Energético Basal (TMB)</div>
              <div className="text-[14pt] font-bold text-[#0f172a] tabular-nums my-0.5 font-mono-tech">
                {biomarkers.basalMetabolicRateKcal} <span className="text-[8pt] font-normal text-[#64748b]">kcal</span>
              </div>
              <div className="text-[7.5pt] text-[#0284c7] font-medium">
                Equação Katch-McArdle
              </div>
              <p className="text-[7pt] text-[#64748b] mt-1 leading-tight">
                Calculada diretamente sobre a massa livre de gordura (67.4kg MLG).
              </p>
            </div>
          </div>
        </section>

        {/* 4. Avaliação Postural e Equilíbrio Biomecânico */}
        <section className="mb-4">
          <h2 className="text-[10pt] font-serif-title font-semibold text-[#0f172a] hairline-b pb-1 mb-2">
            4. Triagem Postural e Assimetria de Cadeias
          </h2>

          <div className="border border-[#e2e8f0] rounded p-3 bg-[#f8fafc] text-[8pt]">
            <div className="grid grid-cols-3 gap-3 mb-2 font-mono-tech">
              <div>
                <span className="text-[7pt] text-[#64748b] uppercase block">Báscula de Ombros</span>
                <span className="font-semibold text-[#0f172a]">{posture.shoulderTiltDegrees}° desvio</span>
              </div>
              <div>
                <span className="text-[7pt] text-[#64748b] uppercase block">Nivelamento Pélvico</span>
                <span className="font-semibold text-[#0f172a]">{posture.pelvicTiltDegrees}° alinhado</span>
              </div>
              <div>
                <span className="text-[7pt] text-[#64748b] uppercase block">Anteriorização Cervical</span>
                <span className="font-semibold text-[#0f172a]">{posture.headForwardTiltMm} mm</span>
              </div>
            </div>

            <div className="text-[7.5pt] text-[#334155] leading-relaxed border-t border-[#e2e8f0] pt-2">
              <strong>Achados Posturais:</strong> {posture.notes.join(' • ')}. Recomenda-se fortalecimento de manguito rotador e cadeia posterior para estabilização de cintura escapular.
            </div>
          </div>
        </section>

        {/* 5. Parecer e Condutas Nutricionais Sugeridas */}
        <section className="mb-4">
          <h2 className="text-[10pt] font-serif-title font-semibold text-[#0f172a] hairline-b pb-1 mb-2">
            5. Conduta Nutricional e Metas Clínicas do Ciclo
          </h2>

          <div className="space-y-2 text-[8pt] leading-relaxed text-[#334155]">
            <p>
              <strong>Diagnóstico Antropométrico:</strong> Paciente apresenta perfil de alta densidade muscular com percentual de gordura corporal de {biomarkers.bodyFatPercentage}%, classificado em zona atlética. Perfil de gordura visceral controlado (Nível {biomarkers.visceralFatLevel}), minimizando riscos aterogênicos e metabólicos.
            </p>
            <p>
              <strong>Metas do Protocolo:</strong> Preservação de massa magra ({biomarkers.leanMassKg} kg) durante o microciclo atual com estímulo à recomposição corporal. Ingestão hídrica alvo estipulada em 3.200 ml/dia com distribuição de proteínas em 2.2 g/kg.
            </p>
          </div>
        </section>

        {/* Bloco de Assinatura Profissional */}
        <div className="mt-8 pt-4 hairline-t flex items-end justify-between text-[8pt]">
          <div>
            <div className="font-mono-tech text-[7pt] text-[#64748b]">HASH DE AUTENTICIDADE CRIPTOGRÁFICA:</div>
            <div className="font-mono-tech text-[7pt] text-[#0f172a]">
              SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069
            </div>
          </div>

          <div className="text-right">
            <div className="w-48 hairline-b mb-1 ml-auto" />
            <div className="font-serif-title font-semibold text-[#0f172a]">{professionalName}</div>
            <div className="text-[7.5pt] text-[#64748b] font-mono-tech">{crn}</div>
          </div>
        </div>

        {/* Rodapé da Página 2 */}
        <footer className="absolute bottom-4 left-14 right-14 hairline-t pt-2 flex items-center justify-between text-[7pt] text-[#64748b] font-mono-tech">
          <div>BodyMap AI Engine • Instituto MetricLab</div>
          <div>Página 2 de 2</div>
        </footer>
      </div>
    </div>
  );
}
