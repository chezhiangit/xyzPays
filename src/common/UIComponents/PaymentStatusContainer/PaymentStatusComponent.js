import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import BaseStyles from '../../BaseStyles';
import RoundButton from '../RoundButton';
import {heightAdapter} from '../../../uttils/adapterUtil';
import PrimayButton from '../PrimaryButton';
import I18n from '../../../localization/i18n';

const PaymentStatusComponent = props => {
  return (
    <View style={styles.paymentContainer}>
      <RoundButton
        onSubmit={props.onSubmit}
        btnName={props.btnName}
        btnStyle={props.btnStyle}
        textStyle={props.textStyle}
      />
      <View style={styles.paymentStatusContainer}>
        <Text style={styles.paymentStatus}>{props.paymentStatus}</Text>
        <View style={[BaseStyles.emptyHView, {height: heightAdapter(40)}]} />
        <Text style={styles.paymentDescription}>
          {props.paymentDescription1}
        </Text>
        <Text style={styles.paymentDescription}>
          {props.paymentDescription2}
        </Text>
        <Text style={styles.paymentDescription}>
          {props.paymentDescription3}
        </Text>
        <Text style={styles.paymentDescription}>
          {props.paymentDescription4}
        </Text>
        <Text />
      </View>
      <View
        style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <PrimayButton
          btnStyle={styles.viewBtnStyle}
          btnName={I18n.t('homePage.View')}
        />
      </View>
    </View>
  );
};

export default PaymentStatusComponent;
