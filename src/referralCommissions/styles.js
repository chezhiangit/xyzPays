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
  commissionList: {
    marginTop: heightAdapter(50),
    marginBottom: heightAdapter(160),
  },
  commissionItemContainer: {
    flexDirection: 'row',
    // height: heightAdapter(350),
    marginBottom: widthAdapter(75),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: widthAdapter(4),
    borderWidth: 1,
    borderBottomWidth: widthAdapter(5),
    borderColor: '#737373',
    paddingTop: widthAdapter(30),
    paddingBottom: widthAdapter(30),
    paddingLeft: widthAdapter(10),
  },
  commissionDetailsContainer: {
    width: '100%',
    // height: '100%',
  },
  customerDetails: {
    width: '100%',
    // height: '20%', //heightAdapter(60),
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingLeft: widthAdapter(20),
    paddingRight: widthAdapter(20),
    paddingTop: heightAdapter(30),
  },
  emailphoneIcon: {
    // height: widthAdapter(20),
    // width: widthAdapter(20),
    // borderWidth: 1,
    // borderColor: 'red',
    marginRight: widthAdapter(5),
  },
  customerDetailsTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: 'bold',
    fontSize: fontscale(15),
  },
  customerDetailsLabel: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
    fontWeight: '400',
    fontSize: fontscale(15),
    // lineHeight: 2,
  },
});

export default styles;
