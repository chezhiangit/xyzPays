/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {configureStore} from './src/AppStore/ConfigureStore';
import LoginPage from './src/login/LoginPage';
import HomePage from './src/home/HomePage';
import DetailsPage from './src/Details/DetailsPage';
import MapComponent from './src/GoogleMapView/MapView';

const store = configureStore();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const HomeNavigator = () => {
  return (
    <Drawer.Navigator
      drawerPosition={'right'}
      drawerStyle={{
        backgroundColor: '#c6cbef',
        width: 240,
      }}
      initialRouteName="Home"
      drawerType={'slide'}
      hideStatusBar={true}
      overlayColor>
      <Drawer.Screen name="Home" component={HomePage} />
      <Drawer.Screen name="Details" component={DetailsPage} />
    </Drawer.Navigator>
  );
};

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="HomePage" component={HomeNavigator} />
          <Stack.Screen name="MapView" component={MapComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
