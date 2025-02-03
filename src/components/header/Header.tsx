import React from 'react';
import './style/contentHeader.css';
import NavBar from './components/navBar';
import Logo from '../common/Logo';
import Link from 'next/link';
import ContainerMedium from '../common/container/ContainerMedium';
import ButtonWhatsapp from '../common/Button/ButtonWhatsapp';

function Header() {
  return (
    <header className="global-height-header class-header" id="top-header">
      <ContainerMedium id="container-header">
        <div className="contentHeader">
          <Link href="/">
            <Logo width={140} height={60} logoWhite={true} />
          </Link>
          <div className="order-3 md:order-2">
            <NavBar />
          </div>
          <div className="order-2 md:order-3">
            <ButtonWhatsapp />
          </div>
        </div>
      </ContainerMedium>
    </header>
  );
}

export default Header;
