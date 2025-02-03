import React from 'react';
import Main from 'src/components/common/Main';
import Title from 'src/components/common/title';
import { getPostContent } from 'src/services/notion';

import ReactMarkdown from 'react-markdown';
import ContainerMedium from 'src/components/common/container/ContainerMedium';
import Link from 'next/link';
import Template from 'src/app/template';

async function Post({ params }: { params: { slug: string } }) {
  const post = await getPostContent(params.slug);

  return (
    <Template>
      <Main>
        <section className="global-section">
          <ContainerMedium>
            <Title
              title={'notícias'}
              subTitle={post?.title || ''}
              classNameSubTitle="text-xl text-center mt-10"
            />
          </ContainerMedium>
          <ContainerMedium>
            <ReactMarkdown
              components={{
                p: ({ ...props }) => (
                  <p
                    className="text-deepIndigoBlue text-justify mb-8"
                    {...props}
                  />
                )
              }}
            >
              {post?.content}
            </ReactMarkdown>
            <Link
              href="/noticias"
              target="_self"
              className="text-lightApricotSalmon font-openSans py-4 pr-3 hover:text-lightApricotSalmon/80 active:text-deepIndigoBlue transition-all ease-in-out duration-100"
            >
              + Ver mais notícias
            </Link>
          </ContainerMedium>
        </section>
      </Main>
    </Template>
  );
}

export default Post;
