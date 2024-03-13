import type { Metadata } from 'next';

import { raleway, poppins, openSans } from '../font';
import './globals.css';

import { AppProviders } from 'src/contexts';

import LayoutWrapper from 'src/components/common/container/LayoutWrapper';
import Header from 'src/components/header/Header';
import Footer from 'src/components/footer';
import ButtonScrollUp from 'src/components/common/Button/ButtonScrollUp';
import Breadcrumbs from 'src/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Monichara Moccelin',
  description: 'WebSite Doutora Monichara Moccelin'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-mono bg-black`}
      >
        <AppProviders>
          <LayoutWrapper>
            <Header />
            <Breadcrumbs />
            {children}
            <Footer />
            <ButtonScrollUp />
          </LayoutWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
