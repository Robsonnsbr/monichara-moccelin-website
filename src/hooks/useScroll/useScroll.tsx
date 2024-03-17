import { useEffect } from 'react';

type ScrollCallback = () => void;

type UseScroll = (callback: ScrollCallback) => void;

export const useScroll: UseScroll = (callback) => {
  useEffect(() => {
    console.log('ativei');
    const handleScroll = () => {
      callback();
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};
