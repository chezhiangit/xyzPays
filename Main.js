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
import ForgotPasswordStep2 from './src/login/forgotPassword/forgotPasswordStep2';
import AppLandingPage from './src/landingPage/landingPage';
import ProductsListPage from './src/productList/productListPage';
import TaskSummaryPage from './src/taskSummary/taskSummary';
import TaskTransactionList from './src/taskSummary/taskTransaction';
import CustomerDetailsPage from './src/startEarning/customerDetailsPage';
import HomePage from './src/home/HomePage';
import CommissionPage from './src/Commission/commissionPage';
import TrendingPage from './src/Trending/TrendingPage';
import ProductDetailsPage from './src/Trending/productDetailsPage';
// import ContactUsPage from './src/contactUs/MapView';
import ContactUsPage from './src/contactUs/MapWithWebView';
import MenuIcon from './src/common/UIComponents/DrawerMenu/HamburgerMenu';
import DrawerComponent from './src/common/UIComponents/DrawerMenu/drawerComponent';
import TaskEntryPage from './src/taskEntry/TaskEntryPage';
import ProfilePage from './src/profile/profilePage';
import EditProfilePage from './src/profile/editProfile';
import ReferAndEarnPage from './src/referAndEarn/referAndEarn';
import MyReferralsPage from './src/myReferrals/myReferrals';
import ReferralCommissionsPage from './src/referralCommissions/referralCommissions';
import PayoutHistoryPage from './src/payoutHistory/payoutHistory';
import ForgotPasswordStep3 from './src/login/forgotPassword/forgotPasswordStep3';
import ForgotPasswordStep4 from './src/login/forgotPassword/forgotPasswordStep4';
import EmailVerificationStep1 from './src/userVerification/emailVerificationStep1';
import EmailVerificationStep2 from './src/userVerification/emailVerificationStep2';
import MobileVerificationStep1 from './src/userVerification/mobileVerificationStep1';
import MobileVerificationStep2 from './src/userVerification/mobileVerificationStep2';
import FAQPage from './src/faq/faq';
import I18n from './src/localization/i18n';
import Colors from './src/uttils/Colors';
import FontsSize from './src/uttils/FontsSize';
import fontFamily from './src/uttils/FontFamily';
import FontsWeight from './src/uttils/FontsWeight';
// import Spinner from 'react-native-loading-spinner-overlay';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const HomeNavigator = ({route, navigation}) => {
//   return (
//     <Drawer.Navigator
//       drawerContent={() => <DrawerComponent navigation={navigation} />}
//       drawerPosition={'right'}
//       initialRouteName={this.props.initialRoute} //"Home"
//       hideStatusBar={false}
//       overlayColor>
//       <Drawer.Screen name="Home" component={HomePage} />
//       <Drawer.Screen
//         name="ProfilePage"
//         component={ProfilePage}
//         options={{
//           title: I18n.t('profile.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="EditProfilePage"
//         component={EditProfilePage}
//         options={{
//           title: I18n.t('editProfile.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="CommissionPage"
//         component={CommissionPage}
//         options={{
//           title: I18n.t('commission.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="PayoutHistoryPage"
//         component={PayoutHistoryPage}
//         options={{
//           title: I18n.t('payoutHistory.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="ReferAndEarnPage"
//         component={ReferAndEarnPage}
//         options={{
//           title: I18n.t('referAndEarn.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="MyReferralsPage"
//         component={MyReferralsPage}
//         options={{
//           title: I18n.t('myReferrals.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="ReferralCommissionsPage"
//         component={ReferralCommissionsPage}
//         options={{
//           title: I18n.t('referralCommissions.headerTitle'),
//         }}
//       />
//       <Drawer.Screen
//         name="TrendingPage"
//         component={TrendingPage}
//         options={{
//           title: I18n.t('trending.headerTitle'),
//         }}
//       />
//       <Stack.Screen
//         name="ContactUsPage"
//         component={ContactUsPage}
//         options={{
//           title: I18n.t('contactUs.headerTitle'),
//         }}
//       />
//       <Stack.Screen
//         name="FAQPage"
//         component={FAQPage}
//         options={{
//           title: I18n.t('faq.headerTitle'),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

