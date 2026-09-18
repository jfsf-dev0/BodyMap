import React from 'react';
import Link from 'next/link';
import { Scan, ShieldCheck, HeartPulse, FileText, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs font-mono-tech">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Scan className="h-4 w-4" />
              </div>
              <span className="font-bold text-white text-base">BodyMap</span>
              <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-300 font-semibold">
                3D AI
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-sans">
              A tecnologia mais avançada de mapeamento corporal 3D e bioantropometria óptica para nutricionistas de alta performance, clínicas esportivas e pacientes.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Conformidade com LGPD & Padrões Médicos</span>
            </div>
          </div>

          {/* Col 2: Solução & Plataforma */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Plataforma
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#demo" className="hover:text-emerald-400 transition-colors">
                  Scanner 3D Interativo
                </Link>
              </li>
              <li>
                <Link href="/dossie" className="hover:text-emerald-400 transition-colors">
                  Dossiê Clínico 9pt (A4)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">
                  Portal do Profissional
                </Link>
              </li>
              <li>
                <Link href="#comparativo" className="hover:text-emerald-400 transition-colors">
                  DEXA Scan vs. BodyMap
                </Link>
              </li>
              <li>
                <Link href="/scanner" className="hover:text-emerald-400 transition-colors">
                  Novo Escaneamento Óptico
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ciência & Validação */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Bases Científicas
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                <span>Siri (1961) — Equação de densitometria</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                <span>Jackson & Pollock (1978/1980)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                <span>U.S. Navy Bureau of Medicine & Surgery</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                <span>Organização Mundial da Saúde (OMS 2011)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                <span>Katch-McArdle (TMB por massa magra)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Suporte & Acesso */}
          <div>
            <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-3">
              Atendimento & API
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-sans mb-2">
              Integração via API REST / Webhooks para sistemas clínicos, prontuários eletrônicos e aplicativos próprios.
            </p>
            <div className="rounded-lg bg-slate-900 border border-slate-800 p-2.5 text-[11px] text-slate-300">
              <div>API Status: <span className="text-emerald-400 font-bold">Operacional (99.9%)</span></div>
              <div className="text-[10px] text-slate-400 mt-0.5">Tempo Médio de Scan: 4.8s</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} BodyMap Technologies Inc. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Privacidade de Dados Médicos
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-emerald-400 transition-colors">
              Segurança Criptográfica
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
