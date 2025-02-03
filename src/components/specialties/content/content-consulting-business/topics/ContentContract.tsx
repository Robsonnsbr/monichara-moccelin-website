import ButtonBack from 'src/components/common/Button/ButtonBack';
import {
  ContainerContentText,
  ContainerText
} from 'src/components/specialties/components/topics';

function ContentContract() {
  return (
    <>
      <ContainerText>
        <ContainerContentText>
          Estruturação societária – Contrato Social – Acordo de quotistas/sócios
          – Estatuto social – Análise de risco – Análise de passivo trabalhista
          – Prevenção e enfrentamento de litígios
        </ContainerContentText>
      </ContainerText>
      <ButtonBack href="/especialidades/assessoria-empresarial">
        Voltar
      </ButtonBack>
    </>
  );
}

export default ContentContract;
