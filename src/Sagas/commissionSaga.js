import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_COMMISSION_DATE_FILTER,
  SAGA_GET_COMMISSION_LIST,
} from '../AppStore/ActionTypes';
import {storeCommissionDateFilter, storeCommissionList} from './SagaActions';
import {
  fetchDateFilterDataService,
  fetchCommissionListDataService,
} from '../networkServices/commissionServices/commissionService';

const getAccessToken = state => state.login.accessToken;

function* getDateFilterData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(fetchDateFilterDataService, accessToken);
    console.log('saga getDateFilterData api response...', response);
    if (response !== null && response.status === 200 && response.length > 0) {
      console.log('getDateFilterData data ....', response);
      console.log('getDateFilterData saga action ....', action);
      const dateFilter = [...response];
      console.log('dateFilter data object ....', dateFilter);
      yield put(
        storeCommissionDateFilter({
          dateFilter,
        }),
      );
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

function* getCommissionListData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      fetchCommissionListDataService,
      action.SelectedDateRange,
      action.TxnStatusType,
      accessToken,
    );
    console.log('saga getCommissionListData api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getCommissionListData data ....', response);
      console.log('getCommissionListData saga action ....', action);
      const commissionList = [...response];

      // console.log('dashboard data object ....', dateFilter);
      yield put(storeCommissionList(commissionList));
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

export default function* watchCommissionAction() {
  yield takeLatest(SAGA_GET_COMMISSION_DATE_FILTER, getDateFilterData);
  yield takeLatest(SAGA_GET_COMMISSION_LIST, getCommissionListData);
}
