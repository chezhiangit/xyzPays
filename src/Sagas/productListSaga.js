import {takeLatest, call, put, select} from 'redux-saga/effects';
import {SAGA_GET_PRODUCTS_LIST} from '../AppStore/ActionTypes';
import {storeProductsList} from './SagaActions';
import {getProductListService} from '../networkServices/productsListServices/productListService';

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

export default function* watchProductsListAction() {
  yield takeLatest(SAGA_GET_PRODUCTS_LIST, getProductsList);
}
