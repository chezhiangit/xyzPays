import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import FontsSize from '../uttils/FontsSize';
import FontsWeight from '../uttils/FontsWeight';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';

const paymentBtnStyle = {
  backgroundColor: Clors.approvedAmtBgColor,
  position: 'absolute',
  top: heightAdapter(-80), //heightAdapter(0),
  left: widthAdapter(65),
};

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    marginBottom: widthAdapter(150),
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
    position: 'absolute',
    top: heightAdapter(-80), //heightAdapter(0),
    left: widthAdapter(65),
  },
  paidBtnStyle: {
    ...paymentBtnStyle,
    backgroundColor: Clors.paidAmtBgColor,
  },
  pendingBtnStyle: {
    ...paymentBtnStyle,
    backgroundColor: Clors.pendingAmtBgColor,
  },
  deniedBtnStyle: {
    ...paymentBtnStyle,
    backgroundColor: Clors.deniedAmtBgColor,
  },
  amountText: {
    fontSize: fontscale(25),
    fontWeight: '500',
  },
});
