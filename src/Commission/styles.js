import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  commissionContainer: {
    flex: 1,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  dropdownAndFilterContainer: {
    flexDirection: 'row',
    width: widthAdapter(750),
    // borderWidth: 1,
    // borderColor: 'blue',
    zIndex: 999,
  },
  dropdownContainer: {
    width: widthAdapter(600),
    height: heightAdapter(100),
    borderWidth: 1,
    borderColor: '#737373',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: widthAdapter(3),
    borderBottomWidth: widthAdapter(4),
    // zIndex: 100,
    backgroundColor: '#333333',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  image: {
    height: heightAdapter(40),
    width: widthAdapter(40),
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
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'white', //'#737373',
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
    // zIndex: 0,
    opacity: 0.1,
  },
  segmentItemRow: {
    width: '100%',
    height: heightAdapter(75),
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderColor: 'gray',
    borderBottomWidth: 1,
    // backgroundColor: Colors.white,
    backgroundColor: '#eee',
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
    // backgroundColor: Colors.white,
    borderColor: '#737373',
    backgroundColor: '#eee',
  },
  commissionList: {
    marginTop: heightAdapter(50),
    marginBottom: heightAdapter(160),
  },
  commissionItemContainer: {
    flexDirection: 'row',
    height: heightAdapter(450),
    marginBottom: widthAdapter(75),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: widthAdapter(4),
    borderWidth: 1,
    borderBottomWidth: widthAdapter(5),
    borderColor: Colors.gray,
    paddingTop: widthAdapter(30),
    paddingBottom: widthAdapter(30),
    paddingLeft: widthAdapter(10),
  },
  commissionDetailsContainer: {
    width: '80%',
    // height: '100%',
  },
  commissionImageContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commissionImage: {
    height: heightAdapter(100),
    width: widthAdapter(100),
  },
  commissionType: {
    width: '100%',
    height: heightAdapter(60),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  commissionTypeTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: '700',
    fontSize: fontscale(24),
  },
  amountStatusContainer: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: heightAdapter(20),
  },
  amountLabel: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
  },
  dollar: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'green',
    fontWeight: 'bold',
  },
  amount: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
  },
  statusLabel: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#a6a6a6',
    fontWeight: 'bold',
  },
  status: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'green',
    fontWeight: 'bold',
  },
  paymentDateContainer: {
    width: '100%',
    height: heightAdapter(65),
    flexDirection: 'row',
    marginTop: heightAdapter(20),
  },
  accountNoContainer: {
    width: '100%',
    height: heightAdapter(65),
    flexDirection: 'row',
    marginTop: heightAdapter(10),
  },
  reasonContainer: {
    width: '100%',
    height: heightAdapter(65),
    flexDirection: 'row',
    marginTop: heightAdapter(10),
  },
  paymentDateLabel: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  paymentDate: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  accountNoLabel: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  accountNo: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  reasonLabel: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  reason: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: 'bold',
  },
  statusFilterContainer: {
    marginLeft: widthAdapter(70),
    width: widthAdapter(70),
    borderColor: '#737373',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#737373',
    borderRadius: 100,
  },
  sliderContainer: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // padding: widthAdapter(30),
    paddingTop: heightAdapter(20),
    zIndex: 100,
  },
  sliderBtnStyle: {
    height: heightAdapter(50),
    width: widthAdapter(700),
    marginRight: widthAdapter(30),
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: widthAdapter(20),
    backgroundColor: '#f2f2f2',
    borderRadius: 0,
    // borderRadius: widthAdapter(50),
  },
  sliderBtnContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderColor: 'blue',
    // borderWidth: 1,
    paddingLeft: widthAdapter(20),
    backgroundColor: '#f2f2f2',
  },
  sliderBtnTxtStyle: {
    color: 'black',
  },
});

export default styles;
