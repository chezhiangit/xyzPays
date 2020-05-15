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
  taskItemContainer: {
    marginTop: heightAdapter(30),
    // marginBottom: heightAdapter(30),
    marginLeft: widthAdapter(20),
    marginRight: widthAdapter(20),
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
  labelContainer: {
    flexDirection: 'row',
    // width: widthAdapter(500),
    // height: heightAdapter(100),
    // width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
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
