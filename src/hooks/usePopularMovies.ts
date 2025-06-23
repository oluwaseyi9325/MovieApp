// hooks/usePopularMovies.ts
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPopularMovies } from '../lib/api/movie';


export const usePopularMovies = () => {
  return useInfiniteQuery({
    queryKey: ['popular-movies'],
    queryFn: fetchPopularMovies,
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.total_pages ? lastPage.page + 1 : undefined,
  });
};
