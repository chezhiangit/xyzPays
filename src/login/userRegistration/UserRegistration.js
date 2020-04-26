import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../../common/BaseStyles';
import I18n from '../../localization/i18n';
// import Header from '../common/UIComponents/Header';
import Footer from '../../common/UIComponents/Footer';
import TextInputComponent from '../../common/UIComponents/TextInputComponent';
import PasswordInputComponent from '../../common/UIComponents/PasswordInputComponent';
import PrimaryButton from '../../common/UIComponents/PrimaryButton';
import EmailInputComponent from '../../common/UIComponents/EmailInputComponent';
// import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import {registerNewUser} from '../../AppStore/loginActions';
import WarningDialog from '../../common/UIComponents/warningDialog';

class UserRegistration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Mobile: '',
      Password: '',
      ConfirmPassword: '',

      isLoading: false,
      // RetypePassword: '',
      showDlg: false,
      dlgMsg: '',
    };
  }
  onSubmitRegistration = () => {
    this.setState({isLoading: true});
    const payload = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Mobile: this.state.Mobile,
      Password: this.state.Password,
      ConfirmPassword: this.state.ConfirmPassword,
    };
    console.log('onSubmitRegistration payload....', payload);

    this.props.registerNewUser(
      payload,
      this.onRegistrationSuccess,
      this.onRegistrationFailed,
    );
  };

  onRegistrationSuccess = () => {
    this.setState({isLoading: false}, () => this.props.navigation.goBack());
  };

  onRegistrationFailed = errorMsg => {
    this.setState({isLoading: false, showDlg: true, dlgMsg: errorMsg});
    console.log(errorMsg);
  };

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
        <ScrollView style={styles.scrollContainer}>
          {/* <View style={styles.loginUserInfo}>
            <Text style={styles.loginUserInfoTxt}>
              {I18n.t('login.userInfo')}
            </Text>
          </View> */}
          <TextInputComponent
            placeholder={I18n.t('userRegistration.firstName')}
            autoFocus={false}
            inputValue={this.state.FirstName}
            onTextChange={text => this.setState({FirstName: text})}
          />
          <TextInputComponent
            placeholder={I18n.t('userRegistration.lastName')}
            autoFocus={false}
            inputValue={this.state.LastName}
            onTextChange={text => this.setState({LastName: text})}
          />
          <TextInputComponent
            placeholder={I18n.t('userRegistration.mobileNumber')}
            autoFocus={false}
            inputValue={this.state.Mobile}
            onTextChange={text => this.setState({Mobile: text})}
          />
          <EmailInputComponent
            placeholder={I18n.t('userRegistration.email')}
            autoFocus={false}
            onEmailEntered={text => this.setState({Email: text})}
            email={this.state.Email}
          />
          <PasswordInputComponent
            placeholder={I18n.t('userRegistration.password')}
            autoFocus={false}
            Password={this.state.Password}
            onPassworEntered={text => this.setState({Password: text})}
          />
          <PasswordInputComponent
            placeholder={I18n.t('userRegistration.retypePassword')}
            autoFocus={false}
            Password={this.state.ConfirmPassword}
            onPassworEntered={text => this.setState({ConfirmPassword: text})}
          />
          {/* <View style={styles.signinContainer}> */}
          <View style={BaseStyles.emptyHView} />
          <PrimaryButton
            btnName={I18n.t('userRegistration.registerBtnName')}
            onSubmit={this.onSubmitRegistration}
          />
          {/* <View style={BaseStyles.emptyHView} />
            <LinkBtnComponent btnName={I18n.t('login.signUpNow')} />
            <LinkBtnComponent btnName={I18n.t('login.forgotPwd')} /> */}
          {/* </View> */}
        </ScrollView>
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  registerNewUser: (payload, onSuccessCallback, onErrorCallback) =>
    dispatch(registerNewUser(payload, onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRegistration);
