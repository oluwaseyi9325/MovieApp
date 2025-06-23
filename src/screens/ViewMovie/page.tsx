import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  Share,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppScreen from '../../compoents/AppScreen';
import AppText from '../../compoents/AppText';
import { COLORS } from '../../lib/constants/color';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const ViewMovie = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const movie = route.params?.movie;

  const [isFavorite, setIsFavorite] = useState(false);

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${movie.title} (${movie.year})\n\nCheck it out on TMDB!`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  if (!movie) {
    return (
      <AppScreen>
        <AppText text="Movie not found" align="center" mt={40} />
      </AppScreen>
    );
  }

  return (
    <AppScreen>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Top Actions */}
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={26} color={"black"} />
          </TouchableOpacity>

          <View style={styles.actions}>
            <TouchableOpacity onPress={handleShare}>
              <Ionicons name="share-outline" size={22} color={"black"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleFavorite}>
              <AntDesign
                name={isFavorite ? 'heart' : 'hearto'}
                size={22}
                color={isFavorite ? 'red' : "black"}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Poster */}
        <Image source={{ uri: movie.image }} style={styles.poster} />

        {/* Info */}
        <AppText text={movie.title} weight="700" size={24} mt={16} mb={4} />
        <AppText
          text={`⭐ ${movie.rating} • ${movie.year}`}
          size={14}
          color="#FFA500"
          mb={10}
        />

        <AppText text="Overview" size={18} weight="600" mt={12} mb={6} />
        <AppText
          text={
            movie.overview ??
            'This is a dummy description for the selected movie. Add a full description if available.'
          }
          size={14}
          color={COLORS.GRAY}
        />

        {movie.runtime && (
          <AppText
            text={`Runtime: ${movie.runtime} minutes`}
            size={13}
            color={COLORS.GRAY}
            mt={12}
          />
        )}

        {movie.genres && (
          <View style={styles.genres}>
            {movie.genres.map((genre: string, index: number) => (
              <View key={index} style={styles.genreTag}>
                <AppText text={genre} size={12} color={"black"} />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </AppScreen>
  );
};

export default ViewMovie;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  actions: {
    flexDirection: 'row',
    gap: 18,
    marginRight: 2,
  },
  poster: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 12,
    gap: 8,
  },
  genreTag: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
});
