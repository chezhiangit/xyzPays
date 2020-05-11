import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const RadioButton = props => {
  return (
    <TouchableOpacity accessible={false} onPress={props.onClick}>
      <View style={[styles.checkBoxBtnContainer, props.containerStyle]}>
        <View style={[styles.box, props.checkBoxStyle]}>
          {((props.status !== undefined && props.status === true) ||
            props.status === undefined) && (
            <View style={[styles.innerCircle, props.innerCircleStyle]} />
          )}
        </View>
        <Text style={[styles.btnText, props.btnTextStyle]}>
          {props.btnName}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RadioButton;
