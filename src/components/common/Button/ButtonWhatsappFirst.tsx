'use client';
// import { useState, useEffect } from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import consultanteAvatar from '/public/assets/image/avatar-moni.jpg';

const WppButton = () => {
  //   const [isLoaded, setIsLoaded] = useState(false);

  //   useEffect(() => {
  //     console.log('Entrei');
  //     if (document.readyState === 'complete') {
  //       setIsLoaded(true);
  //     } else {
  //       const handleLoad = () => setIsLoaded(true);
  //       window.addEventListener('load', handleLoad);

  //       return () => {
  //         window.removeEventListener('load', handleLoad);
  //       };
  //     }
  //   }, []);

  //   if (!isLoaded) {
  //     return null;
  //   }

  return (
    <div
      id="whatsapp-button-first"
      //   className="opacity-0 animate-fade-in absolute"
    >
      <FloatingWhatsApp
        accountName="Monichara Moccelin"
        phoneNumber="554199483760"
        avatar={consultanteAvatar.src}
        chatMessage="Olá! Tudo bem? Eu sou a Monichara, advogada. Como posso ajudar você hoje?"
        statusMessage="Normalmente responde dentro de 1 hora"
        placeholder="Escrever mensagem..."
        chatboxHeight={360}
      />
    </div>
  );
};

export default WppButton;
