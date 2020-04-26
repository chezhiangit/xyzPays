import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
import Header from '../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import EmailInputComponent from '../common/UIComponents/EmailInputComponent';
import PasswordInputComponent from '../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {authenticateUser} from '../AppStore/loginActions';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: '',
      isLoading: false,
    };
  }

  onSubmitLogin = () => {
    this.setState({isLoading: true});
    const userCredential = {
      userName: this.state.userName,
      password: this.state.password,
    };
    console.log('onSubmitLogin....', userCredential);

    this.props.authenticateUser(
      userCredential,
      this.onLoginSuccess,
      this.onLoginFailed,
    );
  };

  onLoginSuccess = () => {
    this.setState({isLoading: false});
  };

  onLoginFailed = errorMsg => {
    this.setState({isLoading: false});
    console.log(errorMsg);
  };

  onSignUp = () => {
    this.props.navigation.navigate('UserRegistration');
  };

  onForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  onEmailEntered = userName => {
    this.setState({
      userName,
    });
  };

  onPassworEntered = password => {
    console.log('password ...', password);
    this.setState({
      password,
    });
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        {/* <Header headerName={I18n.t('login.headerTitle')} /> */}
        <View style={styles.loginViewContainer}>
          <View style={styles.loginUserInfo}>
            <Text style={styles.loginUserInfoTxt}>
              {I18n.t('login.userInfo')}
            </Text>
          </View>
          <EmailInputComponent
            placeholder={I18n.t('login.emailPlaceHolder')}
            autoFocus={false}
            onEmailEntered={this.onEmailEntered}
          />
          <PasswordInputComponent
            placeholder={I18n.t('login.passwordPlaceHolder')}
            autoFocus={false}
            onPassworEntered={this.onPassworEntered}
          />
          <View style={styles.signinContainer}>
            <PrimaryButton
              btnName={I18n.t('login.loginBtnName')}
              onSubmit={this.onSubmitLogin}
            />
            <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent
              btnName={I18n.t('login.signUpNow')}
              onClick={this.onSignUp}
            />
            <LinkBtnComponent
              btnName={I18n.t('login.forgotPwd')}
              onClick={this.onForgotPassword}
            />
          </View>
        </View>
        <Footer />
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
        <Spinner visible={this.state.isLoading} textContent={'Loading...'} />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  authenticateUser: (userCredential, onSuccessCallback, onErrorCallback) =>
    dispatch(
      authenticateUser(userCredential, onSuccessCallback, onErrorCallback),
    ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
