import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_VERIFY_USER_EMAIL,
  SAGA_SEND_VERIFICATION_CODE,
} from '../AppStore/ActionTypes';
import {storeUserDetails} from './SagaActions';
import {
  userEmailVerificationService,
  sendVerificationCodeService,
} from '../networkServices/forgotPasswordServices/forgotPasswordService';

const getAccessToken = state => state.login.accessToken;

function* verifyUserEmail(action) {
  try {
    //   const accessToken = yield select(getAccessToken);
    const response = yield call(userEmailVerificationService, action.email);
    console.log('saga verifyUserEmail api response...', response);
    if (response !== null && response.status === 200 && response.IsUserExists) {
      console.log('verifyUserEmail data ....', response);
      console.log('verifyUserEmail saga action ....', action);
      const userExists = {...response};

      console.log('verifyUserEmail data object ....', userExists);
      yield put(storeUserDetails(userExists));
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

function* sendVerificationCode(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(
      sendVerificationCodeService,
      action.ChangePasswordToken,
    );
    console.log('saga sendVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('sendVerificationCode data ....', response);
      console.log('sendVerificationCode saga action ....', action);
      const userExists = {...response};

      console.log('sendVerificationCode data object ....', userExists);
      // yield put(storeUserDetails(userExists));
      action.onSuccesscallback(response.Message);
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

export default function* watchForgotPasswordActions() {
  yield takeLatest(SAGA_VERIFY_USER_EMAIL, verifyUserEmail);
  yield takeLatest(SAGA_SEND_VERIFICATION_CODE, sendVerificationCode);
}
