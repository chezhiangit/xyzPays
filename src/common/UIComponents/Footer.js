import * as React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const Footer = props => {
  const year = new Date().getFullYear();
  return (
    <View style={styles.Footer}>
      <Text style={styles.footerCopyRights}>{'\u00A9' + year}</Text>
      <Text style={styles.footerLogoName}> XYZIES. </Text>
      <Text style={styles.footerCopyRights}>All rights reserved.</Text>
    </View>
  );
};

export default Footer;
