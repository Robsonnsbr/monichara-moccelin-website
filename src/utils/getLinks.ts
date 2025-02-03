/* cpell:desable */
'use server';
type LinkType =
  | 'whatsappFirst'
  | 'whatsappSecondary'
  | 'instagram'
  | 'linkedin';

const links: Record<LinkType, string> = {
  whatsappFirst: `https://api.whatsapp.com/send?phone=554199483760&text=Ol%C3%A1%20Dra.%20Monichara,%0A%0AEspero%20que%20esteja%20tudo%20bem.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20para%20solicitar%20seu%20aux%C3%ADlio%20com%20algumas%20quest%C3%B5es%20legais.%0A%0AGostaria%20de%20agendar%20um%20momento%20para%20discutir%20minhas%20d%C3%BAvidas%20e%20receber%20sua%20orienta%C3%A7%C3%A3o.%20Qual%20seria%20o%20melhor%20hor%C3%A1rio%20para%20uma%20consulta?%0A%0AAgrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o%20e%20estou%20ansioso(a)%20para%20sua%20orienta%C3%A7%C3%A3o.%0A%0AAtenciosamente,`,
  whatsappSecondary: `https://api.whatsapp.com/send?phone=5541998083760&text=Ol%C3%A1%20Dra.%20Monichara,%0A%0AEspero%20que%20esteja%20tudo%20bem.%20Estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20site%20para%20solicitar%20seu%20aux%C3%ADlio%20com%20algumas%20quest%C3%B5es%20legais.%0A%0AGostaria%20de%20agendar%20um%20momento%20para%20discutir%20minhas%20d%C3%BAvidas%20e%20receber%20sua%20orienta%C3%A7%C3%A3o.%20Qual%20seria%20o%20melhor%20hor%C3%A1rio%20para%20uma%20consulta?%0A%0AAgrade%C3%A7o%20desde%20j%C3%A1%20pela%20aten%C3%A7%C3%A3o%20e%20estou%20ansioso(a)%20para%20sua%20orienta%C3%A7%C3%A3o.%0A%0AAtenciosamente,`,
  instagram: `https://www.instagram.com/monimoccelin?igsh=MWFsbXN1cjh6aWsydw==`,
  linkedin: `https://www.linkedin.com/in/monichara-moccelin-7675b4194/`
};

export async function getLink(type: LinkType): Promise<string> {
  return Promise.resolve(links[type] || '');
}
