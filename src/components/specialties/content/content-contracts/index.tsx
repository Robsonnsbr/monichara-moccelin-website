import {
  Description,
  ContainerGrid,
  ContentGrid
} from '../../components/content/Content';

import imageDivorcio from 'public/assets/image/topics/divorcio.jpg';
import imageInventarioHerdeiros from 'public/assets/image/topics/inventario-com-herdeiros-menores-e-incapazes.jpg';
import imageInventarioEJ from 'public/assets/image/topics/inventario-extrajudicial-e-judicial.jpg';

function ContentContracts({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Description>
        Atuamos na elaboração, revisão e análise de contratos em geral.
        Prestamos um auxílio especializado para análises de risco; mediação em
        negociações; assessoria, elaboração e revisão de contratos.
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

export default ContentContracts;
