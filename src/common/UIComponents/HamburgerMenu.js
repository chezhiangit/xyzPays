import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';

const HamburgerMenu = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.menu}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerMenu;
