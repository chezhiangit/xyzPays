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
    // height: heightAdapter(100),
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
  userInfoStepRow: {
    width: '100%',
    height: heightAdapter(75),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  userInfoStep: {
    fontSize: fontscale(17),
    color: Clors.black,
    // fontWeight: 'bold',
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
    // width: '100%',
    width: widthAdapter(800),
    height: heightAdapter(100),
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgotPwdUserStep1Txt: {
    // height: heightAdapter(50),
    fontSize: fontscale(15),
    color: Colors.black,
    // fontWeight: '500',
    // lineHeight: widthAdapter(1),
  },
  phoneImage: {
    height: heightAdapter(30),
    width: widthAdapter(30),
    borderWidth: 1,
    borderColor: 'red',
    marginRight: widthAdapter(10),
  },
  mobileNumberView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: heightAdapter(50),
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  mobileNumber: {
    fontSize: fontscale(15),
    // color: Colors.linkBtnColor,
    fontFamily: fontFamily.primaryFontFamily,
    height: heightAdapter(40),
    // borderColor: 'blue',
    // borderWidth: 1,
    alignSelf: 'center',
  },
});
