import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_PAYOUT_DATE_FILTER,
  SAGA_GET_PAYOUT_HISTORY_LIST,
  SAGA_GET_PAYOUT_DETAILS,
} from '../AppStore/ActionTypes';
import {
  storePayoutDateFilter,
  storePayoutHistoryList,
  storePayoutDetails,
} from './SagaActions';
import {
  fetchDateFilterDataService,
  getPayoutHistoryDataService,
  getPayoutDetailsDataService,
} from '../networkServices/payoutServices/payoutService';

const getAccessToken = state => state.login.accessToken;

function* getPayoutDateFilterData(action) {
  try {
    // const accessToken = yield select(getAccessToken);
    const response = yield call(fetchDateFilterDataService);
    console.log('saga getPayoutDateFilterData api response...', response);
    if (response !== null && response.status === 200 && response.length > 0) {
      console.log('getPayoutDateFilterData data ....', response);
      console.log('getPayoutDateFilterData saga action ....', action);
      const dateFilter = [...response];
      console.log('dateFilter data object ....', dateFilter);
      yield put(storePayoutDateFilter(dateFilter));
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

function* getPayoutHistoryListData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getPayoutHistoryDataService,
      accessToken,
      action.SelectedDateRange,
    );
    console.log('saga getPayoutHistoryListData api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getPayoutHistoryListData data ....', response);
      console.log('getPayoutHistoryListData saga action ....', action);
      const payoutHistoryList = [...response];

      // console.log('dashboard data object ....', dateFilter);
      yield put(storePayoutHistoryList(payoutHistoryList));
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

function* getPayoutDetailsData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getPayoutDetailsDataService, accessToken);
    console.log('saga getPayoutDetailsData api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getPayoutDetailsData data ....', response);
      console.log('getPayoutDetailsData saga action ....', action);
      const payoutDetails = {...response};

      console.log('payoutDetails data object ....', payoutDetails);
      yield put(storePayoutDetails(payoutDetails));
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

export default function* watchPayoutAction() {
  yield takeLatest(SAGA_GET_PAYOUT_DATE_FILTER, getPayoutDateFilterData);
  yield takeLatest(SAGA_GET_PAYOUT_HISTORY_LIST, getPayoutHistoryListData);
  yield takeLatest(SAGA_GET_PAYOUT_DETAILS, getPayoutDetailsData);
}
