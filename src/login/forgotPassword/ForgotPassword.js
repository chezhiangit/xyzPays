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
// import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../../common/UIComponents/warningDialog';
import {verifyUserEmail} from '../../AppStore/forgotPasswordActions';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
  }

  onEmailEntered = userEmail => {
    this.setState({
      userEmail,
    });
  };

  onStepOneNext = () => {
    // this.props.navigation.navigate('ForgotPasswordStep2');
    this.setState({isLoading: true});
    this.props.verifyUserEmail(
      this.state.userEmail,
      this.onVerifyEmailSuccess,
      this.onVerifyEmailFailed,
    );
  };

  //   onSignUp = () => {
  //     this.props.navigation.navigate('UserRegistration');
  //   };
  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onVerifyEmailSuccess = () => {
    console.log('verify email success');
    this.setState({isLoading: false});
    this.props.navigation.navigate('ForgotPasswordStep2');
  };

  onVerifyEmailFailed = errorMsg => {
    console.log('verify email failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
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
              {I18n.t('forgotPassword.userInfoStep')}1
            </Text>
          </View>
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('forgotPassword.step1')}
            </Text>
          </View>
          <View style={BaseStyles.emptyHView} />
          <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
            onEmailEntered={this.onEmailEntered}
            email={this.state.userEmail}
          />
          {/* <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
          /> */}
          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('forgotPassword.next')}
              onSubmit={this.onStepOneNext}
            />

            {/* <LinkBtnComponent
              btnName={I18n.t('login.signUpNow')}
              onClick={this.onSignUp}
            />
            <LinkBtnComponent btnName={I18n.t('login.forgotPwd')} /> */}
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
  console.log('state from forgotpassword ', state);
  return {};
};

const mapDispatchToProps = dispatch => ({
  verifyUserEmail: (email, onSuccessCallback, onErrorCallback) =>
    dispatch(verifyUserEmail(email, onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPassword);
