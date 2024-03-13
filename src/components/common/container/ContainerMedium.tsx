import React, { HTMLAttributes } from 'react';

interface ContainerMediumProps extends HTMLAttributes<HTMLDivElement> {}

const ContainerMedium: React.FC<ContainerMediumProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`container w-full h-fit mx-auto px-2 sm:w-4/5 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerMedium;
