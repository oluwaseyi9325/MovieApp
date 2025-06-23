import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export default StyleSheet.create({
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
