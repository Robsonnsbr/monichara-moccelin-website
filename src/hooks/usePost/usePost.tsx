import { useCallback, useEffect, useState } from 'react';
import { getPosts } from 'src/services/notion';
import { Post } from 'src/types/notionType';

export const usePost = () => {
  const [postList, setPostList] = useState<Post[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getPosts();
      setPostList(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Erro ao pegar dados');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    postList,
    isLoading
  };
};
