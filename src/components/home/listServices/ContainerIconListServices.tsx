import Image from 'next/image';
import bgListServer from 'public/assets/background/bg-list-services/bg-icon-list-services.png';
import { ReactNode } from 'react';

export const ContainerIconListServices = ({
  children
}: {
  children: ReactNode;
}) => {
  return (
    <div className="relative h-20 w-full">
      <Image
        src={bgListServer}
        alt="icon list services"
        width={80}
        height={80}
        placeholder="blur"
        className="m-auto w-[80px] h-[80px]"
      />
      {children}
    </div>
  );
};
