import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  trendingContainer: {
    flex: 1,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  trendingList: {
    marginTop: heightAdapter(50),
    marginBottom: heightAdapter(160),
  },
  trendingItemContainer: {
    flexDirection: 'row',
    height: heightAdapter(400),
    marginBottom: widthAdapter(75),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderRadius: widthAdapter(4),
    borderWidth: 1,
    borderBottomWidth: widthAdapter(5),
    borderColor: Colors.gray,
    // paddingTop: widthAdapter(30),
    // paddingBottom: widthAdapter(30),
    // paddingLeft: widthAdapter(10),
    // borderWidth: 1,
    // borderColor: 'red',
  },
  trendingDetailsContainer: {
    width: '70%',
    // height: '100%',
  },
  trendingImageContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trendingImage: {
    height: heightAdapter(100),
    width: widthAdapter(100),
  },
  trendingProduct: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderColor: 'red',
    // borderWidth: 1,
    marginBottom: heightAdapter(20),
  },
  trendingProductTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: '700',
    fontSize: widthAdapter(35),
  },
  dotWithTick: {
    height: widthAdapter(40),
    width: widthAdapter(40),
    backgroundColor: Colors.primaryAppColor,
    borderRadius: 100,
    marginRight: widthAdapter(20),
    marginLeft: widthAdapter(20),
  },
  amountStatusContainer: {
    flexDirection: 'row',
    width: '100%',
    // height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: widthAdapter(90),
    marginBottom: heightAdapter(20),
  },
  amountLabel: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.black,
    fontWeight: '500',
  },
  dollar: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'green',
    fontWeight: '500',
  },
  amount: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: '500',
  },
  statusLabel: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: '500',
  },
  status: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: 'green',
    fontWeight: '500',
  },
  trendingStatusContainer: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: widthAdapter(90),
    marginBottom: heightAdapter(20),
  },
  trendingSalesContainer: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: widthAdapter(90),
    marginBottom: heightAdapter(20),
  },
  trendingSalesLabel: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.black,
    fontWeight: '500',
  },
  // paymentDateContainer: {
  //   width: '100%',
  //   height: heightAdapter(50),
  //   flexDirection: 'row',
  // },
  // accountNoContainer: {
  //   width: '100%',
  //   height: heightAdapter(50),
  //   flexDirection: 'row',
  // },
  // reasonContainer: {
  //   width: '100%',
  //   height: heightAdapter(50),
  //   flexDirection: 'row',
  // },
  // paymentDateLabel: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  // },
  // paymentDate: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  // },
  // accountNoLabel: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  // },
  // accountNo: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  // },
  // reasonLabel: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  // },
  // reason: {
  //   fontSize: widthAdapter(40),
  //   fontFamily: fontFamily.primaryFontFamily,
  //   color: '#737373',
  //   fontWeight: 'bold',
  // },
});

export default styles;
