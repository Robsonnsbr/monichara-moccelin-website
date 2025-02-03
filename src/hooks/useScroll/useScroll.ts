import { useEffect } from 'react';

interface ScrollCallback {
  (...args: any[]): void;
}

type UseScroll = (callback: ScrollCallback) => void;

export const useScroll: UseScroll = (callback) => {
  useEffect(() => {
    const handleScroll = () => {
      callback();
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [callback]);
};
