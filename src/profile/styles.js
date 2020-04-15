import {StyleSheet} from 'react-native';
import Clors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../uttils/adapterUtil';

export default StyleSheet.create({
  profileViewContainer: {
    // backgroundColor: Clors.appContainerBgColor,
    // width: '100%',
    // height: '75%',
    // // paddingLeft: widthAdapter(20),
    // // paddingRight: widthAdapter(20),
    // alignItems: 'center',
    // // justifyContent: 'center',
    // padding: widthAdapter(60),
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
    // marginBottom: heightAdapter(10),
  },
  profileUserInfo: {
    width: '100%',
    height: heightAdapter(150),
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    // marginTop: heightAdapter(30),
  },
  profileUserInfoTxt: {
    fontSize: fontscale(24),
    color: Clors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
  },
  editProfileContainer: {
    width: '100%',
    marginTop: heightAdapter(100),
    alignItems: 'flex-end',
    justifyContent: 'center',
    // height: 300,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  labelContainer: {
    flexDirection: 'row',
    width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  accountInforLabel: {
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
  },
  viewStyle: {
    width: '50%',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
  },
  label: {
    fontSize: fontscale(15),
    fontWeight: 'bold',
  },
  value: {
    fontSize: fontscale(15),
  },
});
