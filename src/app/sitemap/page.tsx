import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Main from 'src/components/common/Main';
import Title from 'src/components/common/title';
import SVGsitemap from 'public/assets/sitemap-diagram.svg';
import Image from 'next/image';

function News() {
  return (
    <Main>
      <section className="global-section" id="section-news">
        <ContainerMedium>
          <Title title="mapa do site" subTitle="" />
        </ContainerMedium>
        <ContainerMedium className="flex justify-center">
          <Image
            src={SVGsitemap}
            alt="Mapa do Site"
            width={800}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
        </ContainerMedium>
      </section>
    </Main>
  );
}

export default News;
