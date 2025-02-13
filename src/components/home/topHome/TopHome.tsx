'use client';
import React, { useEffect, useRef } from 'react';
import './style/topHome.css';
import Logo from '../../common/Logo';
import ContainerMedium from '../../common/container/ContainerMedium';
import SquareBoxLink from './SquareBoxLink';
import { MdAddChart } from 'react-icons/md';
import { FaRegAddressCard } from 'react-icons/fa';
import { FaRegNewspaper } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { useScrollContext } from 'src/contexts/refs';
import SquareBoxLinkScrollLink from './SquareBoxLinkScrollLink';
import { TemplateTopHome } from 'src/app/template';

function TopHome() {
  const { updateSectionTopHomeRef } = useScrollContext();
  const sectionTopHome = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionTopHome.current) {
      updateSectionTopHomeRef(sectionTopHome.current);
    }
  }, [updateSectionTopHomeRef]);

  return (
    <section className="background-top-home" ref={sectionTopHome} id="top-home">
      <div className="content-bg-top-home">
        <ContainerMedium>
          <TemplateTopHome>
            <div className="content-info-top-home">
              <Logo width={461} height={195} logoWhite={false} />
              <h1 className="text-2xl font-normal font-poppins text-balance text-center text-deepIndigoBlue my-10">
                Advocacia atual e humanizada, especialista em prevenir e
                solucionar conflitos.
              </h1>
            </div>
            <div className="container-squareBoxLink" data-aos="zoom-in-down">
              <SquareBoxLinkScrollLink
                className="squareBoxLink"
                to="list-services"
                href={'list-services'}
                smooth={true}
                duration={800}
                rel="nofollow"
              >
                <MdAddChart size={36} />
                <p className="text-white">Especialidades</p>
              </SquareBoxLinkScrollLink>
              <SquareBoxLinkScrollLink
                className="squareBoxLink"
                to="resumo-sobre"
                href={'resumo-sobre'}
                rel="nofollow"
                smooth={true}
                duration={800}
              >
                <FaRegAddressCard size={36} />
                <p className="text-white">Sobre</p>
              </SquareBoxLinkScrollLink>
              <SquareBoxLink href="/noticias" className="squareBoxLink">
                <FaRegNewspaper size={36} />
                <p className="text-white">Notícias</p>
              </SquareBoxLink>
              <SquareBoxLink href="/contato" className="squareBoxLink">
                <MdContactMail size={36} />
                <p className="text-white">Contato</p>
              </SquareBoxLink>
            </div>
          </TemplateTopHome>
        </ContainerMedium>
      </div>
    </section>
  );
}

export default TopHome;
