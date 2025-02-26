// 'use server';

// import { Client } from '@notionhq/client';
// import { NotionDataBaseResponse, Post } from 'src/types/notionType';
// import { NotionToMarkdown } from 'notion-to-md';

// const notion = new Client({ auth: process.env.NOTION_API_KEY });
// const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

// export const getPosts = async (): Promise<Post[]> => {
//   try {
//     const response = await notion.databases.query({
//       database_id: DATABASE_ID
//     });

//     const typedResponse = response as unknown as NotionDataBaseResponse;

//     const result = await Promise.all(
//       typedResponse.results.map(async (post) => {
//         try {
//           const contentPost = await getPostContent(
//             post.properties.slug?.rich_text?.[0]?.plain_text || ''
//           );

//           return {
//             id: post.id,
//             title: post.properties.title?.title?.[0]?.plain_text || '',
//             slug: post.properties.slug?.rich_text?.[0]?.plain_text || '',
//             tags:
//               post.properties.tags?.multi_select?.map((tag) => tag.name) || [],
//             content: contentPost?.content,
//             createdAt: post.created_time
//           };
//         } catch (error) {
//           console.error(`Error processing post ${post.id}:`, error);
//           throw error;
//         }
//       })
//     );

//     return result;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

// export const getPostContent = async (slug: string): Promise<any> => {
//   try {
//     const response = await notion.databases.query({
//       database_id: DATABASE_ID,
//       filter: {
//         or: [
//           {
//             property: 'slug',
//             rich_text: {
//               equals: slug
//             }
//           }
//         ]
//       }
//     });

//     const typedResponse = response as unknown as NotionDataBaseResponse;
//     const firstResult = typedResponse.results[0];

//     if (!firstResult) {
//       throw new Error(`Post with slug ${slug} not found.`);
//     }

//     const pageId = firstResult.id;
//     const n2m = new NotionToMarkdown({ notionClient: notion });

//     const mdblocks = await n2m.pageToMarkdown(pageId);
//     const mdString = n2m.toMarkdownString(mdblocks);

//     return {
//       title: firstResult.properties.title?.title?.[0]?.plain_text || '',
//       content: mdString.parent
//     };
//   } catch (error) {
//     console.error(`Error getting content for slug ${slug}:`, error);
//     throw error;
//   }
// };

'use server';

import { Client } from '@notionhq/client';
import { NotionDataBaseResponse, Post } from 'src/types/notionType';
import { NotionToMarkdown } from 'notion-to-md';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const DATABASE_ID = process.env.NOTION_DATABASE_ID || '';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID
    });

    const typedResponse = response as unknown as NotionDataBaseResponse;

    const result = await Promise.all(
      typedResponse.results.map(async (post) => {
        try {
          const contentPost = await getPostContent(
            post.properties.slug?.rich_text?.[0]?.plain_text || ''
          );

          return {
            id: post.id,
            title: post.properties.title?.title?.[0]?.plain_text || '',
            slug: post.properties.slug?.rich_text?.[0]?.plain_text || '',
            tags:
              post.properties.tags?.multi_select?.map((tag) => tag.name) || [],
            content: contentPost?.content,
            createdAt: post.created_time
          };
        } catch (error) {
          console.error(`Error processing post ${post.id}:`, error);
          throw error;
        }
      })
    );

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getPostContent = async (slug: string): Promise<any> => {
  try {
    const response = await notion.databases.query({
      database_id: DATABASE_ID,
      filter: {
        or: [
          {
            property: 'slug',
            rich_text: {
              equals: slug
            }
          }
        ]
      }
    });

    const typedResponse = response as unknown as NotionDataBaseResponse;
    const firstResult = typedResponse.results[0];

    if (!firstResult) {
      throw new Error(`Post with slug ${slug} not found.`);
    }

    const pageId = firstResult.id;
    const n2m = new NotionToMarkdown({ notionClient: notion });

    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      title: firstResult.properties.title?.title?.[0]?.plain_text || '',
      content: mdString.parent
    };
  } catch (error) {
    console.error(`Error getting content for slug ${slug}:`, error);
    throw error;
  }
};
