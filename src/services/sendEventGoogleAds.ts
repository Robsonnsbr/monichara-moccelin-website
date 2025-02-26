'use client';

import { sendGAEvent } from '@next/third-parties/google';

// Função adaptada para o envio do evento de conversão
export function sendEventGoogleAds(): void {
  // Envia o evento de conversão para o Google Ads utilizando o sendGAEvent

  const url = window.location.href;

  const callback = function () {
    window.location.href = url;
  };

  sendGAEvent('event', 'conversion', {
    send_to: 'AW-16892245591/nu7eCPGxmaIaENfs7PY-',
    value: 1.0,
    currency: 'BRL',
    event_callback: callback
  });
}
