'use client';
import React, { useEffect, useRef } from 'react';
import SquareBoxLink from '../topHome/SquareBoxLink';

import { PiListMagnifyingGlassFill } from 'react-icons/pi';
import { TbHomeRibbon } from 'react-icons/tb';
import { MdAddHomeWork } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { BiSolidBadgeDollar } from 'react-icons/bi';
import { GiMedicalPack } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa6';
import { TbUsersPlus } from 'react-icons/tb';

import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { useScrollContext } from 'src/contexts/refs';
import './listServicesHome.css';
import Title from 'src/components/common/title';

import { ContainerIconListServices } from './ContainerIconListServices';

function ListServices() {
  const { updateSectionListServicesRef } = useScrollContext();
  const sectionListServices = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionListServices.current) {
      updateSectionListServicesRef(sectionListServices.current);
    }
  }, [updateSectionListServicesRef]);

  return (
    <section
      className="global-section"
      ref={sectionListServices}
      id="list-services"
    >
      <ContainerMedium
        id="container-listServices"
        data-aos="fade-left"
        data-aos-offset="0"
      >
        <Title title={''} subTitle={'NOSSOS SERVIÇOS'} />
        <ul className="listServices">
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/assessoria-empresarial"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <MdBusinessCenter className="primary-icon-squareBoxLink" />
              </ContainerIconListServices>

              <p className="title-squareBoxLink">Assessoria Empresarial</p>
              <p className="resume-squareBoxLink">
                Assessoria jurídica para empresas, visando evitar conflitos e
                minimizando riscos
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/consultorios-clinicas"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <MdAddHomeWork className="primary-icon-squareBoxLink p-1" />
              </ContainerIconListServices>
              <p className="title-squareBoxLink">Consultórios e Clínicas</p>
              <p className="resume-squareBoxLink">
                O Direito Imobiliário estabelece regras entre as relações de
                propriedade; envolvendo questões relativas a aquisição e a perda
                de propriedade, defeitos e vícios de construção, locação,
                doações, usucapião, incorporações imobiliárias, direito de
                construir e vizinhança, regularização de imóveis.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/consultoria-jurídica-empresarial"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <FaHandshake className="primary-icon-squareBoxLink" />
              </ContainerIconListServices>
              <p className="title-squareBoxLink">Contratos</p>
              <p className="resume-squareBoxLink">
                O Direito Imobiliário estabelece regras entre as relações de
                propriedade; envolvendo questões relativas a aquisição e a perda
                de propriedade, defeitos e vícios de construção, locação,
                doações, usucapião, incorporações imobiliárias, direito de
                construir e vizinhança, regularização de imóveis.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/imobiliario"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <TbHomeRibbon className="primary-icon-squareBoxLink" />
              </ContainerIconListServices>
              <p className="title-squareBoxLink">Imobiliário</p>
              <p className="resume-squareBoxLink">
                O Direito Imobiliário estabelece regras entre as relações de
                propriedade; envolvendo questões relativas a aquisição e a perda
                de propriedade, defeitos e vícios de construção, locação,
                doações, usucapião, incorporações imobiliárias, direito de
                construir e vizinhança, regularização de imóveis.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/indenizacoes"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <BiSolidBadgeDollar className="primary-icon-squareBoxLink" />
              </ContainerIconListServices>

              <p className="title-squareBoxLink">Indenizações</p>
              <p className="resume-squareBoxLink">
                Orientação jurídica para o planejamento sucessório e resolução
                de questões relativas a inventários judicial e extrajudicial,
                arrolamento de bens, petição de herança e assuntos que envolvam
                o direito de herança. Nesse momento tão delicado auxiliamos
                nossos clientes de forma humanizada, para minimizar conflitos
                familiares.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/profissionais-saude"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <GiMedicalPack className="primary-icon-squareBoxLink p-1" />
              </ContainerIconListServices>

              <p className="title-squareBoxLink">Profissionais da Saúde</p>
              <p className="resume-squareBoxLink">
                Um recurso vital para profissionais da saúde, englobando
                médicos, dentistas e demais atuantes, assim como para
                consultórios e clínicas, que almejam assegurar uma base sólida
                de segurança jurídica no âmbito cotidiano do exercício
                profissional.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
          <li data-aos="flip-left">
            <SquareBoxLink
              href="/especialidades/usuarios-plano-de-saude"
              className="squareBoxLink-listServices"
            >
              <ContainerIconListServices>
                <TbUsersPlus className="primary-icon-squareBoxLink p-1" />
              </ContainerIconListServices>

              <p className="title-squareBoxLink">Usuários de Plano de Saúde</p>
              <p className="resume-squareBoxLink">
                Um recurso vital para profissionais da saúde, englobando
                médicos, dentistas e demais atuantes, assim como para
                consultórios e clínicas, que almejam assegurar uma base sólida
                de segurança jurídica no âmbito cotidiano do exercício
                profissional.
              </p>
              <PiListMagnifyingGlassFill className="secondary-icon-squareBoxLink" />
            </SquareBoxLink>
          </li>
        </ul>
      </ContainerMedium>
    </section>
  );
}

export default ListServices;
