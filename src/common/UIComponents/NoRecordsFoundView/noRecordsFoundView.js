import React from 'react';
import {Text, View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import I18n from '../../../localization/i18n';

const NoRecordsFountView = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.noRecordsTxt}>{I18n.t('noRecordsFound.info')}</Text>
      <View style={styles.emptyRuler} />
    </View>
  );
};

export default NoRecordsFountView;
