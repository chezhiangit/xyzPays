/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import {configureStore} from './src/AppStore/ConfigureStore';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore();

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
