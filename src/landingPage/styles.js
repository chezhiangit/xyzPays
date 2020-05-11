import {StyleSheet} from 'react-native';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import FontsSize from '../uttils/FontsSize';
import FontFamily from '../uttils/FontFamily';

export default StyleSheet.create({
  landingViewContainer: {
    backgroundColor: Colors.appContainerBgColor,
    // width: '100%',
    // height: '75%',
    paddingLeft: widthAdapter(30),
    paddingRight: widthAdapter(30),
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: widthAdapter(60),
    // borderColor: 'red',
    // borderWidth: 1,
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logedInUserInfo: {
    flexDirection: 'row',
    width: '100%',
    // height: heightAdapter(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightAdapter(30),
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  logedInUserHiText: {
    fontSize: fontscale(24),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: 'bold',
  },
  primaryColor: {
    color: Colors.primaryAppColor,
  },
  userMessage: {
    // width: '100%',
    flexDirection: 'row',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  userMessageTxt: {
    fontSize: fontscale(15),
    color: '#737373',
    // fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
  mainViewContainer: {
    // width: '100%',
    // width: widthAdapter(600),
    flexDirection: 'row',
    // marginTop: heightAdapter(100),
    // height: 300,
    // borderColor: 'green',
    // borderWidth: 1,
  },
  leftView: {
    width: '48%',
    height: heightAdapter(800),
    // borderColor: 'blue',
    // borderWidth: 1,
    marginRight: '2%',
  },
  rightView: {
    marginLeft: '2%',
    width: '48%',
    height: heightAdapter(800),
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  leftBannerView: {
    width: '100%',
    height: heightAdapter(700),
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: Colors.primaryAppColor,
  },
  bannerImageView: {
    height: heightAdapter(500),
    width: '100%',
    // borderColor: 'white',
    // borderWidth: 1,
  },
  bannerTextView: {
    // flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerViewText: {
    fontSize: fontscale(25),
    color: 'white',
    fontFamily: FontFamily.primaryFontFamily,
    fontWeight: 'bold',
  },
  rightBannerView: {
    width: '100%',
    height: heightAdapter(700),
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: Colors.primaryAppColor,
  },
  bannerBottom: {
    height: heightAdapter(100),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
