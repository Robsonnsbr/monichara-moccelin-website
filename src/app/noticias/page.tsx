import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Main from 'src/components/common/Main';
import Title from 'src/components/common/title';
import NewsPostList from '../../components/news/NewsPostList';
import Template from '../template';

function News() {
  return (
    <Template>
      <Main>
        <section className="global-section" id="section-news">
          <ContainerMedium>
            <Title title={'notícias'} subTitle={'informações e novidades.'} />
          </ContainerMedium>
          <ContainerMedium>
            <NewsPostList />
          </ContainerMedium>
        </section>
      </Main>
    </Template>
  );
}

export default News;
