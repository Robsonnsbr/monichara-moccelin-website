import {
  Description,
  ContainerGrid,
  ContentGrid
} from '../../components/content/Content';

import imageDivorcio from 'public/assets/image/topics/divorcio.jpg';
import imageInventarioHerdeiros from 'public/assets/image/topics/inventario-com-herdeiros-menores-e-incapazes.jpg';
import imageInventarioEJ from 'public/assets/image/topics/inventario-extrajudicial-e-judicial.jpg';

function ContentOfficesClinics({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Description>
        Orientação jurídica para o planejamento sucessório e resolução de
        questões relativas a inventários judicial e extrajudicial, arrolamento
        de bens, petição de herança e assuntos que envolvam o direito de
        herança. Nesse momento tão delicado auxiliamos nossos clientes de forma
        humanizada, para minimizar conflitos familiares.
      </Description>
      <ContainerGrid>
        <ContentGrid
          currentPath={`${currentPath}/divorcio`}
          imageProps={imageDivorcio}
          alt="imagem divorcio"
        >
          Divórcio
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/inventario-extrajudicial-e-judicial`}
          imageProps={imageInventarioEJ}
          alt="imagem inventario judicial"
        >
          Inventário extrajudicial e judicial
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/inventario-com-herdeiros-menores-e-incapazes`}
          imageProps={imageInventarioHerdeiros}
          alt="imagem inventario com herdeiros"
        >
          Inventario com herdeiros menores e incapazes
        </ContentGrid>
      </ContainerGrid>
    </>
  );
}

export default ContentOfficesClinics;
