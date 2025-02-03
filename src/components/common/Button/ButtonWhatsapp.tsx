import React from 'react';
import ButtonLink from './ButtonLink';
import { getLink } from 'src/utils/getLinks';
import { FaWhatsapp } from 'react-icons/fa';

const linkWhatsappSecondary = await getLink('whatsappSecondary');

function ButtonWhatsapp() {
  return (
    <ButtonLink
      href={linkWhatsappSecondary}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-full border-2 sm:rounded-sm border-lightApricotSalmon text-xs sm:text-base sm:hover:bg-lightApricotSalmon active:bg-lightApricotSalmon sm:group-hover:text-deepIndigoBlue"
      classNameLink="p-2 sm:py-1 sm:px-6"
    >
      <FaWhatsapp className="text-white  animate-pulse size-7  sm:group-hover:text-deepIndigoBlue" />
      <p className="text-white flex font-extrabold tracking-widest text-nowrap  sm:group-hover:text-deepIndigoBlue">
        Fale conosco
      </p>
    </ButtonLink>
  );
}

export default ButtonWhatsapp;
