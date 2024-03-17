import { useState, useCallback } from 'react';
import { useScrollContext } from 'src/contexts/refs';
import { useScroll } from '../useScroll/useScroll';

export const useRefSection = () => {
  const {
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  } = useScrollContext();
  const [activeSection, setActiveSection] = useState<string>('top-home');

  const listSections = useCallback(() => {
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
    return sections;
  }, [
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  ]);

  const sections = listSections();

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

  useScroll(handleScroll);

  return {
    activeSection
  };
};

// TODO: verify performance and remove fn collection
/*
import { useState, useEffect } from 'react';
import { useScrollContext } from 'src/contexts/refs';
export const useRefSection = () => {
  const {
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionAboutSummaryRef,
    sectionTestimonialsHomeRef
  } = useScrollContext();
  const [activeSection, setActiveSection] = useState<string>('top-home');

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

  return {
    activeSection
  };
};

*/
