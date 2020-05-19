import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import FontsSize from '../uttils/FontsSize';
import FontsWeight from '../uttils/FontsWeight';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import FontFamily from '../uttils/FontFamily';

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
    // paddingTop: heightAdapter(50),
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
    height: heightAdapter(70),
    borderWidth: 1,
    borderColor: '#737373',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: widthAdapter(3),
    borderBottomWidth: widthAdapter(4),
    zIndex: 100,
  },
  image: {
    height: heightAdapter(30),
    width: widthAdapter(30),
    borderColor: 'red',
    borderWidth: 1,
    marginRight: widthAdapter(10),
  },
  selectionBox: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: widthAdapter(20),
    paddingRight: widthAdapter(20),
    backgroundColor: '#333333',
  },
  selectedValue: {
    fontSize: fontscale(15),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'white', // '#737373',
    fontWeight: 'bold',
    marginLeft: widthAdapter(20),
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
    borderColor: '#ddd', // 'gray',
    borderBottomWidth: 2,
    backgroundColor: '#f2f2f2',
  },
  segmentItemText: {
    fontSize: fontscale(15),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: 'bold',
  },
  segmentedView: {
    width: '100%',
    position: 'absolute',
    top: heightAdapter(68),
    left: widthAdapter(0),
    borderBottomLeftRadius: widthAdapter(8),
    borderBottomRightRadius: widthAdapter(8),
    // backgroundColor: Colors.white,
    borderColor: '#737373',
    backgroundColor: '#f2f2f2',
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
  payoutItemContainer: {
    width: widthAdapter(745),
    borderColor: '#ddd',
    borderWidth: 1,
    borderLeftWidth: widthAdapter(8),
    borderLeftColor: Colors.pendingAmtBgColor,
    marginBottom: heightAdapter(15),
    backgroundColor: '#f2f2f2',
    padding: widthAdapter(20),
    paddingLeft: widthAdapter(30),
    paddingRight: widthAdapter(30),
  },
  payoutStatusRow: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: heightAdapter(20),
  },
  payoutLeftView: {
    width: widthAdapter(550),
    // borderWidth: 1,
    // borderColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  payoutRightView: {
    width: widthAdapter(150),
    // borderWidth: 1,
    // borderColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  payoutStatusLabel: {
    fontSize: fontscale(15),
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
    fontFamily: FontFamily.primaryFontFamily,
  },
  payoutStatus: {
    fontSize: fontscale(15),
    color: '#1b1819',
    fontWeight: 'bold',
    fontFamily: FontFamily.primaryFontFamily,
  },
  dateTimeAmountRow: {
    flexDirection: 'row',
    width: '100%',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateTimeTxt: {
    fontFamily: FontFamily.primaryFontFamily,
    fontSize: fontscale(12),
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: widthAdapter(15),
    // lineHeight: 0.2,
  },
  imageStyle: {
    height: widthAdapter(30),
    width: widthAdapter(30),
    borderColor: 'red',
    borderWidth: 1,
    marginRight: widthAdapter(10),
  },
});
