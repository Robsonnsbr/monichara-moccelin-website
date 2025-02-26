import Template from 'src/app/template';
import Main from 'src/components/common/Main';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Title from 'src/components/common/title';
import SpecialtyContent from 'src/components/specialties/content';
import { data } from 'src/data/specialtiesContentData'; // Importando os dados diretamente

import { Metadata } from 'node_modules/next';

export const metadata: Metadata = {
  title: 'Especialidades'
};

export default function Specialty({ params }: any) {
  const item = data.find((item) => params.pathNameSpecialty === item.slug);

  return (
    <Template>
      <Main>
        <section className="global-section">
          <ContainerMedium>
            {item ? (
              <>
                <Title title="Especialidades" subTitle={item.category} />
                <SpecialtyContent services={item.services} />
              </>
            ) : (
              <>
                <Title title="Especialidades" subTitle="sem dados" />
                <div>Categoria não encontrada</div>
              </>
            )}
          </ContainerMedium>
        </section>
      </Main>
    </Template>
  );
}
