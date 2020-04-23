import {StyleSheet} from 'react-native';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
  deviceWidth,
} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
import FontsSize from '../../../uttils/FontsSize';
import FontsWeight from '../../../uttils/FontsWeight';
import fontFamily from '../../../uttils/FontFamily';

export default StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: 'white',
  },
  navItemStyle: {
    padding: widthAdapter(25),
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(15),
    // color: Colors.white,
  },
  navSectionStyle: {
    // backgroundColor: 'lightgrey',
  },
  sectionHeadingStyle: {
    paddingVertical: widthAdapter(10),
    paddingHorizontal: widthAdapter(5),
    backgroundColor: Colors.primaryAppColor,
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(20),
  },
  footerContainer: {
    padding: widthAdapter(20),
    backgroundColor: Colors.linkBtnColor,
  },
  sectionLine: {
    width: '100%',
    height: heightAdapter(2),
    backgroundColor: '#22caff',
  },
});
