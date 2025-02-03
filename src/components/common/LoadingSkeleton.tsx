import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const LoadingSkeleton = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-[196px] w-full p-6 rounded-md animate-pulse bg-extraLightBlueGray text-deepIndigoBlue hover:-translate-y-1 hover:scale-105 active:opacity-70 active:scale-100 transition-all ease-linear duration-100"
      data-aos="zoom-in-up"
    >
      <AiOutlineLoading3Quarters className="size-4 animate-spin" />
      <p>Carregando conteúdo...</p>
    </div>
  );
};

export default LoadingSkeleton;
