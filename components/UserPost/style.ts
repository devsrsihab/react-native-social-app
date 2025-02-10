import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';

const userPostStyle = StyleSheet.create({
  userPostWrapper: {
    marginVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
  },
  userPostHeaderWithProfile: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  userPostHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostBody: {
    marginTop: 16,
    height: 220,
  },
  userNames: {
    fontSize: 16,
    fontFamily: getFontFamily('Inter', '500'),
  },
  userLocation: {
    fontSize: 12,
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    marginTop: 5,
  },
  userPostFooter: {
    flexDirection: 'row',
    gap: 27,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  userPostFooterIcons: {
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
  },
});

export default userPostStyle;
