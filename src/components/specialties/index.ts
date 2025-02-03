import { IContentPage } from 'src/types/contentSpecialtiesType';
//Content specialties
import ContentCompensation from './content/content-compensation';
import ContentRealEstate from './content/content-real-estate';
import ContentOfficesClinics from './content/content-offices-clinics';
import ContentConsultingBusiness from './content/content-consulting-business';
import ContentContracts from './content/content-contracts';
import ContentHealthProfessionals from './content/content-health-professionals';
import ContentHealthPlanUsers from './content/content-health-plan-users';

//Content Topics
import ContentAtrasoDeObras from './content/content-real-estate/topics/ContentAtrasoDeObras';
import ContentAverbacaoDeImovel from './content/content-real-estate/topics/ContentAverbacaoDeImovel';
import ContentCompraVendaImoveis from './content/content-real-estate/topics/ContentCompraVendaImoveis';

import ContentDivorcio from './content/content-compensation/topics/ContentDivorcio';
import ContentInventarioEJ from './content/content-compensation/topics/ContentInventarioEJ';
import ContentInventarioHerdeiros from './content/content-compensation/topics/ContentInventarioHerdeiros';

import ContentContratoCompraVenda from './content/content-contracts/topics/ContratoCompraVenda';
import ContentContratoDireitoImagem from './content/content-contracts/topics/ContratoDireitoImagem';
import ContentContratoImobiliario from './content/content-contracts/topics/ContratoImobiliario';
import ContentContratoLocacao from './content/content-contracts/topics/ContratoLocacao';
import ContentContratoServicos from './content/content-contracts/topics/ContratoServicos';

import ContentContract from './content/content-consulting-business/topics/ContentContract';
import ContentBusinessLegalConsultancy from './content/content-consulting-business/topics/ContentBusinessLegalConsultancy';
import ContentContractsBusiness from './content/content-consulting-business/topics/ContentContractsBusiness';
import ContentLegalManagement from './content/content-consulting-business/topics/ContentLegalManagement';
import CreditRecoveryAndAssetDefense from './content/content-consulting-business/topics/CreditRecoveryAndAssetDefense';

export const arrayContentSpecialties: IContentPage[] = [
  { key: 'assessoria-empresarial', content: ContentConsultingBusiness },
  { key: 'consultorios-clinicas', content: ContentOfficesClinics },
  { key: 'consultoria-jurídica-empresarial', content: ContentContracts },
  { key: 'imobiliario', content: ContentRealEstate },
  { key: 'indenizacoes', content: ContentCompensation },
  { key: 'profissionais-saude', content: ContentHealthProfessionals },
  { key: 'usuarios-plano-de-saude', content: ContentHealthPlanUsers }
];

export const arrayContentTopics: IContentPage[] = [
  //Imobiliario
  { key: 'atraso-de-obras', content: ContentAtrasoDeObras },
  { key: 'averbacao-de-imovel', content: ContentAverbacaoDeImovel },
  { key: 'compra-e-venda-de-imoveis', content: ContentCompraVendaImoveis },
  //indenização
  { key: 'divorcio', content: ContentDivorcio },
  { key: 'inventario-extrajudicial-e-judicial', content: ContentInventarioEJ },
  {
    key: 'inventario-com-herdeiros-menores-e-incapazes',
    content: ContentInventarioHerdeiros
  },
  //contratos

  {
    key: 'contrato-locacao',
    content: ContentContratoCompraVenda
  },
  {
    key: 'direito-imagem',
    content: ContentContratoDireitoImagem
  },
  {
    key: 'contrato-imobiliario',
    content: ContentContratoImobiliario
  },
  {
    key: 'contrato-locacao',
    content: ContentContratoLocacao
  },
  {
    key: 'contrato-de-locacao',
    content: ContentContratoServicos
  },
  //Consultoria empresarial

  {
    key: 'contrato',
    content: ContentContract
  },
  {
    key: 'consultoria-juridica',
    content: ContentBusinessLegalConsultancy
  },
  {
    key: 'contratos-empresariais',
    content: ContentContractsBusiness
  },
  {
    key: 'gestao-juridica',
    content: ContentLegalManagement
  },
  {
    key: 'recuperacao-credito-defesa-ativos',
    content: CreditRecoveryAndAssetDefense
  }
];
