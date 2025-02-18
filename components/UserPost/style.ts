import {StyleSheet} from 'react-native';
import getFontFamily from '../../assets/fonts/getFontFamily';
import {
  horizontalScall,
  scaleFontSize,
  verticalScall,
} from '../../assets/styles/scaling';

const userPostStyle = StyleSheet.create({
  userPostWrapper: {
    marginVertical: verticalScall(20),
    borderBottomWidth: 1,
    borderColor: '#EFF2F6',
  },
  userPostHeaderWithProfile: {
    flexDirection: 'row',
    gap: horizontalScall(10),
    alignItems: 'center',
  },
  userPostHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostBody: {
    marginTop: verticalScall(16),
    height: horizontalScall(220),
  },
  userPostImage: {
    height: '100%',
    maxWidth: '100%',
  },
  userNames: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '500'),
  },
  userLocation: {
    fontSize: scaleFontSize(12),
    fontFamily: getFontFamily('Inter', '400'),
    color: '#79869F',
    marginTop: verticalScall(5),
  },
  userPostFooter: {
    flexDirection: 'row',
    gap: horizontalScall(27),
    alignItems: 'center',
    marginTop: verticalScall(20),
    marginLeft: horizontalScall(10),
  },
  userPostFooterIcons: {
    flexDirection: 'row',
    gap: horizontalScall(7),
    alignItems: 'center',
  },
});

export default userPostStyle;
