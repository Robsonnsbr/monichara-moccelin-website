'use client';
import Script from 'next/script';

const ElfSightWidget = () => {
  return (
    <>
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        async
      ></Script>
      <div
        className="elfsight-app-c3128f2e-158e-46d3-a705-4a56fd12078a font-poppins pt-10"
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

export default ElfSightWidget;
