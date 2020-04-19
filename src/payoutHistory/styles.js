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
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    marginBottom: widthAdapter(150),
  },
  payoutHistoryContainer: {
    flex: 1,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  logedInUserInfo: {
    // flexDirection: 'row',
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
  dropdownContainer: {
    width: '100%',
    height: heightAdapter(100),
    borderWidth: 1,
    borderColor: '#737373',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: widthAdapter(3),
    borderBottomWidth: widthAdapter(4),
    zIndex: 100,
  },
  image: {
    height: heightAdapter(40),
    width: widthAdapter(40),
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: widthAdapter(10),
  },
  selectionBox: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingLeft: widthAdapter(10),
  },
  selectedValue: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: 'bold',
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
  segmentItemRow: {
    width: '100%',
    height: heightAdapter(75),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    backgroundColor: Colors.white,
  },
  segmentItemText: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: 'bold',
  },
  segmentedView: {
    width: '100%',
    position: 'absolute',
    top: heightAdapter(99),
    left: widthAdapter(0),
    borderBottomLeftRadius: widthAdapter(8),
    borderBottomRightRadius: widthAdapter(8),
    backgroundColor: Colors.white,
    borderColor: '#737373',
  },
  primaryColor: {
    color: Colors.primaryAppColor,
  },
  transferBtn: {
    height: heightAdapter(70),
  },
  availableAmount: {
    width: '100%',
  },
  availableAmountTxt: {
    fontSize: fontscale(24),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'black',
    fontWeight: 'bold',
  },
  notEnoughAmountTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(14),
    color: '#a94442',
  },
  payoutList: {
    marginTop: heightAdapter(50),
    marginBottom: heightAdapter(160),
  },
});
