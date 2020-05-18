import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../../uttils/adapterUtil';
import Colors from '../../uttils/Colors';
import fontFamily from '../../uttils/FontFamily';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(20),
    marginRight: widthAdapter(20),
    paddingTop: heightAdapter(30),
    marginBottom: widthAdapter(175),
  },
  topView: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'blue',
    // width: widthAdapte
    marginBottom: heightAdapter(20),
  },
  leftView: {
    width: widthAdapter(575),
    // height: heightAdapter(200),
    // borderWidth: 1,
    // borderColor: 'green',
  },
  transIdView: {
    flexDirection: 'row',
    marginBottom: heightAdapter(20),
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  transIdLabel: {
    color: '#777',
    fontSize: fontscale(18),
    marginRight: widthAdapter(20),
    fontWeight: 'bold',
  },
  transIdTxt: {
    // color: '#777',
    fontSize: fontscale(21),
    fontWeight: 'bold',
  },
  dateTimeAmountRow: {
    flexDirection: 'row',
    // width: '100%',
  },
  dateTimeLeftView: {
    width: widthAdapter(550),
    // borderWidth: 1,
    // borderColor: 'blue',
    // alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateTimeTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    fontSize: fontscale(12),
    color: 'grey',
    fontWeight: 'bold',
    marginLeft: widthAdapter(15),
    // lineHeight: 0.2,
  },
  rightView: {
    width: widthAdapter(210),
    // height: heightAdapter(200),
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'center',
  },
  amountTxt: {
    fontSize: fontscale(30),
    color: Colors.primaryAppColor,
    // fontWeight: 'bold',
  },
  statusView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: widthAdapter(5),
    paddingBottom: widthAdapter(5),
    paddingLeft: widthAdapter(10),
    paddingRight: widthAdapter(10),
    backgroundColor: Colors.primaryAppColor,
    borderRadius: widthAdapter(50),
    borderWidth: 1,
    borderColor: Colors.primaryAppColor,
    marginTop: heightAdapter(20),
  },
  statusTxt: {
    fontSize: fontscale(15),
    color: 'white',
  },
  productView: {
    borderColor: '#a7a7a7',
    borderWidth: 1,
  },
  imageView: {
    margin: widthAdapter(20),
    // height: heightAdapter(220),
    // width: heightAdapter(220),
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: heightAdapter(200),
    width: heightAdapter(200),
  },
  labelContainer: {
    flexDirection: 'row',
  },
  viewStyle: {
    paddingLeft: widthAdapter(20),
    width: '50%',
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: fontscale(15),
    fontWeight: 'bold',
  },
  value: {
    fontSize: fontscale(15),
  },
  logRefresView: {
    flexDirection: 'row',
    width: widthAdapter(787),
    borderColor: '#a7a7a7',
    borderWidth: 1,
    marginTop: heightAdapter(40),
    padding: heightAdapter(20),
    alignItems: 'center',
  },
  logTxt: {
    fontSize: fontscale(15),
  },
  logContainer: {
    flexDirection: 'row',
    width: widthAdapter(787),
    marginTop: heightAdapter(20),
    marginBottom: heightAdapter(20),
  },
  logLeftView: {
    width: widthAdapter(100),
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logRightView: {
    width: widthAdapter(687),
  },
  logTitle: {
    fontSize: fontscale(14),
  },
  logDetails: {
    fontSize: fontscale(12),
    color: 'rgba(0,0,0,0.5)',
  },
});

export default styles;
