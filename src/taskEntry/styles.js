import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  taskItemContainer: {
    flexDirection: 'row',
    height: heightAdapter(200),
    marginBottom: widthAdapter(10),
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // borderRadius: widthAdapter(4),
    // borderWidth: 1,
    // borderBottomWidth: widthAdapter(5),
    // borderColor: Colors.gray,
    // paddingTop: widthAdapter(30),
    // paddingBottom: widthAdapter(30),
    // paddingLeft: widthAdapter(10),
  },
  taskDetailsContainer: {
    width: '70%',
    height: '100%',
  },
  taskEntryImageContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskEntryImage: {
    height: heightAdapter(150),
    width: widthAdapter(150),
  },
  taskEntryProduct: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  taskEntryProductTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: '700',
    fontSize: widthAdapter(35),
  },
  dotWithTick: {
    height: widthAdapter(40),
    width: widthAdapter(40),
    // backgroundColor: Colors.primaryAppColor,
    // borderRadius: 100,
    marginRight: widthAdapter(10),
  },
  activeContainer: {
    width: widthAdapter(120),
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: widthAdapter(50),
    // borderWidth: 1,
    // borderColor: 'red',
    borderRadius: widthAdapter(5),
    backgroundColor: 'green',
  },
  statusTxt: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.white,
    fontWeight: '500',
  },
  skuContainer: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(75),
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: widthAdapter(50),
    // borderWidth: 1,
    // borderColor: 'red',
    // borderRadius: widthAdapter(5),
    // backgroundColor: 'green',
  },
  skuLabel: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#606060',
    fontWeight: 'bold',
  },
  skuTxt: {
    fontSize: widthAdapter(35),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#606060',
    fontWeight: 'bold',
  },
  questionContainer: {
    width: '100%',
    height: heightAdapter(100),
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  questionTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontWeight: '700',
    fontSize: widthAdapter(35),
  },
  dot: {
    width: widthAdapter(25),
    height: widthAdapter(25),
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: 'white',
    marginLeft: widthAdapter(5),
  },
  selectionContainer: {
    flexDirection: 'row',
    width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  selectionTxt: {
    fontSize: widthAdapter(25),
    fontFamily: fontFamily.primaryFontFamily,
    color: '#737373',
  },
  productImage: {
    height: heightAdapter(150),
    width: widthAdapter(200),
  },
});

export default styles;
