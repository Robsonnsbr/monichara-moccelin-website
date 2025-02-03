import React from 'react';
import Main from 'src/components/common/Main';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Title from 'src/components/common/title';

function About() {
  return (
    <Main>
      <section className="global-section" id="section-about">
        <ContainerMedium>
          <div className="w-full flex flex-col">
            <Title title="Sobre" subTitle="Monichara moccelin" />

            <ul className="flex flex-col gap-14">
              <li>
                <div className="lg:flex flex-row lg:gap-4 m-auto">
                  <div className="flex flex-1 justify-center">IMAGE</div>
                  <div className="flex-1 flex flex-col gap-5 text-justify">
                    more information
                  </div>
                </div>
              </li>
              <li>
                <div className="lg:flex flex-row lg:gap-4 m-auto">
                  <div className="flex flex-1 order-1 lg:order-2 justify-center md:justify-end">
                    IMAGE
                  </div>
                  <div className="flex-1 text-justify pl-11">
                    more information
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </ContainerMedium>
      </section>
    </Main>
  );
}

export default About;
