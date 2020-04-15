import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
} from '../../../uttils/adapterUtil';
import Colors from '../../../uttils/Colors';

const ReactOnlyView = props => {
  return (
    <View style={[styles.viewStyle, props.viewStyle]}>
      <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    width: '100%',
    height: heightAdapter(100),
    backgroundColor: Colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: widthAdapter(5),
  },
  label: {
    fontSize: fontscale(30),
    color: 'black',
  },
});

export default ReactOnlyView;
