import React, { useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { MovieList, MovieSearch, MovieSectionTitle } from '../../compoents';
import { usePopularMovies } from '../../hooks';
import AppScreen from '../../compoents/AppScreen';



const MovieHome = () => {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const navigation: any = useNavigation();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = usePopularMovies();

  const allMovies = data?.pages.flatMap((page) => page.results) || [];

  const filteredMovies = useMemo(() => {
    if (query.trim() === '') return allMovies;
    return allMovies.filter((movie: any) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, allMovies]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const isFavorite = (id: string) => favorites.includes(id);

  const handleGoToViewMovie = (movie: any) => {
    navigation.navigate(routes.VIEW_MOVIE_SCREEN, { movie });
  };

  return (
    <AppScreen isNotScrollable={true}>
      <MovieSectionTitle />
      <MovieSearch query={query} setQuery={setQuery} />
      <MovieList
        movies={filteredMovies}
        isFavorite={isFavorite}
        toggleFavorite={toggleFavorite}
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) fetchNextPage();
        }}
        isFetchingNextPage={isFetchingNextPage}
        onPress={handleGoToViewMovie}
      />
    </AppScreen>
  );
};

export default MovieHome;
