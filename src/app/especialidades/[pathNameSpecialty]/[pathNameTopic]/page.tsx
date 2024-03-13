import Main from 'src/components/common/Main';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Title from 'src/components/common/title';
import { convertPathName } from 'src/utils/convertPathName';
import { arrayContentTopics } from 'src/components/specialties';
import { findContent } from 'src/utils/findContent';
import { translationsParent } from '../page';
import Template from 'src/app/template';

function Topic({ params }: any) {
  const pathNameParent = params.pathNameSpecialty;
  const pathName = params.pathNameTopic;

  const translations = {
    'atraso-de-obras': 'atraso de obras',
    'averbacao-de-imovel': 'averbação de imóvel',
    'compra-e-venda-de-imoveis': 'Compra e venda de imóveis',
    'inventario-extrajudicial-e-judicial':
      'Inventário extrajudicial e judicial',
    'inventario-com-herdeiros-menores-e-incapazes':
      'Inventário com herdeiros menores e incapazes',
    divorcio: 'Divórcio'
  };

  const translatedPathParent = convertPathName(
    pathNameParent,
    translationsParent
  );
  const translatedPath = convertPathName(pathName, translations);

  const ContentTopic: () => JSX.Element = findContent(
    pathName,
    arrayContentTopics
  );

  return (
    <Template>
      <Main>
        <section className="global-section">
          <ContainerMedium>
            <Title title={translatedPathParent} subTitle={translatedPath} />
          </ContainerMedium>
          <ContainerMedium>
            <div>{ContentTopic && <ContentTopic />}</div>
          </ContainerMedium>
        </section>
      </Main>
    </Template>
  );
}

export default Topic;
