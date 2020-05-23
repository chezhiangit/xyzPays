import * as React from 'react';
import {View, Text} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
// import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../common/UIComponents/warningDialog';
// import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import {
  sendEmailVerificationCode,
  getUserEmailDetails,
} from '../AppStore/userVerificationActions';

class EmailVerificationStep1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDlg: false,
      dlgMsg: '',
      isLoading: false,
    };
  }

  componentDidMount() {
    this.props.getUserEmailDetails(
      this.onGetUserEmailSuccess,
      this.onGetUserEmailFailed,
    );
  }
  onStepNext = () => {
    this.setState({isLoading: true}, () =>
      this.props.sendEmailVerificationCode(
        this.onsendEmailVerificationCodeSuccess,
        this.onsendEmailVerificationCodeFailed,
      ),
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onGetUserEmailSuccess = () => {
    this.setState({isLoading: false});
  };

  onGetUserEmailFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onsendEmailVerificationCodeSuccess = () => {
    console.log('send verification code success');
    this.setState({isLoading: false});
    // this.props.navigation.navigate('ForgotPasswordStep3');
  };

  onsendEmailVerificationCodeFailed = errorMsg => {
    console.log('send verification code failed');
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
        <View style={styles.verificationContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTxt}>
              {I18n.t('userVerification.userInfo')}
            </Text>
          </View>
          <View style={styles.userInfoStepRow}>
            <Text style={styles.userInfoStep}>
              {I18n.t('userVerification.userInfoStep')}
            </Text>
          </View>
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>{this.props.email}</Text>
          </View>

          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('userVerification.sendVerification')}
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
  console.log('state from EmailVerificationStep1 ', state);
  return {
    email: state.userVerification?.emailDetails?.Email,
  };
};

const mapDispatchToProps = dispatch => ({
  sendEmailVerificationCode: (onSuccessCallback, onErrorCallback) =>
    dispatch(sendEmailVerificationCode(onSuccessCallback, onErrorCallback)),
  getUserEmailDetails: (onSuccessCallback, onErrorCallback) =>
    dispatch(getUserEmailDetails(onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmailVerificationStep1);
