// import * as React from 'react';
import {StyleSheet} from 'react-native';
import Colors from '../uttils/Colors';
import {heightAdapter} from '../uttils/adapterUtil';

export default StyleSheet.create({
  baseContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.appContainerBgColor,
  },
  emptyHView: {
    height: heightAdapter(50),
    width: '100%',
  },
});
