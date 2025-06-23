// components/Movie/MovieList.tsx
import React from 'react';
import { FlatList } from 'react-native';
import AppText from '../../AppText';
import MovieCard from './MovieCard/MovieCard';


type Props = {
    movies: any[];
    isFavorite: (id: string) => boolean;
    toggleFavorite: (id: string) => void;
    onEndReached: () => void;
    isFetchingNextPage: boolean;
    onPress: (movie: any) => void;
};

const MovieList = ({
    movies,
    isFavorite,
    toggleFavorite,
    onEndReached,
    isFetchingNextPage,
    onPress,
}: Props) => {
    return (
        <FlatList
            data={movies}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            renderItem={({ item, index }) => (
                <MovieCard
                    item={item}
                    index={index}
                    isFavorite={isFavorite}
                    toggleFavorite={toggleFavorite}
                    onPress={onPress}
                />
            )}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.7}
            ListFooterComponent={
                isFetchingNextPage ? <AppText text="Loading more..." align="center" mt /> : null
            }
            contentContainerStyle={{
                paddingBottom: 40,
                paddingTop: 10,
                // paddingHorizontal: 10,
            }}
            showsVerticalScrollIndicator={false}
        />
    );
};

export default MovieList;
