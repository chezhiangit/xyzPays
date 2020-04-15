import * as React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
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

class UserRegistration extends React.Component {
  onSubmitRegistration = () => {
    this.props.navigation.goBack();
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
          />
          <TextInputComponent
            placeholder={I18n.t('userRegistration.lastName')}
            autoFocus={false}
          />
          <TextInputComponent
            placeholder={I18n.t('userRegistration.mobileNumber')}
            autoFocus={false}
          />
          <EmailInputComponent
            placeholder={I18n.t('userRegistration.email')}
            autoFocus={false}
          />
          <PasswordInputComponent
            placeholder={I18n.t('userRegistration.password')}
            autoFocus={false}
          />
          <PasswordInputComponent
            placeholder={I18n.t('userRegistration.retypePassword')}
            autoFocus={false}
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
        {/* <TouchableOpacity onPress={() => navigation.replace('HomePage')}>
          <Text>{I18n.t('loginScreen')}</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}

export default UserRegistration;
