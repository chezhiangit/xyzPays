import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_DASHBOARD_DATA,
  SAGA_GET_PENDING_TASK_DATA,
  SAGA_GET_PRODUCT_DETAILS_DATA,
  SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
} from '../AppStore/ActionTypes';
import {
  storeDashboardData,
  storePendingTaskData,
  storePendingTaskProductDetailsData,
  storeTrendingProductDetailsData,
  storeFormDefenitionDetails,
} from './SagaActions';
import {
  fetchDashboardDataService,
  getPendingTaskService,
  getProductDetailsService,
  getFormDefenitionService,
} from '../networkServices/dashboardServices/dashboardService';

const getAccessToken = state => state.login.accessToken;

function* fetchDashboardData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(fetchDashboardDataService, accessToken);
    console.log('saga dashboard api response...', response);
    if (response !== null && response.status === 200) {
      console.log('dashboard data ....', response);
      console.log('dashboard saga action ....', action);
      const dashboardData = {
        pendingPayout: response['Commission Sum'][0].PendingPayout,
        totalDenied: response['Commission Sum'][0].TotalDenied,
        totalPayout: response['Commission Sum'][0].TotalPayout,
        totalCommissionReceivable:
          response['Commission Sum'][0].TotalCommissionReceivable,
        repFirstName: response['Rep Info'][0].FirstName,
        repLastName: response['Rep Info'][0].LastName,
      };

      console.log('dashboard data object ....', dashboardData);
      yield put(
        storeDashboardData({
          dashboardData,
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

function* getPendingTask(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getPendingTaskService, accessToken);
    console.log('saga getPendingTask api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getPendingTask data ....', response);
      console.log('getPendingTask saga action ....', action);
      const pendingTask = [...response];

      console.log('getPendingTask data object ....', pendingTask);
      yield put(storePendingTaskData(pendingTask));
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

function* getProductDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    console.log('getProductDetails saga action ....', action);
    const response = yield call(
      getProductDetailsService,
      accessToken,
      action.ProductKey,
    );
    console.log('saga getProductDetails api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getProductDetails data ....', response);
      console.log('getProductDetails saga action ....', action);
      const productDetails = {...response};
      // productDetails[0].FormKey = action.FormKey;

      if (action.calledFrom === 'StartPendingTask') {
        console.log(
          ' pending task getProductDetails data object ....',
          productDetails,
        );
        yield put(
          storePendingTaskProductDetailsData(productDetails, action.FormKey),
        );
      } else if (action.calledFrom === 'TrendingProductDetails') {
        console.log(
          ' trending products getProductDetails data object ....',
          productDetails,
        );
        yield put(storeTrendingProductDetailsData(productDetails));
      }

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

function* getFormDefenitionDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getFormDefenitionService,
      accessToken,
      action.FormKey,
    );
    console.log('saga getFormDefenitionDetails api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getFormDefenitionDetails data ....', response);
      console.log('getFormDefenitionDetails saga action ....', action);
      const formDefenition = {...response};

      // if (action.calledFrom === 'StartPendingTask') {
      console.log(
        ' pending task getFormDefenitionDetails data object ....',
        formDefenition,
      );
      yield put(storeFormDefenitionDetails(formDefenition));
      // } else if (action.calledFrom === 'TrendingProductDetails') {
      //   console.log(
      //     ' trending products getFormDefenitionDetails data object ....',
      //     productDetails,
      //   );
      //   yield put(storeTrendingProductDetailsData(productDetails));
      // }

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

export default function* watchDashboarAction() {
  yield takeLatest(SAGA_GET_DASHBOARD_DATA, fetchDashboardData);
  yield takeLatest(SAGA_GET_PENDING_TASK_DATA, getPendingTask);
  yield takeLatest(SAGA_GET_PRODUCT_DETAILS_DATA, getProductDetails);
  yield takeLatest(
    SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
    getFormDefenitionDetails,
  );
}
