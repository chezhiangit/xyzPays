import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const LinkBtnComponent = props => {
  return (
    <View style={[styles.linkBtnContainer, props.containerStyle]}>
      <TouchableOpacity accessible={false} onPress={props.onClick}>
        <Text style={[styles.btnText, props.btnTextStyle]}>
          {props.btnName}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LinkBtnComponent;
