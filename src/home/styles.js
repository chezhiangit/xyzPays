import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import FontsSize from '../uttils/FontsSize';
import FontsWeight from '../uttils/FontsWeight';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    borderWidth: 1,
    borderColor: 'red',
    margin: widthAdapter(40),
  },
  logedInUserInfo: {
    flexDirection: 'row',
    width: '100%',
    // height: heightAdapter(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: heightAdapter(30),
    borderWidth: 1,
    borderColor: 'blue',
  },
  logedInUserHelloText: {
    fontSize: FontsSize.special,
    fontFamily: fontFamily.primaryFontFamily,
    color: Clors.black,
    fontWeight: FontsWeight.bold,
  },
  primaryColor: {
    color: Colors.primaryAppColor,
  },
  taskBtn: {
    height: heightAdapter(70),
  },
  approveBtnStyle: {
    backgroundColor: Clors.approvedAmtBgColor,
  },
  amountText: {
    fontSize: fontscale(25),
    fontWeight: '500',
  },
});
