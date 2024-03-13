import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useRef
} from 'react';

interface ScrollContextProps {
  sectionAboutSummaryRef: React.RefObject<HTMLDivElement | null>;
  sectionTopHomeRef: React.RefObject<HTMLDivElement | null>;
  sectionListServicesRef: React.RefObject<HTMLDivElement | null>;
  sectionTestimonialsHomeRef: React.RefObject<HTMLDivElement | null>;
  sectionRef: React.RefObject<HTMLDivElement | null>;
  updateAboutSummaryRef: (ref: HTMLDivElement | null) => void;
  updateSectionTopHomeRef: (ref: HTMLDivElement | null) => void;
  updateSectionListServicesRef: (ref: HTMLDivElement | null) => void;
  updateSectionTestimonialsHomeRef: (ref: HTMLDivElement | null) => void;
  updateSectionRef: (ref: HTMLDivElement | null) => void;
}

const ScrollContext = createContext<ScrollContextProps | null>(null);

interface ScrollProviderProps {
  children: ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const sectionAboutSummaryRef = useRef<HTMLDivElement | null>(null);
  const sectionTopHomeRef = useRef<HTMLDivElement | null>(null);
  const sectionListServicesRef = useRef<HTMLDivElement | null>(null);
  const sectionTestimonialsHomeRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const updateAboutSummaryRef = useCallback((ref: HTMLDivElement | null) => {
    sectionAboutSummaryRef.current = ref;
  }, []);

  const updateSectionTopHomeRef = useCallback((ref: HTMLDivElement | null) => {
    sectionTopHomeRef.current = ref;
  }, []);

  const updateSectionListServicesRef = useCallback(
    (ref: HTMLDivElement | null) => {
      sectionListServicesRef.current = ref;
    },
    []
  );
  const updateSectionTestimonialsHomeRef = useCallback(
    (ref: HTMLDivElement | null) => {
      sectionTestimonialsHomeRef.current = ref;
    },
    []
  );
  const updateSectionRef = useCallback((ref: HTMLDivElement | null) => {
    sectionTestimonialsHomeRef.current = ref;
  }, []);

  const contextValue: ScrollContextProps = {
    sectionAboutSummaryRef,
    sectionTopHomeRef,
    sectionListServicesRef,
    sectionTestimonialsHomeRef,
    sectionRef,
    updateAboutSummaryRef,
    updateSectionTopHomeRef,
    updateSectionListServicesRef,
    updateSectionTestimonialsHomeRef,
    updateSectionRef
  };

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = (): ScrollContextProps => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error(
      'useScrollContext deve ser usado dentro de um ScrollProvider'
    );
  }
  return context;
};
