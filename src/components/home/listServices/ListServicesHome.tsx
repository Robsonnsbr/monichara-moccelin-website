'use client';
import React, { useEffect, useRef } from 'react';

import './listServicesHome.css';
import { MdAddHomeWork } from 'react-icons/md';
import { MdBusinessCenter } from 'react-icons/md';
import { BiSolidBadgeDollar } from 'react-icons/bi';
import { GiMedicalPack } from 'react-icons/gi';
import { FaHandshake } from 'react-icons/fa6';
import { TbUsersPlus } from 'react-icons/tb';
import SquareBoxLink from '../topHome/SquareBoxLink';
import Title from 'src/components/common/title';

import { useScrollContext } from 'src/contexts/refs';

import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { ContainerIconListServices } from './ContainerIconListServices';

import { data } from 'src/data/specialtiesContentData';

const icons = [
  MdBusinessCenter,
  FaHandshake,
  MdAddHomeWork,
  GiMedicalPack,
  TbUsersPlus,
  BiSolidBadgeDollar
];

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
          {data.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <li data-aos="flip-left" key={index}>
                <SquareBoxLink
                  href={`especialidades/${item.slug}`}
                  className="squareBoxLink-listServices"
                >
                  <ContainerIconListServices>
                    <Icon className="primary-icon-squareBoxLink" />
                  </ContainerIconListServices>

                  <p className="title-squareBoxLink">{item.category}</p>
                  <p className="resume-squareBoxLink">{item.description}</p>
                </SquareBoxLink>
              </li>
            );
          })}
        </ul>
      </ContainerMedium>
    </section>
  );
}

export default ListServices;
