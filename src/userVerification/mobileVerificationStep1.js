import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
// import {SafeAreaView} from 'react-native-safe-area-context';
import BaseStyles from '../common/BaseStyles';
import I18n from '../localization/i18n';
// import Header from '../../common/UIComponents/Header';
import Footer from '../common/UIComponents/Footer';
import PrimaryButton from '../common/UIComponents/PrimaryButton';
import LinkBtnComponent from '../common/UIComponents/LinkBtn/LinkBtn';
import styles from './styles';
import WarningDialog from '../common/UIComponents/warningDialog';
import RadioButton from '../common/UIComponents/RadioButtom/radioButton';
// import {displayPhoneNumber} from '../uttils/UtilityFunctions';
import {
  sendMobileVerificationCode,
  getUserMobileDetails,
} from '../AppStore/userVerificationActions';

class MobileVerificationStep1 extends React.Component {
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

  componentDidMount() {
    this.props.getUserMobileDetails(
      this.onGetMobileDetailsSuccess,
      this.onGetMobileDetailsFailed,
    );
  }

  onGetMobileDetailsSuccess = () => {
    this.setState({isLoading: false});
  };

  onGetMobileDetailsFailed = errorMsg => {
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  onStepTwoNext = () => {
    this.setState({isLoading: true}, () =>
      this.props.sendMobileVerificationCode(
        this.onSendVerificationCodeSuccess,
        this.onSendVerificationCodeFailed,
      ),
    );
  };

  onCancel = () => {
    this.setState({showDlg: false});
  };

  onConfirm = () => {
    this.setState({showDlg: false});
  };

  onSendVerificationCodeSuccess = () => {
    console.log('send verification code success');
    this.setState({isLoading: false});
  };

  onSendVerificationCodeFailed = errorMsg => {
    console.log('send verification code failed');
    this.setState({
      isLoading: false,
      showDlg: true,
      dlgMsg: errorMsg,
    });
    console.log(errorMsg);
  };

  render() {
    return (
      <View style={[BaseStyles.baseContainer]}>
        <View style={styles.verificationContainer}>
          <View style={styles.userInfo}>
            <Text style={styles.userInfoTxt}>
              {I18n.t('userVerification.userInfoMobile')}
            </Text>
          </View>
          {/* <View style={styles.userInfoStepRow}>
            <Text style={styles.userInfoStep}>
              {I18n.t('userVerification.userInfoStepMobile')}
            </Text>
          </View> */}
          <View style={styles.forgotPwdUserStep1}>
            <Text style={styles.forgotPwdUserStep1Txt}>
              {I18n.t('userVerification.userInfoStepMobile')}
            </Text>
          </View>
          {/* <RadioButton btnName={I18n.t('userVerification.recoveryMsg')} /> */}
          <View style={styles.mobileNumberView}>
            <Text style={styles.phoneImage}>
              <Icon name="phone-square" size={15} color={'gray'} />
            </Text>
            <Text style={styles.mobileNumber}>{this.props.mobileNumber}</Text>
          </View>
          <View style={styles.forgotStepOneNextContainer}>
            <PrimaryButton
              btnName={I18n.t('userVerification.sendVerification')}
              onSubmit={this.onStepTwoNext}
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
  console.log('state from mobileverification step 1 ', state);
  return {
    mobileNumber: state.userVerification?.mobileDetails?.Mobile,
  };
};

const mapDispatchToProps = dispatch => ({
  sendMobileVerificationCode: (onSuccessCallback, onErrorCallback) =>
    dispatch(sendMobileVerificationCode(onSuccessCallback, onErrorCallback)),
  getUserMobileDetails: (onSuccessCallback, onErrorCallback) =>
    dispatch(getUserMobileDetails(onSuccessCallback, onErrorCallback)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MobileVerificationStep1);
