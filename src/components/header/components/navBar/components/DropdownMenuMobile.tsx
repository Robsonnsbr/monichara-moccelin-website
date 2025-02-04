'use client';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Portal,
  useDisclosure
} from '@chakra-ui/react';

import { PiCaretDownDuotone, PiCaretUpDuotone } from 'react-icons/pi';

import ActiveLink from 'src/components/common/ActiveLink';
import { useEffect, useRef, useState } from 'react';
import { useOutsideEvents } from 'src/hooks';

const DropdownMenuMobile = ({
  activeSection,
  onToggleParent
}: {
  activeSection: string;
  onToggleParent: () => void;
}) => {
  const [isOverSection, setIsOverSection] = useState(false);
  const { isOpen, onToggle, onClose } = useDisclosure();

  useEffect(() => {
    if (activeSection && activeSection === 'list-services') {
      setIsOverSection(true);
    } else {
      setIsOverSection(false);
    }
  }, [activeSection]);

  const menuChildren = useRef<HTMLDivElement>(null);

  useOutsideEvents(menuChildren, onClose);

  return (
    <div ref={menuChildren} className="w-full">
      <Menu isOpen={isOpen} onClose={onToggle}>
        <MenuButton
          onClick={onToggle}
          letterSpacing={1}
          _hover={{ textColor: 'var(--lightApricotSalmon)' }}
          _active={{ textColor: 'var(--lightApricotSalmon)' }}
          fontSize={16}
          fontFamily="var(--font-open-sans)"
          whiteSpace={'nowrap'}
          width="100%"
          backgroundColor={'transparent'}
          padding={'8px'}
          position="relative"
          textAlign="left"
          className={`${isOverSection ? ' text-lightApricotSalmon' : ' text-deepIndigoBlue'}`}
        >
          <span className="flex flex-row text-nowrap  font-openSans">
            Especialidades
            {isOpen ? (
              <PiCaretDownDuotone className="size-6 -mr-1" />
            ) : (
              <PiCaretUpDuotone className="size-6 -mr-1" />
            )}
          </span>
        </MenuButton>

        <Portal>
          <MenuList
            zIndex={50}
            borderRadius={5}
            width="fit-content"
            position="absolute"
            padding={2}
            background={'var(--whiteSnow)'}
            left="-10px"
            top="-10px"
            className="font-semibold"
            onClick={() => {
              onToggle();
              onToggleParent();
            }}
          >
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/assessoria-empresarial'}>
                Assessoria Empresarial
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/consultorios-clinicas'}>
                Consultórios e Clínicas
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/contratos'}>
                Contratos
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/indenizacoes'}>
                Indenizações
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/profissionais-saude'}>
                Profissionais da Saúde
              </ActiveLink>
            </MenuItem>
            <MenuItem
              className="rounded-md"
              padding={0}
              background="var(--whiteSnow)"
              _hover={{ background: 'var(--lightBlueGray)' }}
            >
              <ActiveLink href={'/especialidades/usuarios-plano-saude'}>
                Usuários de Plano de Saúde
              </ActiveLink>
            </MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </div>
  );
};

export default DropdownMenuMobile;
