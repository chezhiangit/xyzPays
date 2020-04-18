import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {
  widthAdapter,
  fontscale,
  heightAdapter,
  deviceWidth,
} from '../uttils/adapterUtil';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  userInfo: {
    width: '100%',
    height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
  },
  userInfoTxt: {
    fontSize: fontscale(24),
    color: Clors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
});
