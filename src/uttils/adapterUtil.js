import {Dimensions, StatusBar, Platform, PixelRatio} from 'react-native';

// iphone 11
const designWidth = 828;

const designHeight = 1792;

export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;

export function widthAdapter(pt) {
  return (pt / designWidth) * deviceWidth;
}

export function heightAdapter(pt) {
  return (pt / designHeight) * deviceHeight;
}

export const fontscale = size => size * PixelRatio.getFontScale();

export function getStatusBarHeight() {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  }
  return 20;
}

export const statusBarHeight = getStatusBarHeight();
