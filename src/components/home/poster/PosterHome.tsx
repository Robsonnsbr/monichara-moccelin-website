import React from 'react';
import './posterHome.css';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import ButtonWhatsapp from 'src/components/common/Button/ButtonWhatsapp';

function PosterHome() {
  return (
    <>
      <section className="background-porter-home" id="poster-home">
        <div className="w-full bg-black bg-opacity-60">
          <ContainerMedium>
            <div className="content-poster-home " data-aos="fade-up">
              <h3 className="font-semibold text-3xl text-lightApricotSalmon">
                Precisa de orientação jurídica?
              </h3>
              <p className="text-center font-semibold text-xl text-white">
                Aqui em nosso escritório, adotamos uma abordagem moderna na
                gestão e interação com o cliente, focando na criação e
                fornecimento de soluções jurídicas.
              </p>
              <ButtonWhatsapp />
            </div>
          </ContainerMedium>
        </div>
      </section>
      <span id="ref-resumo-sobre" />
    </>
  );
}

export default PosterHome;
