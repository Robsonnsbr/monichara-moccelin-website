import moniImage1 from 'public/assets/image/image-moni-1.jpg';
import moniImage3 from 'public/assets/image/image-moni-3.jpg';
import { RiCheckDoubleLine } from 'react-icons/ri';
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
            width={525}
            height={700}
            alt="image-monichara"
            src={moniImage1}
            placeholder="blur"
            loading="lazy"
            style={{
              width: 'auto',
              height: 'auto',
              maxHeight: 600
            }}
          />
        </div>
        <div
          className="flex-1 flex flex-col gap-5 text-justify"
          data-aos="fade-up-right"
        >
          <h3 className="text-3xl font-bold text-center mt-10 lg:mt-0">
            Sobre o escritório
          </h3>
          <p className="italic">
            Há mais de 5 anos, a Doutora Monichara Moccelin embarcou em uma
            jornada extraordinária na advocacia, estabelecendo uma carreira
            notável que se tornaria referência no meio jurídico. Sua trajetória
            é marcada por uma dedicação incansável ao serviço dos clientes.
          </p>
          <p className="italic">
            Ao longo desse período, a Dra. Monichara construiu uma equipe
            excepcional, composta por profissionais altamente qualificados,
            dedicados e em constante busca por atualização.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />
              <h4>Excelente infraestrutura.</h4>
            </li>
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />

              <h4>Segurança jurídica.</h4>
            </li>
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />
              <h4 className="text-left">
                Assessoramento consultivo preventivo e contencioso.
              </h4>
            </li>
          </ul>
          <p className="text-pretty">
            Atuamos com uma equipe integrada, preocupada em compreender o
            ambiente do cliente, o que nos permite enxergar além das
            necessidades, antecipando cenários complexos e tornando negócios
            possíveis.
          </p>
        </div>
      </div>
      <div className="lg:flex flex-row lg:gap-4 m-auto">
        <div
          className="flex flex-1 justify-center md:justify-start"
          data-aos="fade-up-right"
        >
          <Image
            width={525}
            height={700}
            alt="image-monichara"
            src={moniImage3}
            placeholder="blur"
            loading="lazy"
            style={{ width: 'auto', height: 'auto', maxHeight: 600 }}
          />
        </div>
        <div
          className="flex-1 flex flex-col gap-5 text-justify mt-10 lg:mt-0"
          data-aos="fade-up-left"
        >
          <h3 className="text-3xl font-bold text-center mt-10 md:mt-0 text-balance">
            Nossos sócios MONICHARA M. MOCCELIN
          </h3>
          <p className="italic">
            Há mais de 5 anos, a Doutora Monichara Moccelin embarcou em uma
            jornada extraordinária na advocacia, estabelecendo uma carreira
            notável que se tornaria referência no meio jurídico. Sua trajetória
            é marcada por uma dedicação incansável ao serviço dos clientes.
          </p>
          <p className="italic">
            Ao longo desse período, a Dra. Monichara construiu uma equipe
            excepcional, composta por profissionais altamente qualificados,
            dedicados e em constante busca por atualização.
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />
              <h4>Excelente infraestrutura.</h4>
            </li>
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />

              <h4>Segurança jurídica.</h4>
            </li>
            <li className="flex flex-row gap-1">
              <RiCheckDoubleLine className="text-lightApricotSalmon" />
              <h4 className="text-left">
                Assessoramento consultivo preventivo e contencioso.
              </h4>
            </li>
          </ul>
          <p className="text-pretty">
            Atuamos com uma equipe integrada, preocupada em compreender o
            ambiente do cliente, o que nos permite enxergar além das
            necessidades, antecipando cenários complexos e tornando negócios
            possíveis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSummaryInfo;
