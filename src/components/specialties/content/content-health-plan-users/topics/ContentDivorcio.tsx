import ButtonBack from 'src/components/common/Button/ButtonBack';
import {
  ContainerContentText,
  ContainerTableInfo,
  ContainerText,
  TableInfo,
  TableTitle
} from 'src/components/specialties/components/topics';

function ContentAtrasoDeObras() {
  return (
    <>
      <ContainerText>
        <ContainerContentText>
          Quando duas pessoas casadas querem pôr fim ao casamento, a solução
          jurídica adequada é fazer o divórcio.aaaa
        </ContainerContentText>
        <ContainerContentText>
          Para se divorciar você precisa escolher um advogado e reunir a
          documentação necessária para o processo. ou menos tempo.
        </ContainerContentText>
        <ContainerContentText>
          Nos casos amigáveis, quando existe consenso entre o casal, e menos
          complexos, o mais indicado é fazer o divórcio extrajudicial. Este
          procedimento acontece no cartório e é mais simples e rápido do que o
          divórcio judicial. Já neste último caso, o processo de divórcio
          acontecerá perante um juiz e, a depender da complexidade das questões
          discutidas (guarda, pensão, divisão de bens, etc.), poderá levar mais
        </ContainerContentText>
        <ContainerTableInfo>
          <TableTitle>Documentos necessários para fazer o divórcio</TableTitle>
          <TableInfo>
            <p>Certidão de casamento;</p>
            <p>Certidão de nascimento dos filhos (se houver);</p>
            <p>Cópias do RG e CPF de cada um;</p>
            <p>Documentos dos bens móveis e imóveis;</p>
            <p>
              Um ou mais advogados para auxiliar às partes ao longo do processo.
            </p>
          </TableInfo>
        </ContainerTableInfo>
      </ContainerText>
      <ButtonBack href="/especialidades/indenizacoes">Voltar</ButtonBack>
    </>
  );
}

export default ContentAtrasoDeObras;
