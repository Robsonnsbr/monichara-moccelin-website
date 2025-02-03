import ButtonBack from 'src/components/common/Button/ButtonBack';
import {
  ContainerContentText,
  ContainerText
} from 'src/components/specialties/components/topics';

function ContentAtrasoDeObras() {
  return (
    <>
      <ContainerText>
        <ContainerContentText>
          Estruturação societária – Contrato Social – Acordo de quotistas/sócios
          – Estatuto social – Análise de risco – Análise de passivo trabalhista
          – Prevenção e enfrentamento de litígios
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
      </ContainerText>
      <ButtonBack href="/especialidades/assessoria-empresarial">
        Voltar
      </ButtonBack>
    </>
  );
}

export default ContentAtrasoDeObras;
