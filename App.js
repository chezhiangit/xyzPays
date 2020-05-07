/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import Main from './Main';
import {Provider} from 'react-redux';
import {configureStore} from './src/AppStore/ConfigureStore';

const store = configureStore();

const App: () => React$Node = () => {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
