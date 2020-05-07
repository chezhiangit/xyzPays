import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../common/UIComponents/warningDialog';
import {veifyMobileVerificationCode} from '../AppStore/userVerificationActions';
import TextInputComponent from '../common/UIComponents/TextInputComponent';

class MobileVerificationStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      verificatioCode: '',
    };
  }
  onStepNext = () => {
    this.setState({isLoading: true});
    this.props.veifyMobileVerificationCode(
      this.props.userMobileVerification.ServiceToken,
      this.state.verificatioCode,
      this.onMobileVerificationCodeSuccess,
      this.onMobileVerificationCodeFailed,
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onMobileVerificationCodeSuccess = () => {
    console.log('veifyMobileVerificationCode success');
    this.setState({isLoading: false});
  };

  onMobileVerificationCodeFailed = errorMsg => {
    console.log('veifyMobileVerificationCode failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
      // verificatioCode: '',
    });
    console.log(errorMsg);
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('login.headerTitle')} /> */}
        <View style={styles.verificationContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTxt}>
              {I18n.t('userVerification.userInfoMobile')}
            </Text>
          </View>
          {/* <View style={styles.userInfoStepRow}>
            <Text style={styles.userInfoStep}>
              {I18n.t('userVerification.userInfoStepMobile')}3
            </Text>
          </View> */}
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('userVerification.mobileStep2')}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <TextInputComponent
            placeholder={I18n.t('userVerification.mobilePlaceHolder')}
            autoFocus={false}
            inputValue={this.state.verificatioCode}
            onTextChange={text => this.setState({verificatioCode: text})}
          />
          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('userVerification.step2Next')}
              onSubmit={this.onStepNext}
            />
          </View>
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from ForgotPasswordStep2 ', state);
  return {
    // userDetails: state.forgotPassword.userDetails,
    userMobileVerification: state.userVerification.mobileVeification,
  };
};

const mapDispatchToProps = dispatch => ({
  veifyMobileVerificationCode: (
    ServiceToken,
    VerificationCode,
    onSuccessCallback,
    onErrorCallback,
  ) =>
    dispatch(
      veifyMobileVerificationCode(
        ServiceToken,
        VerificationCode,
        onSuccessCallback,
        onErrorCallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MobileVerificationStep2);
