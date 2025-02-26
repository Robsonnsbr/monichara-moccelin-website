import React from 'react';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Main from 'src/components/common/Main';
import { FormSimple } from '../../components/contact/FormSimple';
import InfoContact from '../../components/contact/InfoContact';
import Title from 'src/components/common/title';
import { Metadata } from 'node_modules/next';

export const metadata: Metadata = {
  title: 'Contato'
};

function Contact() {
  return (
    <>
      <Main>
        <section className="global-section" id="section-contact">
          <ContainerMedium>
            <div className="w-full h-full flex flex-col">
              <Title title={'contato'} subTitle={'fale conosco'} />
              <ul className="flex flex-col md:flex-row gap-8">
                <li className="flex-1">
                  <FormSimple />
                </li>
                <li className="flex-1">
                  <InfoContact />
                </li>
              </ul>
            </div>
          </ContainerMedium>
        </section>
      </Main>
    </>
  );
}

export default Contact;
