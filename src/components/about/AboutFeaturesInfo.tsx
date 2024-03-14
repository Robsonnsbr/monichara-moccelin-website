import Image from 'next/image';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import moniImage2 from 'public/assets/image/image-moni-2.jpg';

function AboutFeaturesInfo() {
  return (
    <div className="lg:flex flex-row lg:gap-4 m-auto" data-aos="fade-up-left">
      <div className="flex flex-1 order-1 lg:order-2 justify-center md:justify-end">
        <Image
          width={525}
          height={700}
          placeholder="blur"
          loading="lazy"
          alt="image-monichara"
          src={moniImage2}
          style={{ width: 'auto', height: 'auto', maxHeight: 600 }}
        />
      </div>
      <div className="flex-1 text-justify pl-11" data-aos="fade-up-right">
        <div className="relative mt-10 lg:mt-0">
          <FaArrowRightFromBracket className="absolute size-8 -translate-x-11  text-lightApricotSalmon" />
          <h4 className="text-xl font-bold text-lightApricotSalmon">
            Atendimento personalizado
          </h4>
          <p className="text-left sm:text-justify">
            Durante o processo, o cliente será atendido pelo advogado
            responsável pelo caso, na qual cada demanda é avaliada e apresentada
            à solução mais adequada, possibilitando assim, maior possibilidade
            de êxito.
          </p>
        </div>
        <div className="relative mt-10">
          <FaArrowRightFromBracket className="absolute size-8 -translate-x-11 text-lightApricotSalmon" />
          <h4 className="text-xl font-bold text-lightApricotSalmon">
            Relacionamento sólido
          </h4>
          <p className="text-left sm:text-justify">
            Com base em princípios éticos e morais, buscamos constantemente a
            excelência na prestação de serviços advocatícios, desenvolvendo um
            bom relacionamento em nosso atendimento, demonstrando
            profissionalismo, transparência e retidão nas condutas.t
          </p>
        </div>
        <div className="relative mt-10">
          <FaArrowRightFromBracket className="absolute size-8 -translate-x-11 text-lightApricotSalmon" />
          <h4 className="text-xl font-bold text-lightApricotSalmon">
            Resultados
          </h4>
          <p className="text-left sm:text-justify">
            Com uma equipe de advogados especializados, desenvolvemos soluções
            efetivas para cada cliente. Com base nisso, o escritório BELESKI DE
            CARVALHO já conquistou muitas vitórias para seus clientes.
          </p>
        </div>
        <div className="relative mt-10">
          <FaArrowRightFromBracket className="absolute size-8 -translate-x-11 text-lightApricotSalmon" />
          <h4 className="text-xl font-bold text-lightApricotSalmon">
            Tecnologia
          </h4>
          <p className="text-left sm:text-justify">
            Nosso escritório está alinhado com a nova maneira de se comunicar e
            com a finalidade de trazer maior rapidez e praticidade aos seus
            clientes a possibilidade de escolher qual canal de atendimento para
            fazer contato conosco: WhatsApp, videoconferência, chats on-lines,
            telefone. Além disto, permite aos seus clientes acesso imediato e
            rápida as informações relativas a seu processo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutFeaturesInfo;
