'use client';

import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MenuTropDownNav from './DropdownMenu';
import { useRefSection } from 'src/hooks';

const ActiveScrollLink = () => {
  const { activeSection } = useRefSection();
  const pathName = usePathname();
  const isHome = pathName === '/';

  return (
    <>
      <li>
        {isHome ? (
          <ScrollLink
            to="top-home"
            href={'/#topHome'}
            smooth={true}
            duration={800}
            className="group"
            rel="nofollow"
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
            href={'/#resumo-sobre'}
            rel="nofollow"
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
            href="/#ref-resumo-sobre"
            target="_self"
            rel="nofollow"
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
