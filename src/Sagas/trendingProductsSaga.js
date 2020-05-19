import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_TRENDING_PRODUCTS,
  SAGA_ADD_REMOVE_FROM_WISH_LIST,
} from '../AppStore/ActionTypes';
import {storeTrendingProductsList} from './SagaActions';
import {
  getTrendingProductsService,
  addRemoveFromWishListService,
} from '../networkServices/trendingProductsServices/trendingProductsService';

const getAccessToken = state => state.login.accessToken;

function* getTrendingProducts(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getTrendingProductsService, accessToken);
    console.log('saga getTrendingProducts api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getTrendingProducts data ....', response);
      console.log('getTrendingProducts saga action ....', action);
      const trendingProductsList = [...response];

      console.log('getTrendingProducts data object ....', trendingProductsList);
      yield put(storeTrendingProductsList(trendingProductsList));
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

function* addRemoveFromWishList(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = {...action.payload, AccessToken: accessToken};
    console.log('saga addRemoveFromWishList payload.....', payload);
    const response = yield call(addRemoveFromWishListService, payload);
    console.log('saga addRemoveFromWishList api response...', response);
    if (response !== null && response.status === 200) {
      console.log('addRemoveFromWishList data ....', response);
      console.log('addRemoveFromWishList saga action ....', action);
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

export default function* watchTrendingProductActions() {
  yield takeLatest(SAGA_GET_TRENDING_PRODUCTS, getTrendingProducts);
  yield takeLatest(SAGA_ADD_REMOVE_FROM_WISH_LIST, addRemoveFromWishList);
}
