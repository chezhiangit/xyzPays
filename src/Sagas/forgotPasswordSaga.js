import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_VERIFY_USER_EMAIL,
  SAGA_SEND_PWD_MOBILE_VERIFICATION_CODE,
  SAGA_VERIFY_PWD_MOBILE_VERIFICATION_CODE,
  SAGA_FORGOT_PWD_CHANGE_PASSWORD,
} from '../AppStore/ActionTypes';
import {
  storeUserDetails,
  storePwdSendMobileVerificationResponse,
} from './SagaActions';
import {
  userEmailVerificationService,
  sendMobileVerificationCodeService,
  verifiMobileVerificationCodeService,
  changePasswordService,
} from '../networkServices/forgotPasswordServices/forgotPasswordService';

// const getAccessToken = state => state.login.accessToken;

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

function* sendMobileVerificationCode(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(
      sendMobileVerificationCodeService,
      action.ChangePasswordToken,
    );
    console.log('saga sendVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('sendVerificationCode data ....', response);
      console.log('sendVerificationCode saga action ....', action);
      const sendMobileVerificationRes = {...response};

      console.log(
        'sendVerificationCode data object ....',
        sendMobileVerificationRes,
      );
      yield put(
        storePwdSendMobileVerificationResponse(sendMobileVerificationRes),
      );
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

function* verifiMobileVerificationCode(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(
      verifiMobileVerificationCodeService,
      action.ChangePasswordToken,
      action.ServiceToken,
      action.VerificationCode,
    );
    console.log('saga verifiMobileVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('verifiMobileVerificationCode data ....', response);
      console.log('verifiMobileVerificationCode saga action ....', action);
      // const userExists = {...response};

      // console.log('verifiMobileVerificationCode data object ....', userExists);
      // yield put(storeUserDetails(userExists));
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

function* changePassword(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const payload = {...action.payload};
    console.log('saga changePassword payload.....', payload);
    const response = yield call(changePasswordService, payload);
    console.log('saga changePassword api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('changePassword data ....', response);
      console.log('changePassword saga action ....', action);
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
  yield takeLatest(
    SAGA_SEND_PWD_MOBILE_VERIFICATION_CODE,
    sendMobileVerificationCode,
  );
  yield takeLatest(
    SAGA_VERIFY_PWD_MOBILE_VERIFICATION_CODE,
    verifiMobileVerificationCode,
  );
  yield takeLatest(SAGA_FORGOT_PWD_CHANGE_PASSWORD, changePassword);
}
