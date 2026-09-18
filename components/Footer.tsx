import React from 'react';
import Link from 'next/link';
import { Scan, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 text-xs font-mono-tech">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700">
                <Scan className="h-4 w-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">BodyMap</span>
              <span className="rounded bg-slate-100 border border-slate-200 px-1.5 py-0.5 text-[10px] text-slate-700 font-semibold">
                Clinical Pro
              </span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed font-sans">
              Tecnologia de ponta em bioantropometria óptica 3D e prescrição dietética ágil para nutricionistas clínicos, consultorias esportivas e clínicas médicas.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Conformidade com LGPD e Padrões CFM/CFN</span>
            </div>
          </div>

          {/* Col 2: Solução & Plataforma */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
              Módulos Clínicos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/consultorio" className="hover:text-emerald-700 transition-colors">
                  Consultório Digital
                </Link>
              </li>
              <li>
                <Link href="/scanner" className="hover:text-emerald-700 transition-colors">
                  Scanner 3D Óptico
                </Link>
              </li>
              <li>
                <Link href="/dossie" className="hover:text-emerald-700 transition-colors">
                  Dossiê Clínico Editorial (9pt A4)
                </Link>
              </li>
              <li>
                <Link href="/app-paciente" className="hover:text-emerald-700 transition-colors">
                  Aplicativo do Paciente (PWA)
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-700 transition-colors">
                  Painel de Gestão & Métricas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Ciência & Validação */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
              Fundamentação Científica
            </h4>
            <ul className="space-y-1.5 text-[11px] text-slate-600">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>Siri (1961) — Densitometria Corporal</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>Jackson & Pollock (1978/1980)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>U.S. Navy Bureau of Medicine</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>Organização Mundial da Saúde (OMS 2011)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>Katch-McArdle (TMB por massa magra)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Suporte & API */}
          <div>
            <h4 className="text-slate-900 text-xs font-bold uppercase tracking-wider mb-3">
              Infraestrutura & Integrações
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans mb-2.5">
              Integração via API REST segura e Webhooks para prontuários eletrônicos legados e CRMs de saúde.
            </p>
            <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-[11px] text-slate-700">
              <div className="flex justify-between items-center">
                <span>Status da API:</span>
                <span className="text-emerald-700 font-bold">Operacional (99.9%)</span>
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Tempo Médio de Processamento: 4.8s</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} BodyMap Technologies Inc. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Privacidade de Dados Clínicos
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Termos de Uso
            </Link>
            <Link href="#" className="hover:text-slate-900 transition-colors">
              Segurança & Criptografia
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
