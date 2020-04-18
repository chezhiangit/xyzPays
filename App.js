/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {configureStore} from './src/appStore/ConfigureStore';
import LoginPage from './src/login/LoginPage';
import UserRegistration from './src/login/userRegistration/UserRegistration';
import ForgotPassword from './src/login/forgotPassword/ForgotPassword';
import HomePage from './src/home/HomePage';
import CommissionPage from './src/commission/commissionPage';
import TrendingPage from './src/Trending/TrendingPage';
import DetailsPage from './src/Details/DetailsPage';
import MapComponent from './src/googleMapView/MapView';
import Header from './src/common/UIComponents/Header';
import MenuIcon from './src/common/UIComponents/HamburgerMenu';
import TaskEntryPage from './src/taskEntry/TaskEntryPage';
import ProfilePage from './src/profile/profilePage';
import EditProfilePage from './src/profile/editProfile';
import ReferAndEarnPage from './src/referAndEarn/referAndEarn';
import MyReferralsPage from './src/myReferrals/myReferrals';
import I18n from './src/localization/i18n';
import {
  widthAdapter,
  heightAdapter,
  fontscale,
  deviceWidth,
} from './src/uttils/adapterUtil';
import Colors from './src/uttils/Colors';
import FontsSize from './src/uttils/FontsSize';
import fontFamily from './src/uttils/FontFamily';
import FontsWeight from './src/uttils/FontsWeight';

const store = configureStore();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition={'right'}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
      initialRouteName="Home"
      // drawerType={'slide'}
      hideStatusBar={false}
      overlayColor>
      <Drawer.Screen
        name="Home"
        component={HomePage}
        options={{
          title: I18n.t('homePage.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('homePage.headerTitle')} {...props} />
        //   ),
        //   headerRight: () => (
        //     <Button
        //       onPress={() => alert('This is a button!')}
        //       title="Info"
        //       color="#fff"
        //     />
        //   ),
        // }}
      />
      <Drawer.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{
          title: I18n.t('profile.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('profile.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen
        name="EditProfilePage"
        component={EditProfilePage}
        options={{
          title: I18n.t('editProfile.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('editProfile.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen
        name="CommissionPage"
        component={CommissionPage}
        options={{
          title: I18n.t('commission.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('commission.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen
        name="ReferAndEarnPage"
        component={ReferAndEarnPage}
        options={{
          title: I18n.t('referAndEarn.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('commission.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen
        name="MyReferralsPage"
        component={MyReferralsPage}
        options={{
          title: I18n.t('myReferrals.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('commission.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen
        name="TrendingPage"
        component={TrendingPage}
        options={{
          title: I18n.t('trending.headerTitle'),
        }}
        // options={{
        //   headerTitle: props => (
        //     <Header headerName={I18n.t('trending.headerTitle')} {...props} />
        //   ),
        //   // headerRight: () => (
        //   //   <Button
        //   //     onPress={() => alert('This is a button!')}
        //   //     title="Info"
        //   //     color="#fff"
        //   //   />
        //   // ),
        // }}
      />
      <Drawer.Screen name="Details" component={DetailsPage} />
    </Drawer.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
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
              // options={{

              // headerBackTitle: 'Login',
              // headerBackTitleVisible: true,
              // headerTitle: props => (
              //   <Header
              //     headerName={I18n.t('userRegistration.headerTitle')}
              //     {...props}
              //   />
              // ),
              // }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: I18n.t('forgotPassword.headerTitle'),
              }}
              // options={{
              //   // headerBackTitle: 'Login',
              //   // headerBackTitleVisible: true,
              //   headerTitle: props => (
              //     <Header
              //       headerName={I18n.t('forgotPassword.headerTitle')}
              //       {...props}
              //     />
              //   ),
              // }}
            />
            <Stack.Screen
              name="HomePage"
              component={HomeNavigator}
              options={({ route }) => ({
                title: I18n.t('homePage.headerTitle'),
                headerRight: ({}) => <MenuIcon onPress={() => {}} />,
              })}
              // options={({navigation, route}) => ({
              //   headerTitle: props => (
              //     <Header
              //       headerName={I18n.t('homePage.headerTitle')}
              //       {...props}
              //     />
              //   ),
              //   headerRight: () => <MenuIcon onPress={() => {}} />,
              // })}
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

              // options={{
              //   headerTitle: props => (
              //     <Header
              //       headerName={I18n.t('taskEntryPage.headerTitle')}
              //       {...props}
              //     />
              //   ),
              //   headerRight: () => (
              //     <MenuIcon onPress={() => DrawerActions.toggleDrawer()} />
              //   ),
              // }}
            />
            {/* <Stack.Screen name="CommissionPage" component={CommissionPage} /> */}
            <Stack.Screen name="MapView" component={MapComponent} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
