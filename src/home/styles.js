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
  transparentView: {
    flex: 1,
    position: 'absolute',
    top: widthAdapter(-35),
    bottom: 0,
    left: widthAdapter(-35),
    right: widthAdapter(-35),
    backgroundColor: 'gray',
    zIndex: 1,
    opacity: 0.1,
  },

  taskListContainer: {
    height: heightAdapter(435),
    // borderColor: 'gray',
    // borderWidth: 1,
    // justifyContent: 'center',
    // borderBottomWidth: 5,
    // borderLeftWidth: 3,
    // borderRightWidth: 3,
    // borderTopWidth: 2,
    // borderRadius: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollIndicator: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    height: heightAdapter(30),
    width: heightAdapter(30),
    borderRadius: 100,
    backgroundColor: 'white',
    margin: widthAdapter(5),
    borderWidth: 1,
    borderColor: 'gray',
  },
  taskList: {
    // height: heightAdapter(50),
    // // width: '100%',
    // borderWidth: 1,
    // borderColor: 'blue',
  },
  taskItemContainer: {
    width: widthAdapter(730),
    marginRight: widthAdapter(30),
  },
  taskItemCardContainer: {
    height: heightAdapter(300),
    width: widthAdapter(730),
    borderWidth: 1,
    borderColor: Colors.primaryAppColor,
    borderTopEndRadius: 3,
    borderBottomEndRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(10),
  },
  taskDetailRow: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  taskNameRow: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
  },
  productName: {
    fontSize: fontscale(25),
    fontWeight: '500',
    height: heightAdapter(70),
    width: widthAdapter(500),
    color: Clors.primaryAppColor,
  },
  productImageContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    height: heightAdapter(200),
    width: widthAdapter(200),
  },
  taskStartBtn: {
    height: heightAdapter(70),
  },
});
