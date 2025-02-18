import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';
import {horizontalScall, scaleFontSize} from '../../assets/styles/scaling';

export const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: horizontalScall(12),
  },
  title: {
    fontSize: scaleFontSize(24),
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
  },
});
