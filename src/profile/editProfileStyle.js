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
});
