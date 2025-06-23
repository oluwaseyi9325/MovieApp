// components/Movie/MovieCard.tsx
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


import styles from './MovieCard.styles';
import { MovieCardProps } from './MovieCard.types';
import AppText from '../../../AppText';
import { COLORS } from '../../../../lib/constants/color';

const MovieCard = ({ item, index, isFavorite, toggleFavorite, onPress }: MovieCardProps) => {
  const isLeftItem = index % 2 === 0;

  return (
    <Animatable.View
      animation="fadeInUp"
      delay={index * 100}
      useNativeDriver
      style={[styles.card, isLeftItem && { marginRight: 10 }]}
    >
      <TouchableOpacity onPress={() => onPress(item)}>
        <Image
          alt="image"
          contentFit="cover"
          source={{ uri: `https://image.tmdb.org/t/p/w342${item.poster_path}` }}
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
};

export default MovieCard;
