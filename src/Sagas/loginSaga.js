import {takeLatest, call, put} from 'redux-saga/effects';
import {
  SAGA_AUTHENTICATE_USER,
  SAGA_REGISTER_USER,
} from '../AppStore/ActionTypes';
import {userLoginSuccess} from './SagaActions';
import {
  authenticateUserService,
  registerNewUserService,
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

export default function* watchuserLoginAction() {
  yield takeLatest(SAGA_AUTHENTICATE_USER, userLogin);
  yield takeLatest(SAGA_REGISTER_USER, registerUser);
}
