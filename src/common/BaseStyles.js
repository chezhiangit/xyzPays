// import * as React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../uttils/Colors';
import {heightAdapter} from '../uttils/adapterUtil';
import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

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
});
