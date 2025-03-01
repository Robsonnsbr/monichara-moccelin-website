import moniImage1 from 'public/assets/image/image-moni-1.webp';
import Image from 'next/image';

function AboutSummaryInfo() {
  return (
    <div className="flex flex-col gap-20">
      <div className="lg:flex flex-row lg:gap-4 m-auto">
        <div
          className="flex flex-1 order-1 lg:order-2 justify-center md:justify-end"
          data-aos="fade-up-left"
        >
          <Image
            width={612}
            height={918}
            alt="image-monichara"
            src={moniImage1}
            placeholder="blur"
            loading="lazy"
            className="w-auto h-auto shadow-md rounded-md"
          />
        </div>
        <div
          className="flex-1 flex flex-col gap-7 text-justify"
          data-aos="fade-up-right"
        >
          <h3 className="text-3xl font-bold text-center mt-10 lg:mt-0">
            Monichara Moccelin
            <p className="text-sm">OAB/PR 112.291</p>
          </h3>
          <ul className="list-disc pl-7 space-y-6 italic font-openSans">
            <li>
              Bacharel em Direito pela Pontifícia Universidade Católica do
              Paraná (PUC-PR)
            </li>
            <li>
              Especialista em Direito Empresarial e Civil pela Pontifícia
              Universidade Católica do Paraná (PUC-PR)
            </li>
            <li>
              Especialista em Direito Médico e da Saúde pela Pontifícia
              Universidade Católica do Paraná (PUC-PR)
            </li>
            <li>
              Membro Relatora da Comissão de Juizados Especiais da Ordem dos
              Advogados do Brasil, Seccional do Paraná (2021-2024)
            </li>

            <li>
              Curso Contratos - Negociações Preliminares (Fundação Getúlio
              Vargas)
            </li>
            <li>
              Curso Introdução ao Direito Imobiliário (Fundação Getúlio Vargas)
            </li>
            <li>Curso Direito Médico e da Saúde - Osvaldo Simonelli</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutSummaryInfo;
