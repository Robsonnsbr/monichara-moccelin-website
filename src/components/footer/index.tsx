import React, { HTMLAttributes } from 'react';
import ContainerMedium from '../common/container/ContainerMedium';
import Logo from '../common/Logo';
import Image from 'next/image';
import moniInstagram from 'public/assets/image/moni-instagram.png';
import Link from 'next/link';
import LinkIconsFooter from './components/LinkIconsFooter';
import { getLink } from 'src/utils/getLinks';

const linkInstagram = await getLink('instagram');

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <footer
      {...rest}
      className="global-height-footer bg-deepIndigoBlue text-whiteSnow"
    >
      <section className="pt-16 pb-8  bg-noBlack border-t-8 border-t-lightApricotSalmon border-b border-b-mediumBlueGray">
        <ContainerMedium id="container-top-footer">
          <ul className="w-full flex flex-col md:grid grid-cols-3 justify-between">
            <li
              className="flex flex-col gap-4 items-center md:items-start"
              id="content-top-footer-contact"
            >
              <h3 className="text-2xl font-semibold text-white">
                MONICHARA MOCCELIN
                <span className="text-lightApricotSalmon">.</span>
              </h3>
              <div className="md:mb-7">
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Telefone/Whatsapp:</strong> &#40;41&#41; 99808-3760
                </p>
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Telefone/Whatsapp:</strong> &#40;41&#41; 99948-3760
                </p>
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>E-mail:</strong> monicharamoccelin.adv@gmail.com
                </p>
              </div>
              <LinkIconsFooter />
            </li>
            <li className="flex items-center justify-center">
              <Logo width={300} height={170} logoWhite={true} />
            </li>

            <li
              className="flex flex-col gap-4 items-center md:items-end"
              id="content-top-footer-contact"
            >
              <h3 className="text-2xl font-semibold text-white md:text-end">
                ATENDIMENTO
                <span className="text-lightApricotSalmon">.</span>
              </h3>
              <div className="flex flex-col md:items-end">
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Horário de Atendimento:</strong>
                </p>
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Segunda a Sexta:</strong>{' '}
                  <span className="text-xl">09:00 - 18:00</span>
                </p>
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Sábado:</strong> Fechado
                </p>
                <p className="text-lightApricotSalmon font-raleway">
                  <strong>Domingo:</strong> Fechado
                </p>
                <div className="flex max-w-60 self-center md:self-end mt-4 md:mt-0 rounded-md border-2 border-lightApricotSalmon/20 hover:border-lightApricotSalmon hover:scale-105 active:scale-100 active:border-white transition-all ease-linear duration-100">
                  <Link
                    href={linkInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                  >
                    <Image
                      src={moniInstagram}
                      width={300}
                      placeholder="blur"
                      loading="lazy"
                      alt="imagem-monichara-linkedIn"
                    />
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </ContainerMedium>
      </section>
      <section className="py-8 relative">
        <a
          href="/sitemap"
          target="_self"
          rel="noopener noreferrer"
          className="absolute bottom-2 left-5 font-openSans text-sm"
        >
          Mapa do Site
        </a>{' '}
        <ContainerMedium id="container-bottom-footer">
          <div className="w-full h-full grid grid-rows-2 gap-2 text-xs">
            <p className="text-center  text-white">
              ©Copyright <strong>Monichara Moccelin</strong>. Todos direitos
              reservados.
            </p>
            <p className="text-center text-white ">
              Este site é protegido pelo reCAPTCHA e está sujeito à{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Política de Privacidade
              </a>{' '}
              e aos{' '}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Termos de Serviço
              </a>{' '}
              do Google.
            </p>
          </div>
        </ContainerMedium>
      </section>
    </footer>
  );
};

export default Footer;
