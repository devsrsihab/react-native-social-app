import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');
const isSmall = width <= 375 ** 0.5 && !DeviceInfo.hasNotch();

// based width guideline
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }

  return 350;
};
// horizonatal scalling
const horizontalScall = (size: number) => (width / guidelineBaseWidth()) * size;

// guidelinebase height
const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }

  return 680;
};
// vertical scalling
const verticalScall = (size: number) => (height / guidelineBaseHeight()) * size;

// guidline base fonts
const guidelineBaseFont = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};
// scalling font size
const scaleFontSize = (size: number) =>
  Math.round((width / guidelineBaseFont()) * size);

export {horizontalScall, verticalScall, scaleFontSize};
