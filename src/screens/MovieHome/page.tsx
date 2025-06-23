import React, { useState, useMemo } from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { COLORS } from '../../lib/constants/color';
import AppScreen from '../../compoents/AppScreen';
import AppText from '../../compoents/AppText';
import { moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import routes from '../../navigation/routes';
import { useQuery } from '@tanstack/react-query';

const TMDB_API_KEY = 'fcd645b9c1ff124dc7ca3de2c5c8f1a4';

const fetchPopularMovies = async (pageNum:number) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${pageNum}`
  );
  return res.json(); 
};

const MovieHome = () => {
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const navigation: any = useNavigation();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['popular-movies'],
    queryFn: ()=>fetchPopularMovies(2),
  });
    
    console.log('Popular Movies Data:', data);
    

  const filteredMovies = useMemo(() => {
    const results = data?.results || [];
    if (query.trim() === '') return results;
    return results.filter((movie:any) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, data]);

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
      <AppText text="Popular Movies" weight="700" size={22} mt mb={5} />

      {/* Search Input */}
      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={28} color={COLORS.GRAY} style={styles.icon} />
        <TextInput
          placeholder="Search movie..."
          placeholderTextColor={COLORS.GRAY}
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Movie List */}
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }) => {
          const isLeftItem = index % 2 === 0;
          return (
            <Animatable.View
              animation="fadeInUp"
              delay={index * 100}
              useNativeDriver
              style={[styles.card, isLeftItem && { marginRight: 10 }]}
            >
              <TouchableOpacity onPress={() => handleGoToViewMovie(item)}>
                <Image
                  alt="image"
                  contentFit="cover"
                  source={{
                    uri: `https://image.tmdb.org/t/p/w342${item.poster_path}`,
                  }}
                  style={styles.poster}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => toggleFavorite(item.id.toString())}
                style={styles.favoriteIcon}
              >
                <AntDesign
                  name={isFavorite(item.id.toString()) ? 'heart' : 'hearto'}
                  size={18}
                  color={isFavorite(item.id.toString()) ? 'red' : '#ccc'}
                />
              </TouchableOpacity>

              <AppText
                text={item.title}
                size={13}
                weight="600"
                mt={6}
                mb={2}
                align="center"
              />
              <AppText
                text={item.release_date?.split('-')[0] || 'N/A'}
                size={11}
                color={COLORS.GRAY}
                mt
                mb={1}
              />
              <AppText
                text={`⭐ ${item.vote_average?.toFixed(1) || 0}`}
                mt
                mb
                size={11}
                color={'#FFA500'}
              />
            </Animatable.View>
          );
        }}
        ListEmptyComponent={
          <AppText text="No movies found" align="center" mt={30} />
        }
        contentContainerStyle={{
          paddingBottom: 40,
          paddingTop: 10,
          paddingHorizontal: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </AppScreen>
  );
};

export default MovieHome;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 10,
  },
  icon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 12,
    color: '#000',
  },
  card: {
    width: moderateScale(167),
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    position: 'relative',
  },
  poster: {
    width: moderateScale(150),
    height: 170,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 4,
  },
});
