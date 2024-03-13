import React from 'react';

interface ITitleLineProps {
  title: string;
}

function TitleLine({ title }: ITitleLineProps) {
  return (
    <div className="flex flex-row items-center gap-2 w-full">
      <h1 className="text-mediumBlueGray font-semibold font-poppins tracking-widest text-base text-nowrap">
        {title.toUpperCase()}
      </h1>
      <hr className="w-full h-[2px] bg-gradient-to-r from-lightApricotSalmon to-transparent" />
    </div>
  );
}

export default TitleLine;
