import { useState } from 'react';
import { useScroll } from '../../hooks/useScroll/useScroll';

export const useScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  useScroll(handleScroll);

  return {
    isVisible
  };
};