class Main extends React.Component {
  HomeNavigator = ({route, navigation}) => {
    return (
      <Drawer.Navigator
        drawerContent={() => <DrawerComponent navigation={navigation} />}
        drawerPosition={'right'}
        initialRouteName={this.props.initialRoute} //"Home"
        hideStatusBar={false}
        overlayColor>
        <Drawer.Screen name="Home" component={HomePage} />
        <Drawer.Screen
          name="ProfilePage"
          component={ProfilePage}
          options={{
            title: I18n.t('profile.headerTitle'),
          }}
        />
        <Drawer.Screen
          name="ProductsListPage"
          component={ProductsListPage}
          // options={{
          //   title: I18n.t('profile.headerTitle'),
          // }}
        />
        <Drawer.Screen
          name="CustomerDetailsPage"
          component={CustomerDetailsPage}
          // options={{
          //   title: I18n.t('profile.headerTitle'),
          // }}
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

  renderPage = () => {
    if (
      this.props.IsEmailVerificationDone === false &&
      this.props.userEmailVerification?.IsSuccess === true
    ) {
      return (
        <Stack.Navigator
          initialRouteName="EmailVerificationStep2"
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
            name="EmailVerificationStep2"
            component={EmailVerificationStep2}
            options={{
              title: I18n.t('userVerification.headerTitleEmail'),
            }}
          />
        </Stack.Navigator>
      );
    }

    if (this.props.IsEmailVerificationDone === false) {
      return (
        <Stack.Navigator
          initialRouteName="EmailVerificationStep1"
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
            name="EmailVerificationStep1"
            component={EmailVerificationStep1}
            options={{
              title: I18n.t('userVerification.headerTitleEmail'),
            }}
          />
        </Stack.Navigator>
      );
    }

    if (
      this.props.IsMobileVerificationDone === false &&
      this.props.userMobileVerification?.IsSuccess === true
    ) {
      return (
        <Stack.Navigator
          initialRouteName="MobileVerificationStep2"
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
            name="MobileVerificationStep2"
            component={MobileVerificationStep2}
            options={{
              title: I18n.t('userVerification.headerTitleMobile'),
            }}
          />
        </Stack.Navigator>
      );
    }

    if (this.props.IsMobileVerificationDone === false) {
      return (
        <Stack.Navigator
          initialRouteName="MobileVerificationStep1"
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
            name="MobileVerificationStep1"
            component={MobileVerificationStep1}
            options={{
              title: I18n.t('userVerification.headerTitleMobile'),
            }}
          />
        </Stack.Navigator>
      );
    }

    if (
      this.props.IsEmailVerificationDone &&
      this.props.IsMobileVerificationDone &&
      this.props.userLoggedIn &&
      this.props.initialRoute === 'AppLandingPage'
    ) {
      return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="AppLandingPage"
            component={AppLandingPage}
            // options={{
            //   title: I18n.t('userVerification.headerTitleMobile'),
            // }}
          />
        </Stack.Navigator>
      );
    }

    return (
      <Stack.Navigator
        initialRouteName={this.props.initialRoute} //"Home"
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
          component={this.HomeNavigator}
          options={({route, navigation}) => ({
            title: I18n.t('homePage.headerTitle'),
            headerRight: ({}) => <MenuIcon navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="TaskEntryPage"
          component={TaskEntryPage}
          options={{
            title: I18n.t('taskEntryPage.headerTitle'),
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
        <Stack.Screen
          name="ProductDetailsPage"
          component={ProductDetailsPage}
          options={{
            title: I18n.t('productDetails.headerTitle'),
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
            headerBackTitle: 'Trending Products',
          }}
        />
        <Stack.Screen
          name="TaskSummaryPage"
          component={TaskSummaryPage}
          options={{
            title: I18n.t('TaskSummaryPage.headerTitle'),
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
            // headerBackTitle: 'Trending Products',
          }}
        />
        <Stack.Screen
          name="TaskTransactionList"
          component={TaskTransactionList}
          options={{
            title: I18n.t('TaskSummaryPage.headerTitle'),
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
            // headerBackTitle: 'Trending Products',
          }}
        />
        
      </Stack.Navigator>
    );
  };

  render() {
    return (
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
            <Stack.Screen
              name="ForgotPasswordStep2"
              component={ForgotPasswordStep2}
              options={{
                title: I18n.t('forgotPassword.headerTitle'),
              }}
            />
            <Stack.Screen
              name="ForgotPasswordStep3"
              component={ForgotPasswordStep3}
              options={{
                title: I18n.t('forgotPassword.headerTitle'),
              }}
            />
            <Stack.Screen
              name="ForgotPasswordStep4"
              component={ForgotPasswordStep4}
              options={{
                title: I18n.t('forgotPassword.headerTitle'),
              }}
            />
          </Stack.Navigator>
        ) : (
          this.renderPage()
        )}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => {
  console.log('state values from app component....', state);
  return {
    userLoggedIn: state.login.userLoggedIn,
    // isLoading: state.loading.isLoading,
    IsEmailVerificationDone: state.login.IsEmailVerificationDone,
    IsMobileVerificationDone: state.login.IsMobileVerificationDone,
    userEmailVerification: state.userVerification.emailVeification,
    userMobileVerification: state.userVerification.mobileVeification,
    initialRoute: state.landingPage.initialRoute,
  };
};

export default connect(
  mapStateToProps,
  null,
)(Main);
