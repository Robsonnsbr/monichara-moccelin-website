'use client';
import { ButtonSend } from './ButtonSend';
import { RiMailSendLine } from 'react-icons/ri';
import ReCAPTCHAComponent from './ReCAPTCHAComponent';
import WarningSend from './WarningSend';
import { useSubmitForm } from 'src/hooks';

export const FormSimple = () => {
  const {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    handleSubmitForm,
    setCaptcha,
    RECAPTCHA_SITE_KEY,
    isError,
    isWasSend
  } = useSubmitForm();
  return (
    <div
      className={`max-w-[450px] sm:max-w-full  mx-auto mb-2 relative font-openSans`}
    >
      {isSubmitting && (
        <RiMailSendLine
          size={40}
          color="black"
          className="absolute top-1/3 left-1/2  -translate-x-14 ease-in-out animate-ping z-20"
        />
      )}
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className={`transition-opacity ease-in-out duration-500 ${
          isSubmitting ? 'opacity-50' : 'opacity-100'
        }`}
      >
        <div className="mb-2">
          <label htmlFor="name">Seu nome:</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            placeholder="Informe seu nome"
            autoComplete="true"
            className="w-full  px-3 py-2 bg-primaryColor text-deepIndigoBlue mt-2 rounded-md border border-lightBlueGray focus:outline-lightApricotSalmon"
            disabled={isSubmitting}
          />
          {errors.name && (
            <p className="text-errorRed/60 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="email">Seu e-mail:</label>
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="Informe seu e-mail"
            autoComplete="true"
            className="w-full  p-1 px-3 py-2 bg-primaryColor text-deepIndigoBlue mt-2 rounded-md border border-lightBlueGray focus:outline-lightApricotSalmon"
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-errorRed/60 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="subject">Assunto da Mensagem:</label>
          <input
            {...register('subject')}
            type="text"
            id="subject"
            placeholder="Informe o assunto ou tema da sua mensagem."
            className="w-full  p-1 px-3 py-2 bg-primaryColor text-deepIndigoBlue mt-2 rounded-md border border-lightBlueGray focus:outline-lightApricotSalmon"
            disabled={isSubmitting}
          />
          {errors.subject && (
            <p className="text-errorRed/60 text-sm">{errors.subject.message}</p>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="message">Sua mensagem:</label>
          <textarea
            {...register('message')}
            id="message"
            placeholder="Informe aqui sua mensagem ou dúvida."
            className="w-full px-3 py-2 text-area h-40 bg-primaryColor text-deepIndigoBlue  mt-2 rounded-md border border-lightBlueGray focus:outline-lightApricotSalmon -mb-2"
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-errorRed/60 text-sm">{errors.message.message}</p>
          )}
        </div>
        <ReCAPTCHAComponent
          setCaptcha={setCaptcha}
          atualizar={isSubmitting}
          RECAPTCHA_KEY={RECAPTCHA_SITE_KEY}
        />
        <div className="flex items-center justify-start relative min-w-[322px]">
          <ButtonSend isSubmitting={isSubmitting} />
          <WarningSend isError={isError} isWasSend={isWasSend} />
        </div>
      </form>
    </div>
  );
};
