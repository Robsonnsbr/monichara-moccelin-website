import React from 'react';

interface IMainProps extends React.HTMLAttributes<HTMLDivElement> {}

const Main: React.FC<IMainProps> = ({ children, className, ...props }) => {
  return (
    <main
      className={`global-height-main pt-16 flex w-full flex-col items-center gap-5 ${className}`}
      id="main"
      {...props}
    >
      {children}
    </main>
  );
};

export default Main;
