import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../../common/BaseStyles';
import I18n from '../../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../../common/UIComponents/Footer';
import EmailInputComponent from '../../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../../common/UIComponents/warningDialog';
import {changePassword} from '../../AppStore/forgotPasswordActions';

class ForgotPasswordStep4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
      newPassword: '',
      confirmPassword: '',
    };
  }

  onMadeMistake = () => {
    // this.props.navigation.goBack();
    this.props.navigation.navigate('ForgotPassword');
  };

  onStepNext = () => {
    if (this.state.newPassword === this.state.confirmPassword) {
      this.setState({isLoading: true});
      const payload = {
        CredentialKey: this.props.sendMobileVerificationRes.CredentialKey,
        NewPassword: this.state.newPassword,
      };
      this.props.changePassword(
        payload,
        this.onChangePasswordSuccess,
        this.onChangePasswordFailed,
      );
    } else {
      this.setState({showDlg: true, dlgMsg: I18n.t('forgotPassword.pwdError')});
    }
  };

  //   onSignUp = () => {
  //     this.props.navigation.navigate('UserRegistration');
  //   };
  // onCancel = () => {
  //   this.setState({showDlg: false});
  // };

  onConfirm = () => {
    if (this.state.success) {
      this.setState({showDlg: false});
      this.props.navigation.navigate('Login');
    } else {
      this.setState({showDlg: false});
    }
  };

  onChangePasswordSuccess = msg => {
    console.log('change password success');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: msg,
      success: true,
    });
  };

  onChangePasswordFailed = errorMsg => {
    console.log('change password failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
      success: false,
    });
    console.log(errorMsg);
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('login.headerTitle')} /> */}
        <View style={styles.forgotPwdViewContainer}>
          <View style={styles.forgotPwdUserInfo}>
            <Text style={styles.forgotPwdUserInfoTxt}>
              {I18n.t('forgotPassword.userInfo')}
            </Text>
          </View>
          <View style={styles.userInfoStepRow}>
            <Text style={styles.userInfoStep}>
              {I18n.t('forgotPassword.userInfoStep')}4
            </Text>
          </View>
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('forgotPassword.step4')}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <PasswordInputComponent
            placeholder={I18n.t('forgotPassword.newPasswordPlaceHolder')}
            autoFocus={false}
            onPassworEntered={newPassword => this.setState({newPassword})}
            password={this.state.newPassword}
          />
          <PasswordInputComponent
            placeholder={I18n.t('forgotPassword.confirmPasswordPlaceHolder')}
            autoFocus={false}
            onPassworEntered={confirmPassword =>
              this.setState({confirmPassword})
            }
            password={this.state.confirmPassword}
          />
          {/* <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
            onEmailEntered={this.onEmailEntered}
            email={this.state.userEmail}
          /> */}
          {/* <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
          /> */}
          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('forgotPassword.step4next')}
              onSubmit={this.onStepNext}
            />

            <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent
              btnName={I18n.t('forgotPassword.madeMistake')}
              onClick={this.onMadeMistake}
            />
          </View>
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from ForgotPasswordStep4 ', state);
  return {
    sendMobileVerificationRes: state.forgotPassword.sendMobileVerificationRes,
  };
};

const mapDispatchToProps = dispatch => ({
  changePassword: (payload, onSuccessCallback, onErrorCallback) =>
    dispatch(changePassword(payload, onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordStep4);
