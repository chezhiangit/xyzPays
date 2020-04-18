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
    fontSize: fontscale(20),
    color: Colors.linkBtnColor,
    fontFamily: fontFamily.primaryFontFamily,
    height: heightAdapter(50),
  },
  box: {
    width: widthAdapter(30),
    height: widthAdapter(30),
    margin: widthAdapter(10),
    borderWidth: 1,
    borderColor: 'gray',
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
