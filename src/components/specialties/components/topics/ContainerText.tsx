import React, { ReactNode } from 'react';

interface IContainerTextProps {
  children: ReactNode;
}

function ContainerText({ children }: IContainerTextProps) {
  return <div className="mb-6 text-justify">{children}</div>;
}

export default ContainerText;
