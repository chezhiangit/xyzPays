import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
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

class ForgotPassword extends React.Component {
  onStepOneNext = () => {
    this.props.navigation.goBack();
  };

  //   onSignUp = () => {
  //     this.props.navigation.navigate('UserRegistration');
  //   };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('login.headerTitle')} /> */}
        <View style={styles.forgotPwdViewContainer}>
          <View style={styles.forgotPwdUserInfo}>
            <Text style={styles.forgotPwdUserInfoTxt}>
              {I18n.t('forgotPassword.userInfoStep1')}
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
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default ForgotPassword;
