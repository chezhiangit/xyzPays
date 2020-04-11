import {StyleSheet} from 'react-native';
import Clors from '../../uttils/Colors';
import fontFamily from '../../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../../uttils/adapterUtil';
import Colors from '../../uttils/Colors';

export default StyleSheet.create({
  forgotPwdViewContainer: {
    backgroundColor: Clors.appContainerBgColor,
    width: '100%',
    height: '75%',
    // paddingLeft: widthAdapter(20),
    // paddingRight: widthAdapter(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(60),
  },
  forgotPwdUserInfo: {
    width: '100%',
    height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  forgotPwdUserInfoTxt: {
    fontSize: fontscale(24),
    color: Clors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
  forgotStepOneNextContainer: {
    width: '100%',
    marginTop: heightAdapter(50),
    // height: 300,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  forgotPwdUserStep1: {
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPwdUserStep1Txt: {
    // height: heightAdapter(50),
    fontSize: fontscale(18),
    color: Colors.black,
    fontWeight: '500',
    // lineHeight: widthAdapter(1),
  },
});
