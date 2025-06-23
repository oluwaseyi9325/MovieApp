export type MovieItem = {
    id: number;
    title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
  };
  
  export type MovieCardProps = {
    item: MovieItem;
    index: number;
    isFavorite: (id: string) => boolean;
    toggleFavorite: (id: string) => void;
    onPress: (movie: MovieItem) => void;
  };
  