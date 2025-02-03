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
          No momento da compra de um imóvel, na assinatura do contrato, as
          construtoras geram uma expectativa que impulsiona o consumidor a
          investir naquele sonho, gerando expectativas.
        </ContainerContentText>
        <ContainerContentText>
          Porém, o comportamento final dessas construtoras vem deixando os
          consumidores em uma situação extremamente difícil, com o atraso das
          obras, promessas não cumpridas, pois estão, atualmente, sem o usufruto
          do imóvel e sem o dinheiro para comprar um outro para morar.
        </ContainerContentText>

        <ContainerContentText>
          Nesse contexto, não se mostra razoável que o consumidor aguarde por
          prazo indeterminado pela entrega do imóvel para que possa morar.
          Assim, havendo atraso na entrega da obra ou na obtenção do Habite-se,
          por prazo superior a 180 (cento e oitenta dias), justifica-se a
          Rescisão do contrato por culpa da Construtora.
        </ContainerContentText>

        <ContainerContentText>
          O judiciário possui entendimento pacificado para os casos de atraso de
          obra, bem como aqueles em que o imóvel não apresenta as mesmas
          condições das ofertadas na negociação, ou ainda possui vícios,
          defeitos que acarretam depreciação, ou inviabilizam o uso em sua
          plenitude.
        </ContainerContentText>
        <ContainerTableInfo>
          <TableTitle>Documentos necessários</TableTitle>
          <TableInfo>
            <p>Documento de Identidade;</p>
            <p>Comprovante de endereço;</p>

            <p>
              Contrato de compra e venda, ou contrato de incorporação para
              realização do empreendimento;
            </p>

            <p>
              Documentos relativos a despesas adicionais decorrentes do atraso
              da obra, inclusive as relativas ao pagamento de aluguel;
            </p>

            <p>
              Indicação das testemunhas (nome, cópia do documento de identidade,
              telefone e e-mail);
            </p>

            <p>
              Eventuais gravações, e-mails, mensagens de celular e redes sociais
              que contenham o material utilizado na oferta do imóvel ou material
              de publicidade;
            </p>
          </TableInfo>
        </ContainerTableInfo>
      </ContainerText>
      <ButtonBack href="/especialidades/imobiliario">Voltar</ButtonBack>
    </>
  );
}

export default ContentAtrasoDeObras;
