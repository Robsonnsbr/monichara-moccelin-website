'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { ScrollProvider } from './refs';
import { AosProvider } from './aos';

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider>
      <AosProvider>
        <ScrollProvider>{children}</ScrollProvider>
      </AosProvider>
    </ChakraProvider>
  );
}
