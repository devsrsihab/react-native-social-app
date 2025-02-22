import {StyleSheet} from 'react-native';
import {horizontalScall, verticalScall} from '../../assets/styles/scaling';
import getFontFamily from '../../assets/fonts/getFontFamily';

const profileStyle = StyleSheet.create({
  profileImage: {
    width: horizontalScall(110),
    height: horizontalScall(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScall(76),
  },
  profileImageContent: {
    padding: horizontalScall(4),
    borderWidth: 2,
    borderColor: '#0150EC',
    borderRadius: horizontalScall(110),
  },
  userName: {
    fontSize: 20,
    fontFamily: getFontFamily('inter', '600'),
    color: '#022150',
    textAlign: 'center',
    marginTop: verticalScall(20),
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScall(41),
    marginTop: verticalScall(31),
    paddingBottom: verticalScall(32),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  state: {
    alignItems: 'center',
  },
  stateTitle: {
    fontSize: 20,
    fontFamily: getFontFamily('inter', '600'),
    color: '#022150',
  },
  stateType: {
    fontSize: 16,
    fontFamily: getFontFamily('inter', '400'),
    color: '#79869F',
  },
  tabContainer: {
    flex: 1,
    marginTop: verticalScall(32),
  },
});

export default profileStyle;
