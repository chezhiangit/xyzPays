import * as React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
// import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
// import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../common/UIComponents/warningDialog';
import {veifyEmailVerificationCode} from '../AppStore/userVerificationActions';
import TextInputComponent from '../common/UIComponents/TextInputComponent';

class EmailVerificationStep2 extends React.Component {
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
    this.props.veifyEmailVerificationCode(
      this.props.userEmailVerification.ServiceToken,
      this.state.verificatioCode,
      this.onveifyEmailVerificationCodeSuccess,
      this.onveifyEmailVerificationCodeFailed,
    );
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onveifyEmailVerificationCodeSuccess = () => {
    console.log('veifyEmailVerificationCode success');
    this.setState({isLoading: false});
    // this.props.navigation.navigate('ForgotPasswordStep4');
  };

  onveifyEmailVerificationCodeFailed = errorMsg => {
    console.log('veifyEmailVerificationCode failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
      verificatioCode: '',
    });
    console.log(errorMsg);
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={styles.verificationContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTxt}>
              {I18n.t('userVerification.userInfo')}
            </Text>
          </View>
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('userVerification.emailStep2')}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <TextInputComponent
            placeholder={I18n.t('userVerification.emailPlaceHolder')}
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
    // sendMobileVerificationRes: state.forgotPassword.sendMobileVerificationRes,
    userEmailVerification: state.userVerification.emailVeification,
  };
};

const mapDispatchToProps = dispatch => ({
  veifyEmailVerificationCode: (
    ChangePasswordToken,
    ServiceToken,
    VerificationCode,
    onSuccessCallback,
    onErrorCallback,
  ) =>
    dispatch(
      veifyEmailVerificationCode(
        ChangePasswordToken,
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
)(EmailVerificationStep2);
