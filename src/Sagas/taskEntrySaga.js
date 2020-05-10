import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_PRODUCT_DETAILS_DATA,
  SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
  SAGA_POST_TASK_ENTRY_DATA,
} from '../AppStore/ActionTypes';
import {
  storePendingTaskProductDetailsData,
  storeTrendingProductDetailsData,
  storeFormDefenitionDetails,
} from './SagaActions';
import {
  getProductDetailsService,
  getFormDefenitionService,
  postEntryService,
} from '../networkServices/taskEntryServices/taskEntryService';

const getAccessToken = state => state.login.accessToken;

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
          storePendingTaskProductDetailsData(
            productDetails,
            action.FormKey,
            action.TaskKey,
          ),
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

function* postTaskEntry(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = [...action.payload];
    console.log('saga postTaskEntry payload.....', payload);
    const response = yield call(
      postEntryService,
      payload,
      accessToken,
      action.FormKey,
      action.TaskKey,
    );
    console.log('saga postTaskEntry api response...', response);
    if (
      (response !== null && response.HttpStatusCode === 200) ||
      response.HttpStatusCode === '200'
    ) {
      console.log('postTaskEntry data ....', response);
      console.log('postTaskEntry saga action ....', action);
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

export default function* watchTaskEntryAction() {
  yield takeLatest(SAGA_GET_PRODUCT_DETAILS_DATA, getProductDetails);
  yield takeLatest(
    SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
    getFormDefenitionDetails,
  );
  yield takeLatest(SAGA_POST_TASK_ENTRY_DATA, postTaskEntry);
}
