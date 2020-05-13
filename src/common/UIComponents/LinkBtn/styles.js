import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
import fontFamily from '../../../uttils/FontFamily';

const styles = StyleSheet.create({
  btnText: {
    fontSize: widthAdapter(30),
    color: Colors.linkBtnColor,
    marginLeft: widthAdapter(17),
    fontFamily: fontFamily.primaryFontFamily,
    // borderWidth: 2,
    // borderColor: 'red',
    // height: 20,
  },
  linkBtnContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(10),
    // marginTop: heightAdapter(50),
    // borderWidth: 2,
    // borderColor: 'red',
  },
});

export default styles;
