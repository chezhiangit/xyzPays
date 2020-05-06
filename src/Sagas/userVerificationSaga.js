import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_USER_MOBILE_DETAIL,
  SAGA_SEND_USER_MOBILE_VERIFICATION_CODE,
  SAGA_VERIFY_USER_MOBILE_VERIFICATION_CODE,
  SAGA_GET_USER_EMAIL_DETAIL,
  SAGA_SEND_USER_EMAIL_VERIFICATION_CODE,
  SAGA_VERIFY_USER_EMAIL_VERIFICATION_CODE,
} from '../AppStore/ActionTypes';
import {storeUserMobileDetails, storeUserEmailDetails} from './SagaActions';
import {
  getUserMobileDetailService,
  sendMobileVerificationCodeService,
  verifiMobileVerificationCodeService,
  getUserEmailDetailService,
  sendEmailVerificationCodeService,
  verifiEmailVerificationCodeService,
} from '../networkServices/userVerificationServices/userVerificationService';

const getAccessToken = state => state.login.accessToken;

function* getUserMobileDetail(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getUserMobileDetailService, accessToken);
    console.log('saga getUserMobileDetail api response...', response);
    if (response !== null && response.status === 200 && response.IsUserExists) {
      console.log('getUserMobileDetail data ....', response);
      console.log('getUserMobileDetail saga action ....', action);
      const mobileDetails = {...response};

      console.log('getUserMobileDetail data object ....', mobileDetails);
      yield put(storeUserMobileDetails(mobileDetails));
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
    const accessToken = yield select(getAccessToken);
    const response = yield call(sendMobileVerificationCodeService, accessToken);
    console.log('saga sendVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('sendVerificationCode data ....', response);
      console.log('sendVerificationCode saga action ....', action);
      // const userExists = {...response};

      // console.log('sendVerificationCode data object ....', userExists);
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

function* verifiMobileVerificationCode(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      verifiMobileVerificationCodeService,
      accessToken,
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

function* getUserEmailDetail(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getUserEmailDetailService, accessToken);
    console.log('saga getUserEmailDetail api response...', response);
    if (response !== null && response.status === 200 && response.IsUserExists) {
      console.log('getUserEmailDetail data ....', response);
      console.log('getUserEmailDetail saga action ....', action);
      const emailDetails = {...response};

      console.log('getUserEmailDetail data object ....', emailDetails);
      yield put(storeUserEmailDetails(emailDetails));
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

function* sendEmailVerificationCode(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(sendEmailVerificationCodeService, accessToken);
    console.log('saga sendEmailVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('sendEmailVerificationCode data ....', response);
      console.log('sendEmailVerificationCode saga action ....', action);
      // const userExists = {...response};

      // console.log('sendVerificationCode data object ....', userExists);
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

function* verifiEmailVerificationCode(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      verifiEmailVerificationCodeService,
      accessToken,
      action.ServiceToken,
      action.VerificationCode,
    );
    console.log('saga verifiEmailVerificationCode api response...', response);
    if (response !== null && response.status === 200 && response.IsSuccess) {
      console.log('verifiEmailVerificationCode data ....', response);
      console.log('verifiEmailVerificationCode saga action ....', action);
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

export default function* watchUserVerificationActions() {
  yield takeLatest(SAGA_GET_USER_MOBILE_DETAIL, getUserMobileDetail);
  yield takeLatest(
    SAGA_SEND_USER_MOBILE_VERIFICATION_CODE,
    sendMobileVerificationCode,
  );
  yield takeLatest(
    SAGA_VERIFY_USER_MOBILE_VERIFICATION_CODE,
    verifiMobileVerificationCode,
  );

  yield takeLatest(SAGA_GET_USER_EMAIL_DETAIL, getUserEmailDetail);
  yield takeLatest(
    SAGA_SEND_USER_EMAIL_VERIFICATION_CODE,
    sendEmailVerificationCode,
  );
  yield takeLatest(
    SAGA_VERIFY_USER_EMAIL_VERIFICATION_CODE,
    verifiEmailVerificationCode,
  );
}
