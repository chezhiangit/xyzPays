import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    // flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
    marginBottom: widthAdapter(175),
  },
  totalAddRow: {
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  toalEntriesView: {
    width: widthAdapter(300),
    alignItems: 'flex-start',
    // borderColor: 'green',
    // borderWidth: 1,
  },
  addView: {
    width: widthAdapter(300),
    alignItems: 'flex-end',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  leadCountBtnRow: {
    marginTop: heightAdapter(50),
    flexDirection: 'row',
    // height: heightAdapter(100),
    // borderColor: 'blue',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundBtnView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rountBtnCaption: {
    color: '#337ab7',
    fontSize: fontscale(15),
    fontWeight: 'bold',
  },
  countText: {
    fontSize: fontscale(25),
    color: 'white',
    fontWeight: 'bold',
  },
  roundBtnStyle: {
    height: heightAdapter(125),
    width: heightAdapter(125),
    backgroundColor: Colors.primaryAppColor,
  },

  addBtnRow: {
    flexDirection: 'row',
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  transHeaderView: {
    height: heightAdapter(50),
    marginTop: heightAdapter(100),
    marginBottom: heightAdapter(50),
    // borderWidth: 1,
    // borderColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: fontscale(17),
    fontWeight: 'bold',
    color: '#333',
  },
  transListView: {
    // marginTop: heightAdapter(30),
    borderWidth: 0.5,
    borderColor: '#a7a7a7',
  },
  transTaskItemContainer: {
    // margin: widthAdapter(20),
    backgroundColor: '#f2f2f2',
    padding: heightAdapter(20),
    marginBottom: heightAdapter(50),
  },
  taskItemContainer: {
    marginTop: heightAdapter(30),
    // marginBottom: heightAdapter(30),
    marginLeft: widthAdapter(20),
    marginRight: widthAdapter(20),
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  taskItemDivider: {
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    marginTop: heightAdapter(40),
    height: heightAdapter(20),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderColor: '#a7a7a7',
    backgroundColor: 'rgb(247, 247, 247)',
  },
  taskListView: {
    // width: widthAdapter(),
    // flex: 1,
    borderColor: '#a7a7a7',
    borderWidth: 1,
  },
  transTopView: {
    flexDirection: 'row',
    height: heightAdapter(50),
    justifyContent: 'space-between',
    marginBottom: heightAdapter(10),
  },
  tranIdContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: heightAdapter(50),
    // justifyContent: 'space-between',
  },
  transLabelViewStyle: {
    width: widthAdapter(150),
    height: heightAdapter(40),
    backgroundColor: '#f2f2f2',
    // borderWidth: 1,
    // borderColor: 'red',
  },
  tranStatus: {
    // width: widthAdapter(150),
    // height: heightAdapter(50),
    // borderWidth: 1,
  },
  tranStatusView: {
    // width: widthAdapter(150),
    height: heightAdapter(40),
  },
  transPendinglabel: {
    fontSize: fontscale(15),
    // fontWeight: 'bold',
    color: '#337ab7',
    backgroundColor: '#f2f2f2',
    height: heightAdapter(40),
  },
  transLeadLabel: {
    fontSize: fontscale(15),
    fontWeight: 'bold',
    color: Colors.primaryAppColor,
  },
  tansValue: {
    fontSize: fontscale(15),
    // fontWeight: 'bold',
    color: '#333',
  },
  dateTimeAmountRow: {
    flexDirection: 'row',
    width: '100%',
  },
  payoutLeftView: {
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
  imageStyle: {
    height: widthAdapter(30),
    width: widthAdapter(30),
    borderColor: 'red',
    borderWidth: 1,
    marginRight: widthAdapter(10),
  },

  labelContainer: {
    flexDirection: 'row',
  },
  label: {
    fontSize: fontscale(15),
    fontWeight: 'bold',
    color: '#737373',
  },
  value: {
    fontSize: fontscale(15),
    color: '#31708f',
  },
  labelViewStyle: {
    width: widthAdapter(500),
    height: heightAdapter(60),
  },
  valueViewStyle: {
    width: widthAdapter(175),
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: heightAdapter(60),
  },
  btnStyle: {
    height: heightAdapter(60),
    width: widthAdapter(250),
    fontSize: fontscale(12),
  },
});

export default styles;
