// components/Movie/MovieSearch.tsx
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { COLORS } from '../../../lib/constants/color';


type Props = {
  query: string;
  setQuery: (text: string) => void;
};

const MovieSearch = ({ query, setQuery }: Props) => {
  return (
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
  );
};

export default MovieSearch;

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
});
