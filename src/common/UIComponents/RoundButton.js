import * as React from 'react';
import {View, Text, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import SprinnerView from './hoc/SpinnerView';

const RoundButton = props => {
  return (
    <TouchableOpacity onPress={props.startSpinner}>
      <Animated.View
        style={[
          styles.roundBtn,
          props.btnStyle,
          {transform: [{rotate: props.spin}]},
        ]}>
        <Text style={[styles.btnName, props.textStyle]}>${props.btnName}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default SprinnerView(RoundButton);
