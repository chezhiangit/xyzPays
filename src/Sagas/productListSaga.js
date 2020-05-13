import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_PRODUCTS_LIST,
  SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
  SAGA_POST_CUSTOMER_DETAILS,
} from '../AppStore/ActionTypes';
import {
  storeProductsList,
  storeProductsFormDefenitionDetails,
} from './SagaActions';
import {
  getProductListService,
  getProductsFormDefenitionService,
  postCustomerDetailsService,
} from '../networkServices/productsListServices/productListService';

const getAccessToken = state => state.login.accessToken;

function* getProductsList(action) {
  try {
    console.log('getProductsList saga action ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(getProductListService, accessToken);
    console.log('saga prdocucts list api response...', response);
    if (response !== null && response.status === 200) {
      console.log('products list data ....', response);
      console.log('products list saga action ....', action);
      const productsList = [...response];

      console.log('productsList object ....', productsList);
      yield put(storeProductsList(productsList));
      console.log('getProductsList saga action ....', action);
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

function* getProductsFormDefenitionDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getProductsFormDefenitionService,
      accessToken,
      action.FormKey,
      action.LeadKey,
    );
    console.log('saga getFormDefenitionDetails api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getFormDefenitionDetails data ....', response);
      console.log('getFormDefenitionDetails saga action ....', action);
      const formDefenition = [...response.FormDefinition];

      // if (action.calledFrom === 'StartPendingTask') {
      console.log(
        ' pending task getFormDefenitionDetails data object ....',
        formDefenition,
      );
      yield put(
        storeProductsFormDefenitionDetails(
          formDefenition,
          action.FormKey,
          action.LeadKey,
          action.ProductName,
        ),
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

function* postCustomerDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = [...action.payload];
    console.log('saga postTaskEntry payload.....', payload);
    const response = yield call(
      postCustomerDetailsService,
      payload,
      accessToken,
      action.FormKey,
      action.LeadKey,
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

export default function* watchProductsListAction() {
  yield takeLatest(SAGA_GET_PRODUCTS_LIST, getProductsList);
  yield takeLatest(
    SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
    getProductsFormDefenitionDetails,
  );
  yield takeLatest(SAGA_POST_CUSTOMER_DETAILS, postCustomerDetails);
}
