import type { Metadata } from 'next';

import { raleway, poppins, openSans } from '../font';
import './globals.css';

import { AppProviders } from 'src/contexts';

import LayoutWrapper from 'src/components/common/container/LayoutWrapper';
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer';
import ButtonScrollUp from 'src/components/common/Button/ButtonScrollUp';
import Breadcrumbs from 'src/components/common/Breadcrumbs';
import WppButton from 'src/components/common/Button/ButtonWhatsappFirst';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: {
    template: '%s | Moccelin Advocacia',
    default: 'Moccelin Advocacia'
  },
  icons: {
    icon: '/favicon.ico'
  },
  description: `Contrate um advogado com rapidez e segurança! Oferecemos consultoria 
                  jurídica online e soluções eficazes para resolver seu problema com 
                  agilidade e total transparência.`,

  keywords: [
    'adv curitiba',
    'advogado curitiba',
    'consulta jurídica curitiba',
    'contratar advogado curitiba',
    'preciso de advogado curitiba',
    'consultoria jurídica online curitiba',
    'advogado curitiba whatsapp',
    'preciso de um advogado curitiba',
    'site de advogado curitiba',
    'advogado telefone curitiba',
    'telefone advogado curitiba',
    'advogado contratos curitiba',
    'melhor advogado curitiba',
    'advogado especialista curitiba',
    'advogado trabalhista curitiba',
    'advogado cível curitiba',
    'advogado empresarial curitiba',
    'advogado de confiança curitiba',
    'atendimento jurídico curitiba',
    'assessoria jurídica curitiba',
    'advogado urgente curitiba',
    'advogado direito médico',
    'advogado de médico Curitiba',
    'advogado empresarial Curitiba',
    'advogado referência direito médico',
    'advogado especialista direito médico'
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="robots" content="index, follow" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-sans bg-black`}
      >
        <AppProviders>
          <LayoutWrapper>
            <Header />
            <Breadcrumbs />
            {children}
            <GoogleAnalytics gaId="AW-16892245591" />
            <WppButton />
            <Footer />
            <ButtonScrollUp />
          </LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
