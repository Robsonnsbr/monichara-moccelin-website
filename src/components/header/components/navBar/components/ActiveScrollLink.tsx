'use client';
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { useScrollContext } from 'src/contexts/refs';
import { usePathname } from 'next/navigation';
import MenuTropDownNav from './DropdownMenu';

const ActiveScrollLink = () => {
  const {
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  } = useScrollContext();
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [activeSection, setActiveSection] = useState('top-home');

  useEffect(() => {
    const sections = [
      { ref: sectionTopHomeRef, offset: 0, name: 'top-home' },
      { ref: sectionListServicesRef, offset: -400, name: 'list-services' },
      {
        ref: sectionAboutSummaryRef,
        offset: -400,
        name: 'resumo-sobre'
      },
      {
        ref: sectionTestimonialsHomeRef,
        offset: -400,
        name: 'testimonials-home'
      }
    ];

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { ref, offset, name } = sections[i];
        if (ref.current && scrollTop >= ref.current.offsetTop + offset) {
          setActiveSection(name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  ]);

  return (
    <>
      <li>
        {isHome ? (
          <ScrollLink
            to="top-home"
            href={'topHome'}
            smooth={true}
            duration={800}
            className="group"
          >
            <p
              className={` class-link ${
                activeSection === 'top-home' ? 'text-lightApricotSalmon' : ''
              }`}
            >
              Home
            </p>
          </ScrollLink>
        ) : (
          <Link className="group" href={'/'} target="_self">
            <p className="class-link"> Home</p>
          </Link>
        )}
      </li>
      <li>
        <MenuTropDownNav activeSection={activeSection} />
      </li>
      <li>
        {isHome ? (
          <ScrollLink
            to="resumo-sobre"
            href={'resumo-sobre'}
            smooth={true}
            duration={800}
            className="group"
          >
            <p
              className={` class-link ${
                activeSection === 'resumo-sobre'
                  ? 'text-lightApricotSalmon'
                  : ''
              }`}
            >
              Sobre
            </p>
          </ScrollLink>
        ) : (
          <Link
            // href='/#resumo-sobre'
            href="/#ref-resumo-sobre"
            // target="_self"
            className="group"
          >
            <p className="class-link">Sobre</p>
          </Link>
        )}
      </li>
      <li>
        <Link href="/noticias" target="_self" className="group">
          <p
            className={`class-link ${pathName === '/noticias' ? 'text-lightApricotSalmon' : ''}`}
          >
            Notícias
          </p>
        </Link>
      </li>
      <li>
        <Link href="/contato" target="_self" className="group">
          <p
            className={`class-link ${pathName === '/contato' ? 'text-lightApricotSalmon' : ''}`}
          >
            Contato
          </p>
        </Link>
      </li>
    </>
  );
};

export default ActiveScrollLink;
