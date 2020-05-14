import React, {Component} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import styles from './styles';
import {connect} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import I18n from '../../../localization/i18n';
import WarningDialog from '../warningDialog';
import {setIntialRoute} from '../../../AppStore/landingPageActions';

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      isLoading: false,
      showDlg: false,
      dlgMsg: '',
    };
  }
  navigateToScreen = route => () => {
    try {
      if (route === 'USER_LOGOUT') {
        // this.setState({isLoading: true});
        this.setState({
          showDlg: true,
          dlgMsg: 'Do you want to logout from Application?',
        });
        // this.props.signOut();
        return;
      }
      if (route === 'AppLandingPage') {
        this.props.setIntialRoute();
        return;
      }
      const navigateAction = CommonActions.navigate({
        name: route,
      });
      this.props.navigation.dispatch(navigateAction);
    } catch (e) {
      this.setState({
        showDlg: true,
        dlgMsg: 'Could not complete your request. Pls trye again.',
      });
    }
  };

  onCancel = () => {
    this.setState({
      showDlg: false,
      dlgMsg: '',
    });
  };

  onConfirm = () => {
    this.setState({
      showDlg: false,
      dlgMsg: '',
      isLoading: true,
    });
    this.props.signOut();
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            {/* <Text style={styles.sectionHeadingStyle}>Section 1</Text> */}
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('AppLandingPage')}>
                {I18n.t('hamburgerMenu.dashboard')}
              </Text>
            </View>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('Home')}>
                {I18n.t('hamburgerMenu.home')}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t('hamburgerMenu.profile')}
            </Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('ProfilePage')}>
                {I18n.t('hamburgerMenu.viewProfile')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('EditProfilePage')}>
                {I18n.t('hamburgerMenu.editProfile')}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t('hamburgerMenu.referrals')}
            </Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('ReferAndEarnPage')}>
                {I18n.t('hamburgerMenu.referAndEarn')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('MyReferralsPage')}>
                {I18n.t('hamburgerMenu.myReferrals')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('ReferralCommissionsPage')}>
                {I18n.t('hamburgerMenu.referralsCommission')}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t('hamburgerMenu.commissionAndPayout')}
            </Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('CommissionPage')}>
                {I18n.t('hamburgerMenu.viewCommissions')}
              </Text>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('PayoutHistoryPage')}>
                {I18n.t('hamburgerMenu.transferMoney')}
              </Text>
            </View>
          </View>
          <View>
            <Text style={styles.sectionHeadingStyle}>
              {I18n.t('hamburgerMenu.products')}
            </Text>
            <View style={styles.navSectionStyle}>
              <Text
                style={styles.navItemStyle}
                onPress={this.navigateToScreen('TrendingPage')}>
                {I18n.t('hamburgerMenu.trendingProducts')}
              </Text>
            </View>
          </View>
          <View style={styles.sectionLine} />
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('ContactUsPage')}>
              {I18n.t('hamburgerMenu.contactUs')}
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('FAQPage')}>
              {I18n.t('hamburgerMenu.FAQs')}
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={this.navigateToScreen('USER_LOGOUT')}>
              {I18n.t('hamburgerMenu.signOut')}
            </Text>
          </View>
        </ScrollView>
        <Spinner
          visible={this.state.isLoading}
          textContent={'Signing Out...'}
        />
        <WarningDialog
          shouldShowDeleteWarning={this.state.showDlg}
          onCancel={this.onCancel}
          onOK={this.onConfirm}
          dlgMsg={this.state.dlgMsg}
        />
        {/* <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View> */}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  initialRoute: state.landingPage.initialRoute,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch({type: 'USER_LOGOUT'}),
  setIntialRoute: () => dispatch(setIntialRoute('AppLandingPage')),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerComponent);
