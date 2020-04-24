import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './Reducers';
import rootSaga from '../Sagas';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);
  return store;
};
