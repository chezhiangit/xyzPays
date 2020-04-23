/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LoginPage from './src/login/LoginPage';
import UserRegistration from './src/login/userRegistration/UserRegistration';
import ForgotPassword from './src/login/forgotPassword/ForgotPassword';
import HomePage from './src/home/HomePage';
import CommissionPage from './src/commission/commissionPage';
import TrendingPage from './src/Trending/TrendingPage';
import ContactUsPage from './src/contactUs/MapView';
import MenuIcon from './src/common/UIComponents/DrawerMenu/HamburgerMenu';
import DrawerComponent from './src/common/UIComponents/DrawerMenu/drawerComponent';
import TaskEntryPage from './src/taskEntry/TaskEntryPage';
import ProfilePage from './src/profile/profilePage';
import EditProfilePage from './src/profile/editProfile';
import ReferAndEarnPage from './src/referAndEarn/referAndEarn';
import MyReferralsPage from './src/myReferrals/myReferrals';
import ReferralCommissionsPage from './src/referralCommissions/referralCommissions';
import PayoutHistoryPage from './src/payoutHistory/payoutHistory';
import FAQPage from './src/faq/faq';
import I18n from './src/localization/i18n';
import Colors from './src/uttils/Colors';
import FontsSize from './src/uttils/FontsSize';
import fontFamily from './src/uttils/FontFamily';
import FontsWeight from './src/uttils/FontsWeight';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = ({route, navigation}) => {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerComponent navigation={navigation} />}
      drawerPosition={'right'}
      initialRouteName="Home"
      hideStatusBar={false}
      overlayColor
      cont>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: I18n.t('profile.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="EditProfilePage"
        component={EditProfilePage}
        options={{
          title: I18n.t('editProfile.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="CommissionPage"
        component={CommissionPage}
        options={{
          title: I18n.t('commission.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="PayoutHistoryPage"
        component={PayoutHistoryPage}
        options={{
          title: I18n.t('payoutHistory.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="ReferAndEarnPage"
        component={ReferAndEarnPage}
        options={{
          title: I18n.t('referAndEarn.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="MyReferralsPage"
        component={MyReferralsPage}
        options={{
          title: I18n.t('myReferrals.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="ReferralCommissionsPage"
        component={ReferralCommissionsPage}
        options={{
          title: I18n.t('referralCommissions.headerTitle'),
        }}
      />
      <Drawer.Screen
        name="TrendingPage"
        component={TrendingPage}
        options={{
          title: I18n.t('trending.headerTitle'),
        }}
      />
      <Stack.Screen
        name="ContactUsPage"
        component={ContactUsPage}
        options={{
          title: I18n.t('contactUs.headerTitle'),
        }}
      />
      <Stack.Screen
        name="FAQPage"
        component={FAQPage}
        options={{
          title: I18n.t('faq.headerTitle'),
        }}
      />
    </Drawer.Navigator>
  );
};

class Main extends React.Component {
  render() {
    return (
      //   <SafeAreaProvider>
      <NavigationContainer>
        {this.props.userLoggedIn === false ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primaryAppColor,
              },
              headerTintColor: Colors.primaryFontColor,
              headerTitleStyle: {
                fontSize: FontsSize.headerName,
                fontWeight: FontsWeight.header,
                color: Colors.primaryFontColor,
                fontFamily: fontFamily.primaryFontFamily,
              },
            }}>
            <Stack.Screen
              name="Login"
              component={LoginPage}
              options={{
                title: I18n.t('login.headerTitle'),
              }}
            />
            <Stack.Screen
              name="UserRegistration"
              component={UserRegistration}
              options={{
                title: I18n.t('userRegistration.headerTitle'),
              }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: I18n.t('forgotPassword.headerTitle'),
              }}
            />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: {
                backgroundColor: Colors.primaryAppColor,
              },
              headerTintColor: Colors.primaryFontColor,
              headerTitleStyle: {
                fontSize: FontsSize.headerName,
                fontWeight: FontsWeight.header,
                color: Colors.primaryFontColor,
                fontFamily: fontFamily.primaryFontFamily,
              },
            }}>
            <Stack.Screen
              name="HomePage"
              component={HomeNavigator}
              options={({route, navigation}) => ({
                title: I18n.t('homePage.headerTitle'),
                headerRight: ({}) => <MenuIcon navigation={navigation} />,
              })}
            />
            <Stack.Screen
              name="TaskEntryPage"
              component={TaskEntryPage}
              options={{
                title: 'Task Entry',
                headerStyle: {
                  backgroundColor: Colors.primaryAppColor,
                },
                headerTintColor: Colors.primaryFontColor,
                headerTitleStyle: {
                  fontSize: FontsSize.headerName,
                  fontWeight: FontsWeight.header,
                  color: Colors.primaryFontColor,
                  fontFamily: fontFamily.primaryFontFamily,
                },
                headerBackTitle: 'Home',
              }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
      //   </SafeAreaProvider>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state values from app component....', state);
  return {
    userLoggedIn: state.login.userLoggedIn,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Main);
