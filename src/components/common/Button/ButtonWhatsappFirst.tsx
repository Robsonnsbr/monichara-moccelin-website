'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import consultanteAvatar from '/public/assets/image/avatar-moni.jpg';
// import { sendEventGoogleAds } from 'src/services/sendEventGoogleAds'; //TODO: corrigir bug do reload

export default function WppButton() {
  return (
    <div id="whatsapp-button-first">
      <FloatingWhatsApp
        accountName="Monichara Moccelin"
        phoneNumber="554198083760"
        avatar={consultanteAvatar.src}
        chatMessage="Olá! Tudo bem? Eu sou a Monichara, advogada. Como posso ajudar você hoje?"
        statusMessage="Normalmente responde dentro de 1 hora"
        placeholder="Escrever mensagem..."
        chatboxHeight={360}
        notificationDelay={15}
        // onClick={() => sendEventGoogleAds()} //TODO: corrigir bug do reload
      />
    </div>
  );
}
