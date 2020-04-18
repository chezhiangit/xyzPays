import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
// import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {fontscale} from '../uttils/adapterUtil';

class ReferAndEarn extends React.Component {
  onSendMessage = () => {
    this.props.navigation.goBack();
  };

  onViewReferrals = () => {
    this.props.navigation.navigate('MyReferralsPage', {
      headerTitle: 'My Referrals',
    });
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <ScrollView style={styles.scrollContainer}>
          {/* <View style={BaseStyles.emptyHView} /> */}
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTxt}>
              {I18n.t('referAndEarn.userInfo')}
            </Text>
          </View>
          <TextInputComponent
            placeholder={I18n.t('referAndEarn.name')}
            autoFocus={false}
          />
          <EmailInputComponent
            placeholder={I18n.t('referAndEarn.email')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('referAndEarn.mobileNumber')}
            autoFocus={false}
          />
          <View style={BaseStyles.emptyHView} />
          <PrimaryButton
            btnName={I18n.t('referAndEarn.sendBtnName')}
            onSubmit={this.onSendMessage}
          />
          <View style={BaseStyles.emptyHView} />
          <LinkBtnComponent
            onClick={this.onViewReferrals}
            btnName={I18n.t('referAndEarn.linkBtn')}
            btnTextStyle={{fontSize: fontscale(25)}}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ReferAndEarn;
