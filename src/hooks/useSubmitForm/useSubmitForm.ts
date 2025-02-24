import { useEffect, useState } from 'react';
import { sendEmail } from 'src/services/sendEmail';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmailProps } from 'src/types/emailsType';
import { schemaZod } from 'src/hooks/useSubmitForm/schemaZod';
import { FormDataProps } from './types';
import { sendEventGoogleAds } from 'src/services/sendEventGoogleAds';

export const useSubmitForm = () => {
  const [isWasSend, setIsWasSend] = useState(false);
  const [isError, setError] = useState(false);
  const [captcha, setCaptcha] =
    useState<React.SetStateAction<string | null>>(null);
  const [RECAPTCHA_SITE_KEY, setRECAPTCHA_SITE_KEY] = useState('');

  useEffect(() => {
    setRECAPTCHA_SITE_KEY(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '');
  }, []);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormDataProps>({
    mode: 'all',
    criteriaMode: 'all',
    resolver: zodResolver(schemaZod),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  //TODO: Mock para teste de envio apagar quando for para produção
  /*
  const sendEmailMock = async ({ message, email, name, subject }: any) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Email enviado', { message, email, name, subject });
        resolve(200);
        // reject(401);
      }, 3000);
    });
  };

  //Colocar no try para testar
  const resultado = await sendEmailMock({
    message,
    email,
    name,
    subject
*/

  const handleSubmitForm = async (data: EmailProps) => {
    const { message, email, name, subject } = data;

    if (captcha || !RECAPTCHA_SITE_KEY) {
      try {
        const resultado = await sendEmail({ message, email, name, subject });
        sendEventGoogleAds();
        if (resultado === 200) {
          setIsWasSend(true);
          reset();
        } else {
          setError(true);
          setError(false);
        }
        setCaptcha(null);
      } catch (error) {
        setError(true);
        setTimeout(() => {
          setCaptcha(null);
          setError(false);
        }, 5000);
        console.error('Erro ao enviar e-mail:', error);
      }
    } else {
      console.log('reCaptcha não recebido.');
      alert('Para continuar, clique em "Não sou um robô".');
    }
  };

  return {
    handleSubmitForm,
    setCaptcha,
    register,
    handleSubmit,
    RECAPTCHA_SITE_KEY,
    isWasSend,
    isError,
    errors,
    isSubmitting
  };
};
