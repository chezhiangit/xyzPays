import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
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
import RadioButton from '../../common/UIComponents/RadioButtom/radioButton';

class ForgotPasswordStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      showDlg: false,
      dlgMsg: '',
    };
  }

  onEmailEntered = userEmail => {
    this.setState({
      userEmail,
    });
  };
  onStepTwoNext = () => {
    this.props.navigation.goBack();
  };

  onMadeMistake = () => {
    this.props.navigation.goBack();
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
          <RadioButton btnName={'Recovery Mobile Number'} />
          <View style={styles.mobileNumberView}>
            <Image style={styles.phoneImage} source={''} />
            <Text style={styles.mobileNumber}>9123456789</Text>
          </View>
          {/* <View style={BaseStyles.emptyHView} /> */}
          {/* <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
            onEmailEntered={this.onEmailEntered}
          /> */}
          {/* <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
          /> */}
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
            {/* // <LinkBtnComponent btnName={I18n.t('login.forgotPwd')} /> */}
          </View>
        </View>
        <Footer />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          // onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default ForgotPasswordStep2;
