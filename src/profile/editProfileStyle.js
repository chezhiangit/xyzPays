import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';
import FontsSize from '../uttils/FontsSize';
import Colors from '../uttils/Colors';

export default StyleSheet.create({
  editPhotoContainer: {
    flexDirection: 'row',
    height: heightAdapter(50),
    // borderWidth: 1,
    // borderColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosePhoto: {
    fontSize: fontscale(20),
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.primaryAppColor,
    fontWeight: 'bold',
  },
  interestContainer: {
    width: '100%',
    borderColor: 'gray',
    padding: heightAdapter(10),
    borderWidth: 2,
    // backgroundColor: 'gray',
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
  transparentView: {
    flex: 1,
    position: 'absolute',
    top: 0, // widthAdapter(-35),
    bottom: 0,
    left: 0, //widthAdapter(-35),
    right: 0, //widthAdapter(-35),
    backgroundColor: 'gray',
    zIndex: 0,
    opacity: 0.1,
  },
});
