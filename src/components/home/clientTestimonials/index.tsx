'use client';
import React, { useEffect, useRef } from 'react';
import './testimonials.css';
// import ContainerMedium from 'src/components/common/container/ContainerMedium';
// import { FcGoogle } from 'react-icons/fc';
import { useScrollContext } from 'src/contexts/refs';
// import ListTestimonials from './ListTestimonials';
// import ButtonClickHere from 'src/components/common/Button/ButtonClickHere';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import TaggBoxWidget from './TaggBoxWidget';

// import ElfSightWidget from './ElfSightWidget';

function Testimonials() {
  const { updateSectionTestimonialsHomeRef } = useScrollContext();
  const sectionTestimonialsHome = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionTestimonialsHome.current) {
      updateSectionTestimonialsHomeRef(sectionTestimonialsHome.current);
    }
  }, [updateSectionTestimonialsHomeRef]);
  return (
    <section
      className="background-testimonials-home"
      ref={sectionTestimonialsHome}
      id="testimonials-home"
    >
      <ContainerMedium className="min-h-fit p-10">
        {/* <ElfSightWidget /> */}
        <TaggBoxWidget />
      </ContainerMedium>
      {/* <div className="w-full h-fit bg-black bg-opacity-60 py-16">
        <ContainerMedium>
          <div className="content-testimonials-home pb-4">
            <FcGoogle className="size-10 animate-bounce" />
            <div className="font-normal text-lg flex flex-col sm:flex-row gap-2 text-balance text-center">
              <p className="text-white">
                A opinião de nossos clientes sobre nós.
                <ButtonClickHere
                  className="text-white active:text-white text-lg px-1 m-auto"
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                />
                para ver mais.
              </p>
            </div>
          </div>
          <ListTestimonials />
        </ContainerMedium>
      </div> */}
    </section>
  );
}

export default Testimonials;
