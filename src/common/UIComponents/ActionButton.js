import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import BaseStyles from '../common/BaseStyles';

const ActionButton = props => {
  return (
    <View style={StyleSheet.buttonStyle}>
      <Text>{props.btnName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {},
});
