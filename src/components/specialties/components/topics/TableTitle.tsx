import React, { ReactNode } from 'react';

interface TableTitleProps {
  children: ReactNode;
}

export default function TableTitle({ children }: TableTitleProps) {
  return (
    <h4 className="px-3 py-2 bg-lightBlueGray rounded-t-md border-b border-mediumBlueGray/20">
      {children}
    </h4>
  );
}
