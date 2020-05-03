import {StyleSheet} from 'react-native';
import {widthAdapter, heightAdapter, fontscale} from '../uttils/adapterUtil';
import Colors from '../uttils/Colors';
import fontFamily from '../uttils/FontFamily';

const styles = StyleSheet.create({
  faqContainer: {
    flex: 1,
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  faqItemContainer: {
    paddingBottom: widthAdapter(30),
    paddingTop: widthAdapter(30),
    marginTop: heightAdapter(20),
    marginBottom: heightAdapter(20),
    justifyContent: 'flex-start',
    width: '100%',
    borderRadius: widthAdapter(4),
    borderBottomWidth: widthAdapter(1),
    borderBottomColor: '#eee',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  expandCollapseHeader: {
    flexDirection: 'row',
    height: heightAdapter(100),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: widthAdapter(20),
    paddingRight: widthAdapter(20),
  },
  expandCollapseLeftChild: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: widthAdapter(600),
  },
  childTxt: {
    fontSize: fontscale(15),
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
  },
  expandCollapseRightChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: widthAdapter(50),
  },
  faqList: {
    marginTop: heightAdapter(50),
    marginBottom: heightAdapter(160),
  },
  dropDownIcon: {
    height: widthAdapter(40),
    width: widthAdapter(40),
    borderColor: 'red',
    borderWidth: 1,
  },
  faqDetailsContainer: {
    height: 0,
    backgroundColor: '#eee',
  },
  faqDetails: {
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: widthAdapter(20),
    paddingRight: widthAdapter(20),
  },
  emailphoneIcon: {
    marginRight: widthAdapter(5),
  },
  faqDetailsTxt: {
    fontFamily: fontFamily.primaryFontFamily,
    color: '#333',
    fontSize: fontscale(20),
    textAlign: 'justify',
  },
  sectionTitle: {
    fontSize: fontscale(25),
    fontWeight: 'bold',
    fontFamily: fontFamily.primaryFontFamily,
    fontStyle: 'italic',
    color: Colors.primaryAppColor,
  },
  sectionHeader: {
    height: heightAdapter(100),
    width: '100%',
    marginBottom: heightAdapter(30),
  },
});

export default styles;
