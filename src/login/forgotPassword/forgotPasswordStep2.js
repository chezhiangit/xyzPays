import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../../common/BaseStyles';
import I18n from '../../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../../common/UIComponents/Footer';
import PrimaryButton from '../../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../../common/UIComponents/warningDialog';
import RadioButton from '../../common/UIComponents/RadioButtom/radioButton';
// import {displayPhoneNumber} from '../../uttils/UtilityFunctions';
import {sendMobileVerificationCode} from '../../AppStore/forgotPasswordActions';

class ForgotPasswordStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      showDlg: false,
      dlgMsg: '',
      mobileNumber: '1234567890',
      isLoading: false,
    };
  }

  onEmailEntered = userEmail => {
    this.setState({
      userEmail,
    });
  };
  onStepTwoNext = () => {
    this.setState({isLoading: true}, () =>
      this.props.sendMobileVerificationCode(
        this.props.changePasswordToken,
        this.onSendVerificationCodeSuccess,
        this.onSendVerificationCodeFailed,
      ),
    );
    // this.props.navigation.goBack();
  };

  onMadeMistake = () => {
    // this.props.navigation.goBack();
    this.props.navigation.navigate('ForgotPassword');
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

  onSendVerificationCodeSuccess = () => {
    console.log('send verification code success');
    // this.setState({isLoading: false});
    this.setState({
      isLoading: false,
      // showDlg: true,
      // dlgMsg: message,
      // sendVerificationCodeStatus: true,
    });
    this.props.navigation.navigate('ForgotPasswordStep3');
  };

  onSendVerificationCodeFailed = errorMsg => {
    console.log('send verification code failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
      // sendVerificationCodeStatus: true,
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
              {I18n.t('forgotPassword.userInfoStep')}2
            </Text>
          </View>
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('forgotPassword.step2')}
            </Text>
          </View>
          <RadioButton btnName={I18n.t('forgotPassword.recoveryMsg')} />
          <View style={styles.mobileNumberView}>
            <Text style={styles.phoneImage}>
              <Icon name="phone-square" size={15} color={'gray'} />
            </Text>
            {/* <Image style={styles.phoneImage} source={''} /> */}
            <Text style={styles.mobileNumber}>{this.props.mobileNumber}</Text>
          </View>
          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('forgotPassword.sendVerification')}
              onSubmit={this.onStepTwoNext}
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log('state from forgotpassword2 ', state);
  return {
    mobileNumber: state.forgotPassword.userDetails.MobileNumber,
    changePasswordToken: state.forgotPassword.userDetails.ChangePasswordToken,
  };
};

const mapDispatchToProps = dispatch => ({
  sendMobileVerificationCode: (
    ChangePasswordToken,
    onSuccessCallback,
    onErrorCallback,
  ) =>
    dispatch(
      sendMobileVerificationCode(
        ChangePasswordToken,
        onSuccessCallback,
        onErrorCallback,
      ),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ForgotPasswordStep2);
// export default ForgotPasswordStep2;
