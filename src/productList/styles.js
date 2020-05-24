import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import FontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  trendingContainer: {
    // flex: 1,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(30),
  },
  trendingList: {
    // marginTop: heightAdapter(50),
    // marginBottom: heightAdapter(200),
    padding: widthAdapter(20),
    // borderColor: 'red',
    // borderWidth: 1,
  },
  trendingItemContainer: {
    // flexDirection: 'row',
    // height: heightAdapter(400),
    marginBottom: widthAdapter(75),
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '100%',
    // borderRadius: widthAdapter(4),
    // borderWidth: 1,
    // borderBottomWidth: widthAdapter(5),
    // borderColor: Colors.gray,
    // paddingTop: widthAdapter(30),
    // paddingBottom: widthAdapter(30),
    // paddingLeft: widthAdapter(10),
    // borderWidth: 1,
    // borderColor: 'red',
  },
  trendingDetailsContainer: {
    // width: '70%',
    borderWidth: 1,
    borderColor: 'red',
  },
  trendingProduct: {
    flexDirection: 'row',
    // width: widthAdapter(500),
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'red',
    // borderWidth: 1,
    marginBottom: heightAdapter(20),
  },
  productRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: heightAdapter(60),
  },
  dotWithTick: {
    height: widthAdapter(40),
    width: widthAdapter(40),
    // backgroundColor: Colors.primaryAppColor,
    // borderRadius: 100,
    marginRight: widthAdapter(20),
    marginLeft: widthAdapter(20),
  },
  trendingProductTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: '700',
    fontSize: fontscale(20),
  },
  trendingImage: {
    height: heightAdapter(50),
    width: heightAdapter(50),
    // borderColor: 'green',
    // borderWidth: 1,
    marginRight: widthAdapter(20),
  },
  btnStyle: {
    height: heightAdapter(60),
    // width: widthAdapter(250),
    fontSize: fontscale(12),
    paddingLeft: widthAdapter(10),
    paddingRight: widthAdapter(10),
    // borderWidth: 1,
    // borderColor: 'greeen',
  },
  taskInfo: {
    marginLeft: widthAdapter(70),
  },
  taskDescription: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  taskDescriptionTxt: {
    color: '#737373',
    fontSize: fontscale(14),
    fontFamily: FontFamily.primaryFontFamily,
  },
  leadCommission: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: heightAdapter(30),
  },
  leadCommissionAmountTxt: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  leadCommissionTxt: {
    color: '#737373',
    fontSize: fontscale(14),
    fontFamily: FontFamily.primaryFontFamily,
  },
  confirmCommission: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
    marginTop: heightAdapter(30),
  },
  confirmCommissionAmountTxt: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  confirmCommissionTxt: {
    color: '#737373',
    fontSize: fontscale(14),
    fontFamily: FontFamily.primaryFontFamily,
  },
  referEarnContainer: {
    // height: heightAdapter(350),
    // width: '100%',
    // borderColor: '#737373',
    // borderWidth: 0.3,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    alignItems: 'center',
    // justifyContent: 'center',
    paddingBottom: heightAdapter(20),
    borderWidth: 1,
    borderColor: 'red',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: heightAdapter(20),
    paddingBottom: heightAdapter(40),
  },
  titlTextRefer: {
    fontSize: fontscale(35),
    fontFamily: FontFamily.primaryFontFamily,
    color: 'black',
    fontWeight: 'bold',
  },
  titlTextEarn: {
    fontSize: fontscale(35),
    fontFamily: FontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
  },
});

export default styles;
