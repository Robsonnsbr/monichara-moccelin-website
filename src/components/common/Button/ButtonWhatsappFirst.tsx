'use client';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import consultanteAvatar from '/public/assets/image/avatar-moni.jpg';

const WppButton = () => {
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
      />
    </div>
  );
};

export default WppButton;
