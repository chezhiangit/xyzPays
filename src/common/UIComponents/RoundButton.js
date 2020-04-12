import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './styles';
import SprinnerView from './hoc/SpinnerView';

const RoundButton = props => {
  return (
    <TouchableWithoutFeedback
      style={[styles.roundBtn, props.btnStyle]}
      onPress={props.startSpinner}>
      <Animated.View
        style={[
          styles.roundBtn,
          props.btnStyle,
          {transform: [{rotate: props.spin}]},
        ]}>
        <Text style={[styles.btnName, props.textStyle]}>${props.btnName}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default SprinnerView(RoundButton);
