import ButtonBack from 'src/components/common/Button/ButtonBack';
import ContainerContentText from 'src/components/specialties/components/topics/ContainerContentText';
import ContainerText from 'src/components/specialties/components/topics/ContainerText';

function ContentLegalManagement() {
  return (
    <>
      <ContainerText>
        <ContainerContentText>
          Recentemente a legislação brasileira passou a admitir a possibilidade
          de realização do inventário extrajudicial com herdeiro incapaz.
        </ContainerContentText>
        <ContainerContentText>
          O Diário da Justiça Eletrônico trouxe, em setembro, a Portaria
          5914-12, que dispõe sobre a realização de inventário extrajudicial, em
          tabelionato de notas, quando houver herdeiros interessados incapazes.
        </ContainerContentText>
        <ContainerContentText>
          Resumidamente, a portaria em questão permite que acesso mais fácil ao
          inventário da pessoa incapaz diretamente no cartório. Contudo, a
          minuta final da escritura, acompanhada da documentação pertinente,
          precisa ser previamente submetida à aprovação da vara responsável,
          antecedida, evidentemente, de manifestação do Ministério Público, tudo
          isso visando a devida proteção dos interesses dos herdeiros incapazes.
        </ContainerContentText>
        <ContainerContentText>
          Portanto, não haverá nenhum prejuízo aos menores e incapazes, pois a
          aprovação desses inventários continuará dependendo da manifestação
          favorável do Ministério Público e da prévia aprovação da Justiça.
        </ContainerContentText>
        <ContainerContentText>
          O procedimento é simples e desburocratizado, em forma de pedido de
          providência, sem a incidência de custas processuais para que não
          aconteça uma duplicidade na cobrança. Contudo, ainda é necessário
          pagar os emolumentos cartorários.
        </ContainerContentText>
        <ContainerContentText>
          Desta forma, os herdeiros passam a ter a opção de realizar o
          inventário extrajudicial mesmo em casos onde há um herdeiro incapaz,
          acelerando consideravelmente o processo.
        </ContainerContentText>
      </ContainerText>
      <ButtonBack href="/especialidades/indenizacoes">Voltar</ButtonBack>
    </>
  );
}

export default ContentLegalManagement;
