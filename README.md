# BodyMap — Precision AI Body Mapping & 3D Bioanthropometry

> **Plataforma de Mapeamento Corporal 3D e Bioantropometria Óptica por Inteligência Artificial.**  
> De 2 fotos de smartphone para uma avaliação clínica milimétrica completa: % de gordura, massa magra, circunferências corporais, risco metabólico e postura em menos de 10 segundos.

---

## 🔬 Destaques Tecnológicos & Científicos

1. **Correlação DEXA de 98.4% (r = 0.984):**
   - Calibrado com as equações de *Siri (1961)*, *Brozek (1963)* e *U.S. Navy Bureau of Medicine & Surgery*.
   - Taxa Metabólica Basal (TMB) calculada via *Katch-McArdle* sobre a Massa Livre de Gordura (MLG).
   - Relação Cintura-Quadril (RCQ) e Relação Cintura-Estatura (RCE) com estratificação de risco segundo diretrizes da OMS (2011).

2. **Scanner Interativo 3D & Biometria Óptica:**
   - Visualizador de avatar anatômico em wireframe com rotação de ângulos (Frontal 0°, Sagital 90°, Posterior 180°).
   - Camadas dinâmicas: Malha de Superfície, Heatmap de Adiposidade Subcutânea e Ativação Muscular.
   - Calipers milimétricos interativos em 10 pontos anatômicos (Tórax, Cintura, Abdômen, Quadril, Braços, Coxas, Panturrilhas).

3. **Dossiê Clínico Editorial em 9pt (MetricLab Luxury Grade):**
   - Layout estritamente diagramado para 2 páginas A4 exatas (frente e verso).
   - Tipografia em 9pt com Newsreader Serif e Monospace técnico.
   - Otimizado para impressão direta ou exportação em PDF de altíssimo valor percebido.

4. **Comparador de Evolução Temporal (Morphing Slider):**
   - Controle deslizante para comparação lado a lado entre Baseline (T0) e Reavaliação (T1 - 90/120 dias).
   - Cálculo instantâneo dos deltas de transformação corporal (`Δ %BF`, `Δ MLG`, `Δ Cintura`).

5. **Portal do Profissional & Automação Pré-Consulta:**
   - Gerador de convites de escaneamento pré-consulta com link mágico disparado via WhatsApp.
   - Painel de gestão de pacientes e histórico longitudinal de escaneamentos.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15 (App Router, Server & Client Components)
- **Engine UI:** React 19
- **Estilização:** Tailwind CSS v4 com temas biomédicos escuros/claros e regras `@media print` A4
- **Linguagem:** TypeScript 5.7+ (Modo estrito)
- **Ícones:** Lucide React
- **Arquitetura:** Component-driven, zero external 3D runtime bloat (SVG & Canvas vetoriais ultra-leves e responsivos)

---

## 🚀 Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/jfsf-dev0/BodyMap.git
cd BodyMap

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 📄 Rotas Principais

- `/` — Landing Page Institucional com o Simulador Interativo 3D e Comparador Temporal.
- `/scanner` — Fluxo Completo de Escaneamento (Biometria -> Captura de Fotos -> Análise IA -> Diagnóstico).
- `/dossie` — Visualização do Dossiê Editorial 9pt formatado para impressão A4.
- `/dashboard` — Portal do Nutricionista com métricas, pacientes e gerador de links WhatsApp.

---

## ⚖️ Conformidade e Privacidade

- **LGPD & HIPAA:** Processamento de imagens local no cliente, garantindo anonimização e conformidade com as diretrizes do Conselho Federal de Nutricionistas (CFN).
