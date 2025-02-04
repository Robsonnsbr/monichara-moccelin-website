'use client';
import { Menu, MenuButton, MenuList, MenuItem, Portal } from '@chakra-ui/react';

import { PiCaretDownDuotone, PiCaretUpDuotone } from 'react-icons/pi';

import ActiveLink from 'src/components/common/ActiveLink';
import { useDropdownMenu } from 'src/hooks';

const DropdownMenu = ({ activeSection }: { activeSection: string }) => {
  const {
    handleMenuMouseEnter,
    handleMenuMouseLeave,
    onClose,
    isOpen,
    isOverSection
  } = useDropdownMenu(activeSection);
  return (
    <Menu isOpen={isOpen} onClose={onClose}>
      <MenuButton
        letterSpacing={1}
        _hover={{ textColor: 'var(--lightApricotSalmon)' }}
        _active={{ textColor: 'var(--lightApricotSalmon)' }}
        onMouseEnter={handleMenuMouseEnter}
        onMouseLeave={handleMenuMouseLeave}
        fontSize={16}
        fontFamily="var(--font-open-sans)"
        whiteSpace={'nowrap'}
        width="100%"
        backgroundColor={'transparent'}
        padding={'8px'}
        position="relative"
        textAlign="left"
        className={`${isOverSection ? ' text-lightApricotSalmon' : 'text-white'}`}
      >
        <span className="flex flex-row text-nowrap font-openSans">
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
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
          width="fit-content"
          position="absolute"
          padding={2}
          background={'var(--whiteSnow)'}
          left="0"
          top="-8px"
          onClick={handleMenuMouseLeave}
          className="font-semibold"
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
  );
};

export default DropdownMenu;
