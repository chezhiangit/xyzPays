import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';

class LoginPage extends React.Component {
  onSubmitLogin = () => {
    this.props.navigation.replace('HomePage');
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        <Header headerName={I18n.t('login.headerTitle')} />
        <View style={styles.loginViewContainer}>
          <View style={styles.loginUserInfo}>
            <Text style={styles.loginUserInfoTxt}>
              {I18n.t('login.userInfo')}
            </Text>
          </View>
          <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
          />
          <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
          />
          <View style={styles.signinContainer}>
            <PrimaryButton
              btnName={I18n.t('login.loginBtnName')}
              onSubmit={this.onSubmitLogin}
            />
            <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent btnName={I18n.t('login.signUpNow')} />
            <LinkBtnComponent btnName={I18n.t('login.forgotPwd')} />
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

export default LoginPage;
