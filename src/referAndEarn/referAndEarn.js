import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import TextInputComponent from '../common/UIComponents/TextInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {fontscale} from '../uttils/adapterUtil';
import WarningDialog from '../common/UIComponents/warningDialog';

class ReferAndEarn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      email: '',
      name: '',
      mobileNumber: '',
    };
  }
  onSendMessage = () => {
    this.props.navigation.goBack();
  };

  onViewReferrals = () => {
    this.props.navigation.navigate('MyReferralsPage', {
      headerTitle: 'My Referrals',
    });
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
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
            inputValue={this.state.name}
            onTextChange={name => this.setState({name})}
          />
          <EmailInputComponent
            placeholder={I18n.t('referAndEarn.email')}
            autoFocus={false}
            onEmailEntered={email => this.setState({email})}
            email={this.state.email}
          />
          <TextInputComponent
            placeholder={I18n.t('referAndEarn.mobileNumber')}
            autoFocus={false}
            inputValue={this.state.mobileNumber}
            onTextChange={mobileNumber => this.setState({mobileNumber})}
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
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
      </View>
    );
  }
}

export default ReferAndEarn;
