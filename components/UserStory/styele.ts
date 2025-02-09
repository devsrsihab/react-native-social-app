import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';

const userStoryStyle = StyleSheet.create({
  userStoryWrapper: {
    marginRight: 20,
    padding: 5,
  },

  userName: {
    textAlign: 'center',
    color: '#022150',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', '500'),
    marginTop: 8,
  },
});

export default userStoryStyle;
