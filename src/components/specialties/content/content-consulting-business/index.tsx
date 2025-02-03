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
        Assessoria jurídica para empresas, visando evitar conflitos e
        minimizando riscos
      </Description>
      <ContainerGrid>
        <ContentGrid
          currentPath={`${currentPath}/contrato`}
          imageProps={imageDivorcio}
          alt="imagem divorcio"
        >
          Consultoria jurídica empresarial
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/consultoria-juridica`}
          imageProps={imageInventarioEJ}
          alt="imagem inventario judicial"
        >
          Contratos empresariais
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/contratos-empresariais`}
          imageProps={imageInventarioHerdeiros}
          alt="imagem inventario com herdeiros"
        >
          Recuperação de Crédito e Defesa de ativos
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
