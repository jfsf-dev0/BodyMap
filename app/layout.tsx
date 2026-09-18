import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BodyMap — Mapeamento Corporal 3D & Bioantropometria por IA',
  description:
    'A evolução da avaliação antropométrica clínica: De 2 fotos de smartphone para um mapeamento 3D milimétrico, % de gordura, massa magra e risco metabólico com 98.4% de correlação DEXA.',
  keywords: [
    'bodymap',
    'body3d',
    'antropometria 3d',
    'bioantropometria',
    'avaliacao corporal por foto',
    'percentual de gordura ia',
    'software para nutricionista',
    'composicao corporal 3d',
  ],
  authors: [{ name: 'BodyMap Technologies' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#090d16',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
