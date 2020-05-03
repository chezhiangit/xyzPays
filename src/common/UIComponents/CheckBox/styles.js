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
    color: Colors.linkBtnColor,
    fontFamily: fontFamily.primaryFontFamily,
    height: heightAdapter(60),
    // textAlign: 'center',
  },
  box: {
    width: widthAdapter(35),
    height: widthAdapter(35),
    marginLeft: widthAdapter(10),
    marginRight: widthAdapter(20),
    borderWidth: 1,
    borderColor: 'gray',
    // alignSelf: 'center',
  },
  checkBoxBtnContainer: {
    flexDirection: 'row',
    // width: '100%',
    height: heightAdapter(60),
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: widthAdapter(10),
    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default styles;
