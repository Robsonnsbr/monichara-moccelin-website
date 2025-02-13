/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/topHome',
        destination: '/',
        permanent: true // Código 301 (redirecionamento permanente)
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
        source: '/inicio-da-pagina',
        destination: '/',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
