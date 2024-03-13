'use client';
import { ButtonSend } from './ButtonSend';
import { RiMailSendLine } from 'react-icons/ri';
import { BsCheck2All } from 'react-icons/bs';
import ReCAPTCHAComponent from './ReCAPTCHAComponent';
import { TbFaceIdError } from 'react-icons/tb';
import { useSubmitForm } from '../../hooks/index';

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
        <div className="flex items-center justify-start relative">
          <div
            className={`text-noBlack absolute top-1/4 left-1/2 flex items-center gap-1 transition-opacity ease-in-out duration-500 ${
              isWasSend ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>Sua mensagem foi enviada!</span>
            <BsCheck2All className="size-5 text-lightApricotSalmon  align-middle" />
          </div>
          <div
            className={`text-noBlack absolute top-1/4 left-1/2 flex items-center gap-1 transition-opacity ease-in-out duration-500 ${
              isError ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <span>Falha ao enviar mensagem</span>
            <TbFaceIdError className="size-5 text-errorRed  align-middle" />
          </div>
          <ButtonSend isSubmitting={isSubmitting} />
        </div>
      </form>
    </div>
  );
};
