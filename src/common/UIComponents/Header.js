import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerName}>{props.headerName}</Text>
    </View>
  );
};

export default Header;
