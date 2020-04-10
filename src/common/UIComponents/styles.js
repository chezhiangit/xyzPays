import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../../uttils/adapterUtil';
import Colors from '../../uttils/Colors';
import FontsSize from '../../uttils/FontsSize';
import FontsWeight from '../../uttils/FontsWeight';
import fontFamily from '../../uttils/FontFamily';

export default StyleSheet.create({
  header: {
    height: heightAdapter(120),
    backgroundColor: Colors.primaryAppColor,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerName: {
    fontSize: FontsSize.headerName,
    fontWeight: FontsWeight.header,
    color: Colors.primaryFontColor,
    fontFamily: fontFamily.primaryFontFamily,
  },
  Footer: {
    flexDirection: 'row',
    height: heightAdapter(150),
    backgroundColor: Colors.footerBgColor,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  footerCopyRights: {
    fontSize: FontsSize.copyRights,
    color: Colors.copyRights,
    fontFamily: fontFamily.primaryFontFamily,
  },
  footerLogoName: {
    fontSize: FontsSize.copyRights,
    color: Colors.primaryAppColor,
    fontFamily: fontFamily.primaryFontFamily,
  },
  primaryBtn: {
    width: '100%',
    height: heightAdapter(100),
    // borderWidth: widthAdapter(2),
    backgroundColor: Colors.primaryAppColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: widthAdapter(5),
  },
  btnName: {
    fontSize: FontsSize.primaryBtnName,
    color: Colors.primaryFontColor,
    fontWeight: '400',
    fontFamily: fontFamily.primaryFontFamily,
  },
  textInputContainer: {
    height: heightAdapter(100),
    width: '100%',
    marginTop: heightAdapter(20),
    marginBottom: heightAdapter(20),
    fontFamily: fontFamily.primaryFontFamily,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  textInput: {
    height: '100%',
    width: '100%',
    fontSize: FontsSize.textInput,
    color: '#666',
    borderWidth: widthAdapter(1),
    borderRadius: widthAdapter(3),
    padding: widthAdapter(10),
    fontFamily: fontFamily.primaryFontFamily,
  },
  captionText: {
    position: 'absolute',
    top: heightAdapter(-25),
    left: widthAdapter(30),
    height: heightAdapter(50),
    fontSize: fontscale(12),
    backgroundColor: Colors.white,
    padding: widthAdapter(10),
    fontFamily: fontFamily.primaryFontFamily,
  },
  roundBtn: {
    height: heightAdapter(150),
    width: widthAdapter(150),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
