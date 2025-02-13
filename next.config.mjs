/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/topHome',
        destination: '/',
        permanent: true
      },
      {
        source: '/resumo-sobre',
        destination: '/sobre',
        permanent: true
      },
      {
        source: '/list-services',
        destination: '/especialidades',
        permanent: true
      },
      {
        source: '/especialidades/inicio-da-pagina',
        destination: '/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
