'use client';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import ActiveLink from 'src/components/common/ActiveLink';

import { Link as ScrollLink } from 'react-scroll';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { useScrollContext } from 'src/contexts/refs';
import Link from 'next/link';
import DropdownMenuMobile from './DropdownMenuMobile';
import { useOutsideEvents } from 'src/hooks';

const DropdownMenuHamb = () => {
  const pathName = usePathname();
  const isHome = pathName === '/';
  const [activeSection, setActiveSection] = useState('top-home');
  const {
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  } = useScrollContext();

  const { isOpen, onToggle, onClose } = useDisclosure();

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

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  ]);

  const menuHamb = useRef<HTMLDivElement>(null);

  useOutsideEvents(menuHamb, () => {
    onClose();
  });

  return (
    <Menu isOpen={isOpen}>
      <MenuButton
        as={IconButton}
        background={'transparent'}
        textShadow="1px 1px 1px #000"
        color="white"
        _hover={{ backgroundColor: false }}
        _active={{
          color: 'var(--lightApricotSalmon)',
          border: 'none'
        }}
        onClick={onToggle}
        border="none"
        width={'50px'}
        height={'50px'}
        fontSize={16}
        fontFamily="var(--font-open-sans)"
        fontWeight={600}
        icon={<RxHamburgerMenu className="size-12" />}
      />
      <Portal>
        <div ref={menuHamb}>
          <MenuList
            zIndex={50}
            borderRadius={4}
            padding={2}
            background={'var(--whiteSnow)'}
            fontWeight={600}
          >
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              {isHome ? (
                <ScrollLink
                  to="top-home"
                  href={'/#topHome'}
                  rel="nofollow"
                  smooth={true}
                  duration={800}
                  className="group  w-full h-full"
                  onClick={onToggle}
                >
                  <p
                    className={`p-2 ${
                      activeSection === 'top-home'
                        ? 'text-lightApricotSalmon'
                        : 'text-deepIndigoBlue/90'
                    }`}
                  >
                    Home
                  </p>
                </ScrollLink>
              ) : (
                <Link
                  className="group w-full h-full"
                  href={'/'}
                  target="_self"
                  rel="nofollow"
                  onClick={onToggle}
                >
                  <p className="p-2">Home</p>
                </Link>
              )}
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              {isHome ? (
                <ScrollLink
                  to="resumo-sobre"
                  href={'/#resumo-sobre'}
                  rel="nofollow"
                  smooth={true}
                  duration={800}
                  className="group  w-full h-full"
                  onClick={onToggle}
                >
                  <p
                    className={`p-2 ${
                      activeSection === 'resumo-sobre'
                        ? 'text-lightApricotSalmon'
                        : 'text-deepIndigoBlue'
                    }`}
                  >
                    Sobre
                  </p>
                </ScrollLink>
              ) : (
                <Link
                  href={'/#resumo-sobre'}
                  target="_self"
                  rel="nofollow"
                  className="group  w-full h-full"
                  onClick={onToggle}
                >
                  <p className="p-2 ">Sobre</p>
                </Link>
              )}
            </MenuItem>

            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/noticias'} onClick={onToggle}>
                Notícias
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/contato'} onClick={onToggle}>
                Contato
              </ActiveLink>
            </MenuItem>
            <div className="group w-full h-full flex hover:bg-lightBlueGray rounded-md">
              <DropdownMenuMobile
                activeSection={activeSection}
                onToggleParent={onToggle}
              />
            </div>
          </MenuList>
        </div>
      </Portal>
    </Menu>
  );
};

export default DropdownMenuHamb;
