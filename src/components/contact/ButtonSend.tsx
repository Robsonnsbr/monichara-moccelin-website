'use client';

import { ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionsNames?: {
    firstAction: string;
    secondaryAction: string;
  };
  /**
   * Indica se o formulário está atualmente sendo enviado.
   * Quando true, o botão será desativado e exibirá um texto relacionado à ação de envio.
   * O Uso do atributo actionsNames é opcional
   * @description Booleano indicando se o formulário está sendo enviado.
   * @default false
   * @example
   * Use on Form
   * import { useForm } from 'react-hook-form';
   * const {formState: { isSubmitting }} = useForm()
   *
   * Use Attribute on Button
   * <Button
            isSubmitting={isSubmitting}
            actionsNames={{
              firstAction: 'Enviar',
              secondaryAction: 'Enviando...'
            }}
          />}
   */
  isSubmitting: boolean;
}

export const ButtonSend = ({
  actionsNames = {
    firstAction: 'Enviar mensagem',
    secondaryAction: 'Enviando...'
  },
  isSubmitting = false,
  ...props
}: ButtonProps) => {
  const { firstAction, secondaryAction } = actionsNames;
  return (
    <button
      type="submit"
      name="btnSend"
      id="btnSend"
      disabled={isSubmitting}
      className={`group transition-all ease-linear duration-100 ${
        isSubmitting ? 'opacity-50' : 'opacity-100'
      } ${
        props.className
          ? props.className
          : 'bg-noBlack text-white py-2 px-3 rounded-md focus:outline-none focus:shadow-outline z-20 hover:bg-lightApricotSalmon  active:scale-95 active:bg-lightApricotSalmon'
      }`}
      {...props}
    >
      <span className=" transition-all ease-linear duration-100 text-white font-openSans sm:group-hover:text-deepIndigoBlue">
        {isSubmitting ? secondaryAction : firstAction}
      </span>
    </button>
  );
};
