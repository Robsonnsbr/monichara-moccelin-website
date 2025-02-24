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
  title: 'Moccelin Advocacia',
  icons: {
    icon: '/favicon.ico'
  },
  description:
    'Advocacia atual e humanizada, especialista em prevenir e solucionar conflitos jurídicos com ética e eficiência.',
  keywords:
    'advocacia, direito, solução de conflitos, consultoria jurídica, advogado'
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
