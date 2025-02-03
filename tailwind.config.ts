import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    darkMode: true,
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
        openSans: ['var(--font-open-sans)'],
        poppins: ['var(--font-poppins)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        whiteSnow: '#fffafa',
        deepIndigoBlue: '#161B2E',
        mediumBlueGray: '#556B82',
        lightApricotSalmon: '#DEA172',
        lightBlueGray: '#bcd8f2',
        extraLightBlueGray: '#c6d7e7d0',
        activeBlue: '#0091ff',
        noBlack: '#2A3E53',
        errorRed: '#F00'
      }
    }
  },
  plugins: []
};
export default config;
