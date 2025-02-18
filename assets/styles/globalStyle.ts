import {StyleSheet} from 'react-native';
import {horizontalScall, scaleFontSize, verticalScall} from './scaling';

const globalStyle = StyleSheet.create({
  header: {
    marginTop: verticalScall(25),
    marginRight: horizontalScall(17),
    marginLeft: horizontalScall(26),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIconInnerContainer: {
    position: 'relative',
    borderWidth: horizontalScall(2),
    paddingVertical: verticalScall(4),
    paddingHorizontal: horizontalScall(6),
    borderRadius: horizontalScall(5),
    borderColor: '#898DAE',
  },
  messageIconContainer: {
    width: horizontalScall(48),
    height: horizontalScall(48),
    borderRadius: '50%',
    backgroundColor: '#FBF9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageNumberWrapper: {
    backgroundColor: '#F35BAC',
    width: horizontalScall(15),
    height: horizontalScall(15),
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: verticalScall(2),
    paddingBottom: verticalScall(2),
    position: 'absolute',
    top: verticalScall(-4),
    left: horizontalScall(28),
  },
  messageNumber: {
    color: 'white',
    fontSize: scaleFontSize(8),
  },
  // user stories
  userStoriesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScall(20),
    marginHorizontal: horizontalScall(28),
  },

  // user post
  userPostsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScall(10),
    marginHorizontal: horizontalScall(24),
  },
});

export default globalStyle;
