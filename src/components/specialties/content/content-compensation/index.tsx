import {
  Description,
  ContainerGrid,
  ContentGrid
} from '../../components/content/Content';

import imageDivorcio from 'public/assets/image/topics/divorcio.jpg';
import imageInventarioHerdeiros from 'public/assets/image/topics/inventario-com-herdeiros-menores-e-incapazes.jpg';
import imageInventarioEJ from 'public/assets/image/topics/inventario-extrajudicial-e-judicial.jpg';

function ContentCompensation({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Description>
        Indenizações jurídicas referem-se à compensação financeira concedida a
        uma parte prejudicada devido a danos ou prejuízos sofridos. Essas
        compensações são determinadas por meio de processos legais e podem
        envolver casos como acidentes, negligência ou violações de direitos,
        visando restituir a vítima pelos danos sofridos. O valor da indenização
        é geralmente determinado com base nas perdas reais e nos danos
        emocionais ou físicos causados. A busca por indenizações é comum em
        diversos campos do direito, incluindo acidentes de trânsito, danos
        pessoais e questões trabalhistas.
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

export default ContentCompensation;
