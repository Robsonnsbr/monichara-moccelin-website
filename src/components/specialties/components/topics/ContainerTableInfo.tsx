import React, { ReactNode } from 'react';

interface IContainerTableInfoProps {
  children: ReactNode;
}

export default function ContainerTableInfo({
  children
}: IContainerTableInfoProps) {
  return (
    <div className="bg-extraLightBlueGray rounded-md border border-mediumBlueGray/20">
      {children}
    </div>
  );
}
