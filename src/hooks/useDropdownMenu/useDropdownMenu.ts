import { useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const useDropdownMenu = (activeSection: string) => {
  const [isOverSection, setIsOverSection] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    function handleScroll() {
      setIsScrolling(true);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    }

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (activeSection && activeSection === 'list-services') {
      setIsOverSection(true);
    } else {
      setIsOverSection(false);
    }
  }, [activeSection]);

  const handleMenuMouseEnter = () => {
    if (!isScrolling) {
      onOpen();
    }
  };

  const handleMenuMouseLeave = () => {
    onClose();
  };

  return {
    handleMenuMouseEnter,
    handleMenuMouseLeave,
    onClose,
    isOverSection,
    isOpen
  };
};
