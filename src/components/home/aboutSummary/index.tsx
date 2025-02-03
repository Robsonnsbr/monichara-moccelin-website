'use client';
import React, { useEffect, useRef } from 'react';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { useScrollContext } from 'src/contexts/refs';

import AboutSummaryInfo from '../../about/AboutSummaryInfo';

function AboutSummary() {
  const { updateAboutSummaryRef } = useScrollContext();
  const sectionAboutSummary = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionAboutSummary.current) {
      updateAboutSummaryRef(sectionAboutSummary.current);
    }
  }, [updateAboutSummaryRef]);

  return (
    <>
      <section
        ref={sectionAboutSummary}
        id="resumo-sobre"
        className="global-section"
      >
        <ContainerMedium>
          <AboutSummaryInfo />
        </ContainerMedium>
      </section>
    </>
  );
}

export default AboutSummary;
