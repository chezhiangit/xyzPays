import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';

export default StyleSheet.create({
  loginViewContainer: {
    backgroundColor: Clors.appContainerBgColor,
    // width: '100%',
    // height: '75%',
    // paddingLeft: widthAdapter(20),
    // paddingRight: widthAdapter(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(60),
  },
  loginUserInfo: {
    width: '100%',
    height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  loginUserInfoTxt: {
    fontSize: fontscale(24),
    color: Clors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
  signinContainer: {
    width: '100%',
    marginTop: heightAdapter(100),
    // height: 300,
    // borderColor: 'red',
    // borderWidth: 1,
  },
});
