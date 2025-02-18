import {StyleSheet} from 'react-native';
import {horizontalScall} from '../../assets/styles/scaling';

const userProfileStyle = StyleSheet.create({
  userProfileImageWrapper: {
    borderWidth: 1,
    borderColor: '#F35BAC',
    padding: horizontalScall(3),
  },
  userProfileImage: {
    objectFit: 'cover',
  },
});

export default userProfileStyle;
