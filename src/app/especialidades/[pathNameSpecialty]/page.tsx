import Template from 'src/app/template';
import Main from 'src/components/common/Main';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Title from 'src/components/common/title';
import { arrayContentSpecialties } from 'src/components/specialties';
import { convertPathName } from 'src/utils/convertPathName';
import { findContent } from 'src/utils/findContent';

const translationsParent = {
  indenizacoes: 'Indenizações',
  imobiliario: 'Imobiliário',
  'assessoria-empresarial': 'Assessoria Empresarial',
  'consultorios-clinicas': 'Consultórios e Clínicas',
  'consultoria-jurídica-empresarial': 'Consultoria jurídica empresarial',
  'profissionais-saude': 'Profissionais da saúde',
  'usuarios-plano-de-saude': 'Usuários de Plano de Saúde'
};

export default function Specialty({ params }: any) {
  const pathName = params.pathNameSpecialty;

  const translatedPathParent = convertPathName(pathName, translationsParent);
  const ContentPage: ({ currentPath }: { currentPath: string }) => JSX.Element =
    findContent(pathName, arrayContentSpecialties);

  return (
    <Template>
      <Main>
        <section className="global-section">
          <ContainerMedium>
            <Title title="especialidades" subTitle={translatedPathParent} />
            {ContentPage && <ContentPage currentPath={pathName} />}
          </ContainerMedium>
        </section>
      </Main>
    </Template>
  );
}

export { translationsParent };
