// import * as React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {heightAdapter, fontscale} from '../uttils/adapterUtil';

export default StyleSheet.create({
  baseContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.appContainerBgColor,
    // paddingTop:
    //   Platform.OS === 'ios' && DeviceInfo.hasNotch() ? heightAdapter(100) : 0,
    // paddingBottom:
    //   Platform.OS === 'ios' && DeviceInfo.hasNotch() ? heightAdapter(50) : 0,
  },
  emptyHView: {
    height: heightAdapter(50),
    width: '100%',
  },
  userInfo: {
    width: '100%',
    // height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: heightAdapter(50),
    marginTop: heightAdapter(50),
  },
  userInfoTxt: {
    fontSize: fontscale(24),
    color: Colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
});
