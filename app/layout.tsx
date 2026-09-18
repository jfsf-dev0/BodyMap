import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BodyMap — Software de Nutrição Clínica & Avaliação Corporal 3D',
  description:
    'Software para nutricionistas: prescrição dietética ultrarrápida em < 10 minutos (base TACO), avaliação antropométrica 3D por fotos com precisão DEXA, aplicativo para o paciente e gestão completa de consultório.',
  keywords: [
    'bodymap',
    'software nutricionista',
    'programa de nutricao',
    'webdiet alternativa',
    'prescricao dietetica',
    'tabela taco',
    'antropometria 3d',
    'aplicativo paciente nutricao',
  ],
  authors: [{ name: 'BodyMap Software Clínico' }],
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth bg-[#f8fafc]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
