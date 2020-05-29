import {StyleSheet} from 'react-native';
// import Clors from '../uttils/Colors';
// import fontFamily from '../uttils/FontFamily';
// import FontsSize from '../uttils/FontsSize';
// import FontsWeight from '../uttils/FontsWeight';
import {
  widthAdapter,
  fontscale,
  heightAdapter,
} from '../../../uttils/adapterUtil';
// import Colors from '../uttils/Colors';
// import FontFamily from '../uttils/FontFamily';

export default StyleSheet.create({
  emptyRuler: {
    width: widthAdapter(700),
    borderColor: '#d7d9da',
    borderBottomWidth: 1,
    borderTopWidth: 1,
    marginBottom: heightAdapter(20),
    marginTop: heightAdapter(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: widthAdapter(5),
    backgroundColor: '#f6f6f6',
  },
  mainContainer: {
    height: heightAdapter(200),
    borderColor: '#ccc',
    borderWidth: 0.3,
    marginTop: widthAdapter(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecordsTxt: {
    fontSize: fontscale(15),
    color: '#262626',
    fontWeight: 'bold',
  },
});
