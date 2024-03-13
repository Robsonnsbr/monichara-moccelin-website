import {
  Description,
  ContainerGrid,
  ContentGrid
} from '../../components/content/Content';

import imageAtrasoEmObras from 'public/assets/image/topics/atraso-de-obras.jpg';
import imageAverbacaoDeImovel from 'public/assets/image/topics/averbacao-de-imovel.jpg';
import imageCompraVendaImovel from 'public/assets/image/topics/compra-e-venda-de-imoveis.jpg';

function ContentRealEstate({ currentPath }: { currentPath: string }) {
  return (
    <>
      <Description>
        O Direito Imobiliário estabelece regras entre as relações de
        propriedade; envolvendo questões relativas a aquisição e a perda de
        propriedade, defeitos e vícios de construção, locação, doações,
        usucapião, incorporações imobiliárias, direito de construir e
        vizinhança, regularização de imóveis.
      </Description>
      <ContainerGrid>
        <ContentGrid
          currentPath={`${currentPath}/atraso-de-obras`}
          imageProps={imageAtrasoEmObras}
          alt="imagem atraso em obras"
        >
          Atraso em Obras
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/averbacao-de-imovel`}
          imageProps={imageAverbacaoDeImovel}
          alt="imagem averbação de imóvel"
        >
          Averbação de imóvel
        </ContentGrid>
        <ContentGrid
          currentPath={`${currentPath}/compra-e-venda-de-imoveis`}
          imageProps={imageCompraVendaImovel}
          alt="imagem compra e venda de imóveis"
        >
          Compra e venda de imóveis
        </ContentGrid>
      </ContainerGrid>
    </>
  );
}

export default ContentRealEstate;
