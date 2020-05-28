import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';
import FontsSize from '../../../uttils/FontsSize';
import fontFamily from '../../../uttils/FontFamily';

export default StyleSheet.create({
  paymentContainer: {
    // height: heightAdapter(500),
    width: widthAdapter(300),
    borderWidth: widthAdapter(1),
    borderColor: Colors.primaryAppColor,
    paddingBottom: heightAdapter(30),
  },
  paymentStatus: {
    fontSize: FontsSize.paymentStatus,
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: '500',
    color: Colors.black,
  },
  paymentStatusContainer: {
    marginTop: widthAdapter(100),
    alignItems: 'center',
  },
  paymentDescription: {
    height: heightAdapter(40),
    fontSize: FontsSize.payDescription,
    fontFamily: fontFamily.primaryFontFamily,
    color: Colors.gray,
  },
  viewBtnStyle: {
    width: widthAdapter(120),
    height: heightAdapter(70),
    fontWeight: '800',
  },
});
