'use client';

import Link from 'next/link';
import { TbFaceIdError, TbFileRss } from 'react-icons/tb';
import LoadingSkeleton from '../common/LoadingSkeleton';
import { usePost } from 'src/hooks';
import { dateFormatter } from 'src/utils/dateFormatter';

function NewsPostList() {
  const { isLoading, postList } = usePost();

  return (
    <div>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <ul className="grid grid-rows-1 gap-4 w-full" data-aos="fade-up">
          {postList &&
            postList.length > 0 &&
            postList.map((post) => (
              <li key={post.id}>
                <Link href={`/noticias/${post.slug}`} target="_self">
                  <div className="w-full overflow-hidden flex flex-row items-center gap-2 p-6 rounded-md bg-extraLightBlueGray text-deepIndigoBlue hover:-translate-y-1 hover:scale-105 active:opacity-70 active:scale-100  transition-all ease-linear duration-100">
                    <div className="min-w-fit min-h-fit mr-2 hidden sm:flex">
                      <TbFileRss className="w-full size-10" />
                    </div>
                    <div>
                      <time className="font-openSans text-[10px]  text-mediumBlueGray">
                        {dateFormatter(post.createdAt)}
                      </time>
                      <h3 className="text-xl font-medium">{post.title}</h3>

                      {
                        <div className="w-full max-w-full flex overflow-hidden">
                          <p className="w-full max-w-full font-openSans text-base line-clamp-3 overflow-hidden">
                            {post.content}
                          </p>
                        </div>
                      }
                      <strong className="text-sm font-openSans text-mediumBlueGray  ">
                        + ler mais
                      </strong>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          {!postList ||
            (postList.length <= 0 && (
              <div
                className="flex flex-row items-center justify-center gap-2"
                data-aos="fade-down"
              >
                <p className="text-base font-medium text-deepIndigoBlue">
                  Sem notícias no momento.
                </p>
                <TbFaceIdError className="size-5 text-errorRed  align-middle" />
              </div>
            ))}
        </ul>
      )}
    </div>
  );
}

export default NewsPostList;
