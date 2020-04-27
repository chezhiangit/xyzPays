import React, {Component} from 'react';
import styles from './styles';
import {CommonActions} from '@react-navigation/native';
import {ScrollView, Text, View} from 'react-native';
import I18n from '../../../localization/i18n';

class DrawerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  navigateToScreen = route => () => {
    const navigateAction = CommonActions.navigate({
      name: route,
    });
    this.props.navigation.dispatch(navigateAction);
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
              onPress={this.navigateToScreen('Login')}>
              {I18n.t('hamburgerMenu.signOut')}
            </Text>
          </View>
        </ScrollView>
        {/* <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View> */}
      </View>
    );
  }
}

export default DrawerComponent;
