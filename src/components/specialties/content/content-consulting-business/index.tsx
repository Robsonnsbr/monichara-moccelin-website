import {
  Description,
  ContainerGrid,
  ContentGrid
} from '../../components/content/Content';

import imageDivorcio from 'public/assets/image/topics/divorcio.jpg';
import imageInventarioHerdeiros from 'public/assets/image/topics/inventario-com-herdeiros-menores-e-incapazes.jpg';
import imageInventarioEJ from 'public/assets/image/topics/inventario-extrajudicial-e-judicial.jpg';

function ContentConsultingBusiness({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Description>
        Fazemos a análise preventiva de legislação, contratos e negócios
        jurídicos, com sinergia com as demais áreas de atuação do escritório,
        visando evitar conflitos, minimizando riscos e potencializando
        oportunidades.
      </Description>
      <ContainerGrid>
        <ContentGrid
          currentPath={`${currentPath}/contrato`}
          imageProps={imageDivorcio}
          alt="imagem divorcio"
        >
          Divórcio
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/consultoria-juridica`}
          imageProps={imageInventarioEJ}
          alt="imagem inventario judicial"
        >
          Inventário extrajudicial e judicial
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/contratos-empresariais`}
          imageProps={imageInventarioHerdeiros}
          alt="imagem inventario com herdeiros"
        >
          Inventario com herdeiros menores e incapazes
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/gestao-juridica`}
          imageProps={imageInventarioHerdeiros}
          alt="imagem inventario com herdeiros"
        >
          Inventario com herdeiros menores e incapazes
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/recuperacao-credito-defesa-ativos`}
          imageProps={imageInventarioHerdeiros}
          alt="imagem inventario com herdeiros"
        >
          Inventario com herdeiros menores e incapazes
        </ContentGrid>
      </ContainerGrid>
    </>
  );
}

export default ContentConsultingBusiness;
