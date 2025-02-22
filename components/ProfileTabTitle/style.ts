import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';
import {scaleFontSize} from '../../assets/styles/scaling';

export const pfofileTabTitleStyle = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
    color: '#022150',
  },
  inActivetitle: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '500'),
    color: '#79869F',
  },
});
