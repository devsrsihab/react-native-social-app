import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  title: {
    fontSize: 24,
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
  },
});
