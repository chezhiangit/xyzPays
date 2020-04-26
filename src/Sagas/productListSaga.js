import {takeLatest, call, put, select} from 'redux-saga/effects';
import {SAGA_GET_PRODUCTS_LIST} from '../AppStore/ActionTypes';
import {storeProductsList} from './SagaActions';
import {fetchProductListService} from '../networkServices/productsListServices/productListService';

const getAccessToken = state => state.login.accessToken;

function* fetchProductsList(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(fetchProductListService, accessToken);
    console.log('saga prdocucts list api response...', response);
    if (response !== null && response.status === 200) {
      console.log('products list data ....', response);
      console.log('products list saga action ....', action);
      const productsList = {
        // pendingPayout: response['Commission Sum'][0].PendingPayout,
        // totalDenied: response['Commission Sum'][0].TotalDenied,
        // totalPayout: response['Commission Sum'][0].TotalPayout,
        // totalCommissionReceivable:
        //   response['Commission Sum'][0].TotalCommissionReceivable,
        // repFirstName: response['Rep Info'][0].FirstName,
        // repLastName: response['Rep Info'][0].LastName,
      };

      console.log('productsList object ....', productsList);
      yield put(
        storeProductsList({
          productsList,
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

export default function* watchProductsListAction() {
  yield takeLatest(SAGA_GET_PRODUCTS_LIST, fetchProductsList);
}
