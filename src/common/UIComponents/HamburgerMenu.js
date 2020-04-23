import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import styles from './styles';

const HamburgerMenu = props => {
  // const {navigation} = props;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}>
      <View style={styles.menu}>
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
        <View style={styles.menuLine} />
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerMenu;
