import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
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
import {registerNewUser, getProviders} from '../../AppStore/loginActions';
import WarningDialog from '../../common/UIComponents/warningDialog';
import CheckBoxComponent from '../../common/UIComponents/CheckBox/CheckBox';
import ReadOnlyView from '../../common/UIComponents/readOnlyView/ReadOnlyView';

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

      isLoading: true,
      // RetypePassword: '',
      showDlg: false,
      dlgMsg: '',
      checkBoxesStatus: [],
    };
  }

  componentDidMount() {
    this.props.getProviders(
      this.onGetProvidersSuccess,
      this.onGetProvidersFailed,
    );
  }

  onGetProvidersSuccess = () => {
    this.setState({
      isLoading: false,
      checkBoxesStatus: Array(this.props.providers.length).fill(false),
    });
  };

  onGetProvidersFailed = errorMsg => {
    this.setState({isLoading: false, showDlg: true, dlgMsg: errorMsg});
    console.log(errorMsg);
  };

  onSubmitRegistration = () => {
    try {
      if (this.state.FirstName.length === 0) {
        throw {msg: 'Pls enter Frist Name'};
      } else if (this.state.LastName.length === 0) {
        throw {msg: 'Pls enter Last Name'};
      } else if (this.state.Mobile.length === 0) {
        throw {msg: 'Pls enter Mobile Number'};
      } else if (this.state.Email.length === 0) {
        throw {msg: 'Pls enter Login Email'};
      } else if (this.state.Password.length === 0) {
        throw {msg: 'Pls enter Password'};
      } else if (this.state.ConfirmPassword.length === 0) {
        throw {msg: 'Pls enter Confirm Password'};
      } else if (this.state.Password !== this.state.ConfirmPassword) {
        throw {msg: 'Password and Confirm Password mismatch.'};
      }
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
    } catch (e) {
      this.setState({showDlg: true, dlgMsg: e.msg});
    }
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

  onCheckBoxSelected = index => {
    const checkBoxesStatus = this.state.checkBoxesStatus;
    checkBoxesStatus[index] = !checkBoxesStatus[index];
    this.setState({checkBoxesStatus});
  };

  renderProviders = () => {
    // const checkBoxesStatus = [];
    const checkBoxes = this.props.providers?.map((el, index) => {
      // checkBoxesStatus.push(false);
      return (
        <View style={styles.provider}>
          <Image
            source={{
              isStatic: true,
              uri: el.ProviderIconImage,
              method: 'GET',
              // headers: {
              //   clubId: NetTool.clubId,
              //   'Ocp-Apim-Subscription-Key': NetTool.subscriptionKey,
              // },
            }}
            style={styles.providerImage}
            defaultSource={4}
          />
          <CheckBoxComponent
            btnName={el.ProviderName}
            onClick={() => this.onCheckBoxSelected(index)}
            isSelected={this.state.checkBoxesStatus[index]}
            btnTextStyle={{fontWeight: 'bold'}}
          />
        </View>
      );
    });
    // checkBoxesStatus.length === this.props.providers.length && this.setState({checkBoxesStatus});
    return checkBoxes;
  };

  render() {
    // const {navigation} = this.props;
    return (
      <View style={[BaseStyles.baseContainer]}>
        <KeyboardAwareScrollView>
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
              phone
            />
            <EmailInputComponent
              placeholder={I18n.t('userRegistration.email')}
              autoFocus={false}
              onEmailEntered={Email => this.setState({Email})}
              email={this.state.Email}
            />
            <PasswordInputComponent
              placeholder={I18n.t('userRegistration.password')}
              autoFocus={false}
              password={this.state.Password}
              onPassworEntered={text => this.setState({Password: text})}
            />
            <PasswordInputComponent
              placeholder={I18n.t('userRegistration.retypePassword')}
              autoFocus={false}
              password={this.state.ConfirmPassword}
              onPassworEntered={text => this.setState({ConfirmPassword: text})}
            />
            <View style={styles.labelContainer}>
              <ReadOnlyView
                label={I18n.t('userRegistration.providers')}
                labelStyle={styles.providersLabel}
              />
            </View>
            <View style={styles.providersContainer}>
              {this.renderProviders()}
            </View>
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
        </KeyboardAwareScrollView>
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

const mapStateToProps = state => ({
  providers: state.login?.providers,
});

const mapDispatchToProps = dispatch => ({
  registerNewUser: (payload, onSuccessCallback, onErrorCallback) =>
    dispatch(registerNewUser(payload, onSuccessCallback, onErrorCallback)),
  getProviders: (onSuccessCallback, onErrorCallback) =>
    dispatch(getProviders(onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserRegistration);
