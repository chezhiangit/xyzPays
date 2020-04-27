import {StyleSheet} from 'react-native';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
import fontFamily from '../../../uttils/FontFamily';

const styles = StyleSheet.create({
  btnText: {
    fontSize: fontscale(15),
    // color: Colors.linkBtnColor,
    fontFamily: fontFamily.primaryFontFamily,
    height: heightAdapter(40),
  },
  box: {
    width: widthAdapter(30),
    height: widthAdapter(30),
    margin: widthAdapter(10),
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    // padding: widthAdapter(2),
    // backgroundColor: 'black',
  },
  innerCircle: {
    width: widthAdapter(20),
    height: widthAdapter(20),
    // margin: widthAdapter(2),
    // borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 100,
    // padding: widthAdapter(2),
    backgroundColor: 'gray',
  },
  checkBoxBtnContainer: {
    flexDirection: 'row',
    // width: '100%',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: widthAdapter(10),
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default styles;
