import ButtonBack from 'src/components/common/Button/ButtonBack';
import ContainerContentText from 'src/components/specialties/components/topics/ContainerContentText';
import ContainerText from 'src/components/specialties/components/topics/ContainerText';

function ContentAverbacaoDeImovel() {
  return (
    <>
      <ContainerText>
        <ContainerContentText>
          Muitas imobiliárias contam com um departamento jurídico, o que pode
          dar a impressão de mais segurança para o cliente. Contudo, como
          intermediadora sendo remunerada por comissão, ela tem um grande
          interesse na concretização do negócio.
        </ContainerContentText>
        <ContainerContentText>
          Dessa forma, ela trabalhará na tentativa de conciliar as partes e
          defender os direitos de todos os envolvidos, mas não poderá oferecer
          um atendimento personalizado aos interesses de apenas uma das partes.
        </ContainerContentText>
        <ContainerContentText>
          Já com a assessoria jurídica não há esse problema. Contratando esse
          serviço individualmente, você terá a certeza de que os seus interesses
          estão sendo priorizados e a segurança necessária para tomar a melhor
          decisão sobre o negócio.
        </ContainerContentText>
        <ContainerContentText>
          Assim, evitará riscos na realização do negócio e destinação de seus
          investimentos.
        </ContainerContentText>
      </ContainerText>
      <ButtonBack href="/especialidades/imobiliario">Voltar</ButtonBack>
    </>
  );
}

export default ContentAverbacaoDeImovel;
