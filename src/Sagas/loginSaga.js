import {takeLatest, call, put} from 'redux-saga/effects';
import {
  SAGA_AUTHENTICATE_USER,
  SAGA_REGISTER_USER,
  SAGA_GET_PROVIDERS,
} from '../AppStore/ActionTypes';
import {userLoginSuccess, storeProviders} from './SagaActions';
import {
  authenticateUserService,
  registerNewUserService,
  getProvidersService,
} from '../networkServices/loginServices/login';
// import {startLoading, stopLoading} from '../AppStore/loadingActions';

function* userLogin(action) {
  try {
    console.log('saga user login userinfo...', action.userCredential);
    const response = yield call(authenticateUserService, action.userCredential);
    console.log('saga login api response...', response);
    if (
      response !== null &&
      response.status === 200 &&
      response.AccessToken !== undefined &&
      response.AccessToken !== null &&
      response.IsLoginSuccess
    ) {
      yield put(
        userLoginSuccess({
          userName: action.userCredential.userName,
          userLoggedIn: response.IsLoginSuccess,
          accessToken: response.AccessToken,
          IsMobileVerificationDone: response.IsMobileVerificationDone,
          IsEmailVerificationDone: response.IsEmailVerificationDone,
        }),
      );
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback(
        'Unable to able complete your request. Pls try again.',
      );
    }
  } catch (error) {
    action.onErrorcallback(
      'Unable to able complete your request. Pls try again.',
    );
  }
}

function* registerUser(action) {
  try {
    console.log('saga user register userinfo...', action.payload);
    const response = yield call(registerNewUserService, action.payload);
    console.log('saga user registration response...', response);
    if (
      response !== null &&
      response.status === 200 &&
      response.IsRegistrationSuccess
    ) {
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback(
        'Unable to able complete your request. Pls try again.',
      );
    }
  } catch (error) {
    action.onErrorcallback(
      'Unable to able complete your request. Pls try again.',
    );
  }
}

function* getProviders(action) {
  try {
    const response = yield call(getProvidersService);
    console.log('saga getProviders info api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getProviders info data ....', response);
      console.log('getProviders info saga action ....', action);
      const providers = [...response];

      console.log('getProviders info object ....', providers);
      yield put(storeProviders(providers));
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

export default function* watchuserLoginAction() {
  yield takeLatest(SAGA_AUTHENTICATE_USER, userLogin);
  yield takeLatest(SAGA_REGISTER_USER, registerUser);
  yield takeLatest(SAGA_GET_PROVIDERS, getProviders);
}
