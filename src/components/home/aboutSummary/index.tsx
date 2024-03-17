'use client';
import React, { useEffect, useRef } from 'react';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import { useScrollContext } from 'src/contexts/refs';
import { usePathname } from 'next/navigation';
import ButtonClickHere from 'src/components/common/Button/ButtonClickHere';
import AboutFeaturesInfo from '../../about/AboutFeaturesInfo';
import AboutSummaryInfo from '../../about/AboutSummaryInfo';

function AboutSummary() {
  const pathName = usePathname();
  const isActive = pathName === '/About';

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
      <section id="section-about-features" className="pb-16">
        <ContainerMedium>
          <AboutFeaturesInfo />
          <div
            className={
              isActive
                ? 'hidden'
                : 'flex flex-row items-center justify-center pt-8'
            }
          >
            <p className="pl-2 text-balance text-center text-lg">
              <ButtonClickHere
                className="text-deepIndigoBlue text-lg pr-1"
                href="sobre"
                target="_self"
                rel="noopener noreferrer"
              />
              para saber mais sobre a Dra.
              <strong> Monichara Moccelin.</strong>
            </p>
          </div>
        </ContainerMedium>
      </section>
    </>
  );
}

export default AboutSummary;
