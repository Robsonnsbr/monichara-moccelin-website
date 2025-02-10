import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Main from 'src/components/common/Main';
import Title from 'src/components/common/title';

function News() {
  return (
    <Main>
      <section
        className="global-section bg-whiteSnow text-noBlack font-openSans"
        id="section-news"
      >
        <ContainerMedium>
          <Title title="Política de Privacidade" subTitle="" />
        </ContainerMedium>
        <ContainerMedium className="flex justify-center">
          <div className="prose max-w-2xl p-6 bg-extraLightBlueGray shadow-md rounded-lg">
            <p className="text-mediumBlueGray">
              <strong>Última atualização:</strong> 10 de fevereiro de 2025
            </p>
            <p>
              Na{' '}
              <span className="text-lightApricotSalmon font-semibold">
                Moccelin Advocacia e Consultoria
              </span>
              , respeitamos a sua privacidade e estamos comprometidos em
              proteger os dados pessoais que você nos fornece. Esta Política de
              Privacidade descreve como coletamos, utilizamos, armazenamos e
              protegemos suas informações. Ao acessar nosso site{' '}
              <a
                href="http://moccelinadvocacia.com/"
                target="_blank"
                className="text-activeBlue underline font-semibold"
              >
                moccelinadvocacia.com
              </a>{' '}
              e utilizar nossos serviços, você concorda com os termos desta
              Política.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              1. Dados Coletados e Finalidades
            </h2>
            <p>
              Coletamos apenas os dados pessoais necessários para responder às
              suas solicitações de contato e agendamento:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <strong>Nome completo:</strong> Para identificação.
              </li>
              <li>
                <strong>E-mail:</strong> Para retornarmos o contato.
              </li>
              <li>
                <strong>Número de telefone:</strong> Para comunicação via
                WhatsApp.
              </li>
              <li>
                <strong>Mensagem:</strong> Para entendermos sua demanda
                jurídica.
              </li>
            </ul>

            <h2 className="text-deepIndigoBlue font-semibold">
              2. Base Legal para o Tratamento dos Dados
            </h2>
            <p>
              Nosso tratamento de dados é realizado com base na execução de
              contrato ou diligências preliminares (art. 7º, inciso V, da LGPD).
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados pessoais não serão compartilhados com terceiros, exceto
              quando necessário por obrigações legais ou com seu consentimento
              explícito.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              4. Retenção de Dados
            </h2>
            <p>
              Seus dados serão mantidos apenas pelo tempo necessário para
              responder sua solicitação ou cumprir obrigações legais.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              5. Direitos do Titular de Dados
            </h2>
            <p>Você possui os seguintes direitos garantidos pela LGPD:</p>
            <ul className="list-disc pl-5">
              <li>Confirmação da existência de tratamento.</li>
              <li>Acesso e correção dos dados.</li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários.
              </li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato via e-mail:{' '}
              <a
                href="mailto:monicharamoccelin.adv@gmail.com"
                className="text-activeBlue underline font-semibold"
              >
                monicharamoccelin.adv@gmail.com
              </a>
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              6. Segurança dos Dados
            </h2>
            <p>
              Adotamos medidas técnicas e administrativas para proteger seus
              dados contra acessos não autorizados.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              7. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Nosso site não utiliza cookies ou tecnologias de rastreamento para
              coleta de dados pessoais.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">
              8. Alterações nesta Política
            </h2>
            <p>
              Esta Política pode ser atualizada periodicamente. Recomendamos a
              consulta regular desta página.
            </p>

            <h2 className="text-deepIndigoBlue font-semibold">9. Contato</h2>
            <p>
              Em caso de dúvidas, entre em contato:
              <br /> E-mail:{' '}
              <a
                href="mailto:monicharamoccelin.adv@gmail.com"
                className="text-activeBlue underline font-semibold"
              >
                monicharamoccelin.adv@gmail.com
              </a>
              <br /> Telefone:{' '}
              <span className="text-lightApricotSalmon font-semibold">
                +55 41 99808-3760
              </span>
            </p>
          </div>
        </ContainerMedium>
      </section>
    </Main>
  );
}

export default News;
