import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_REFERRAL_REG_STATUS_FILTER,
  SAGA_GET_REFERRAL_DATE_FILTER,
  SAGA_GET_REP_REFERRED_USERS_LIST,
  SAGA_GET_REFERRAL_COMMISSION_LIST,
  SAGA_POST_REFERRAL_USER,
} from '../AppStore/ActionTypes';
import {
  storeReferralDateFilter,
  storeReferredUsersList,
  storeReferralRegFilter,
  storeReferralCommissionList,
} from './SagaActions';
import {
  getReferralDateFilterService,
  getReferredUserListService,
  getRegistrationStatusService,
  getReferralCommissionListService,
  postReferralUserService,
} from '../networkServices/referralServices/referralServices';

const getAccessToken = state => state.login.accessToken;

function* getReferralDateFilterData(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(getReferralDateFilterService);
    console.log('saga getReferralDateFilterData api response...', response);
    if (response !== null && response.status === 200 && response.length > 0) {
      console.log('getReferralDateFilterData data ....', response);
      console.log('getReferralDateFilterData saga action ....', action);
      const dateFilter = [...response];
      console.log('getReferralDateFilterData data object ....', dateFilter);
      yield put(storeReferralDateFilter(dateFilter));
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

function* getRepReferredUsers(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getReferredUserListService,
      action.StatusType,
      accessToken,
    );
    console.log('saga getRepReferredUsers api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getRepReferredUsers data ....', response);
      console.log('getRepReferredUsers saga action ....', action);
      const usersList = [...response];

      console.log('dashboard data object ....', usersList);
      yield put(storeReferredUsersList(usersList));
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

function* getRegistrationStatusFilter(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(getRegistrationStatusService);
    console.log('saga getRegistrationStatusService api response...', response);
    if (response !== null && response.status === 200 && response.length > 0) {
      console.log('getRegistrationStatusService data ....', response);
      console.log('getRegistrationStatusService saga action ....', action);
      const regFilter = [...response];
      console.log('reg status data object ....', regFilter);
      yield put(storeReferralRegFilter(regFilter));
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

function* getReferralCommissionList(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getReferralCommissionListService,
      action.SelectedDateRange,
      action.TxnStatusType,
      accessToken,
    );
    console.log('saga getReferralCommissionList api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getReferralCommissionList data ....', response);
      console.log('getReferralCommissionList saga action ....', action);
      const referralCommissionList = [...response];

      // console.log('dashboard data object ....', dateFilter);
      yield put(storeReferralCommissionList(referralCommissionList));
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

function* postReferralUser(action) {
  try {
    const accessToken = yield select(getAccessToken);
    console.log('saga user register userinfo...', action.payload, accessToken);
    const response = yield call(
      postReferralUserService,
      action.payload,
      accessToken,
    );
    console.log('saga postReferralUser response...', response);
    if (
      response !== null &&
      response.status === 200 &&
      response.IsCreationSuccess === true
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

export default function* watchReferralActions() {
  yield takeLatest(
    SAGA_GET_REFERRAL_REG_STATUS_FILTER,
    getRegistrationStatusFilter,
  );
  yield takeLatest(SAGA_GET_REFERRAL_DATE_FILTER, getReferralDateFilterData);
  yield takeLatest(SAGA_GET_REP_REFERRED_USERS_LIST, getRepReferredUsers);
  yield takeLatest(
    SAGA_GET_REFERRAL_COMMISSION_LIST,
    getReferralCommissionList,
  );
  yield takeLatest(SAGA_POST_REFERRAL_USER, postReferralUser);
}
