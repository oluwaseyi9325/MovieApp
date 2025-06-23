
const TMDB_API_KEY = process.env.EXPO_PUBLIC_TMDB_API_KEY
// import { TMDB_API_KEY } from '@env';
export const fetchPopularMovies = async ({ pageParam = 1 }: { pageParam?: number }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${pageParam}`
  );
  if (!res.ok) throw new Error('Error fetching data');
  return res.json();
};
