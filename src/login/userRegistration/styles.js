import {StyleSheet} from 'react-native';
import fontFamily from '../../uttils/FontFamily';
import {widthAdapter, fontscale, heightAdapter} from '../../uttils/adapterUtil';

export default StyleSheet.create({
  scrollContainer: {
    flex: 1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    marginLeft: widthAdapter(40),
    marginRight: widthAdapter(40),
    paddingTop: heightAdapter(50),
  },
  labelContainer: {
    flexDirection: 'row',
    // width: '100%',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  providersLabel: {
    fontFamily: fontFamily.primaryFontFamily,
    fontWeight: 'bold',
    fontSize: fontscale(21),
  },
  interestContainer: {
    width: '100%',
    borderColor: 'gray',
    padding: heightAdapter(10),
    borderWidth: 2,
    // backgroundColor: 'gray',
  },
  providersContainer: {
    // flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
  provider: {
    flexDirection: 'row',
    height: heightAdapter(50),
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  providerImage: {
    height: heightAdapter(40),
    width: heightAdapter(40),
    // borderColor: 'gray',
    // borderWidth: 1,
  },
});
