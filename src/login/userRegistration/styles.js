import {StyleSheet} from 'react-native';
import Clors from '../../uttils/Colors';
import fontFamily from '../../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter, deviceWidth} from '../../uttils/adapterUtil';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
});
