import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';
import {
  horizontalScall,
  scaleFontSize,
  verticalScall,
} from '../../assets/styles/scaling';

const userStoryStyle = StyleSheet.create({
  userStoryWrapper: {
    marginRight: horizontalScall(20),
    padding: horizontalScall(5),
  },

  userName: {
    textAlign: 'center',
    color: '#022150',
    fontSize: scaleFontSize(14),
    fontFamily: getFontFamily('Inter', '500'),
    marginTop: verticalScall(8),
  },
});

export default userStoryStyle;
