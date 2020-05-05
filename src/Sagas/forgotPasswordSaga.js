import {takeLatest, call, put, select} from 'redux-saga/effects';
import {SAGA_VERIFY_USER_EMAIL} from '../AppStore/ActionTypes';
import {storeCommissionDateFilter, storeCommissionList} from './SagaActions';
import {userEmailVerificationService} from '../networkServices/forgotPasswordServices/forgotPasswordService';

const getAccessToken = state => state.login.accessToken;

function* verifyUserEmail(action) {
  try {
    //   const accessToken = yield select(getAccessToken);
    const response = yield call(userEmailVerificationService, action.email);
    console.log('saga verifyUserEmail api response...', response);
    if (response !== null && response.status === 200) {
      console.log('verifyUserEmail data ....', response);
      console.log('verifyUserEmail saga action ....', action);
      // const commissionList = [...response];

      // console.log('dashboard data object ....', dateFilter);
      // yield put(storeCommissionList(commissionList));
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

export default function* watchForgotPasswordActions() {
  yield takeLatest(SAGA_VERIFY_USER_EMAIL, verifyUserEmail);
  // yield takeLatest(SAGA_GET_COMMISSION_LIST, getCommissionListData);
}
