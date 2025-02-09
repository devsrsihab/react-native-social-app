import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';

const userStoryStyle = StyleSheet.create({
  userStoryWrapper: {
    marginRight: 20,
    padding: 5,
  },
  userStoryImageWrapper: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: 3,
    borderRadius: 65,
  },
  userName: {
    textAlign: 'center',
    color: '#022150',
    fontSize: 14,
    fontFamily: getFontFamily('Inter', '500'),
    marginTop: 8,
  },
  userStoryImage: {
    width: 65,
    height: 65,
    objectFit: 'cover',
  },
});

export default userStoryStyle;
