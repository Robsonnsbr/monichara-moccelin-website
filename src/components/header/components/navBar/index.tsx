'use client';
import React from 'react';
import './style/navBar.css';
import MenuTropDownHamb from './components/DropdownMenuHamb';
import ActiveScrollLink from 'src/components/header/components/navBar/components/ActiveScrollLink';

function NavBar() {
  return (
    <nav className="class-navBar">
      <ul>
        <ActiveScrollLink />
      </ul>
      <div className="class-container-MenuTropDown">
        <MenuTropDownHamb />
      </div>
    </nav>
  );
}

export default NavBar;
