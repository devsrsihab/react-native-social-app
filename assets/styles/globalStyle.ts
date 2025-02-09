import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  header: {
    marginTop: 25,
    marginRight: 17,
    marginLeft: 26,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageIconInnerContainer: {
    position: 'relative',
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 5,
    borderColor: '#898DAE',
  },
  messageIconContainer: {
    width: 48,
    height: 48,
    borderRadius: '50%',
    backgroundColor: '#FBF9F9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageNumberWrapper: {
    backgroundColor: '#F35BAC',
    width: 15,
    height: 15,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    position: 'absolute',
    top: -4,
    left: 28,
  },
  messageNumber: {
    color: 'white',
    fontSize: 8,
  },

  // user stories
  userStoriesContainer: {
    flexDirection: 'row',

    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 28,
  },
});

export default globalStyle;
