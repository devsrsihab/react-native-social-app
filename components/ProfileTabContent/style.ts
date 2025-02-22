import {StyleSheet} from 'react-native';
import {horizontalScall, verticalScall} from '../../assets/styles/scaling';

export const profileTabContentStyle = StyleSheet.create({
  tabContentContainer: {
    paddingHorizontal: horizontalScall(21),
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: horizontalScall(150),
    height: verticalScall(106),
  },
});
