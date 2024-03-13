import { z } from 'zod';

export const schemaZod = z.object({
  name: z
    .string()
    .min(2, 'nome é obrigatório')
    .transform((name) => {
      return name
        .trim()
        .split(' ')
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(' ');
    }),
  email: z
    .string()
    .min(1, 'email é obrigatório')
    .email('Email inválido!')
    .toLowerCase(),
  subject: z.string().min(7, 'assunto inválido!'),
  message: z.string().min(22, 'mensagem inválida!')
});
