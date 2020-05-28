import {StyleSheet} from 'react-native';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
// import FontsSize from '../../../uttils/FontsSize';
// import FontsWeight from '../../../uttils/FontsWeight';
import fontFamily from '../../../uttils/FontFamily';

export default StyleSheet.create({
  container: {
    // paddingTop: 20,
    flex: 1,
    backgroundColor: 'white', // 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
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
    backgroundColor: 'rgb(242,242,242)', // Colors.primaryAppColor,
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
