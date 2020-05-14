import {takeLatest, call, put, select} from 'redux-saga/effects';
import {SAGA_GET_LANDING_PAGE_DETAILS} from '../AppStore/ActionTypes';
import {storeLandingPageDetails} from './SagaActions';
import {
  getLandingPageDetailsService,
  //   getProductsFormDefenitionService,
  //   postCustomerDetailsService,
} from '../networkServices/landingPageServices/landingPageService';

const getAccessToken = state => state.login.accessToken;

function* getLandingPageDetails(action) {
  try {
    console.log('getLandingPageDetails saga action ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(getLandingPageDetailsService, accessToken);
    console.log('saga getLandingPageDetails api response...', response);
    if (response !== null && response.status === 200) {
      console.log('products list data ....', response);
      console.log('products list saga action ....', action);
      const landingPage = {...response};

      console.log('getLandingPageDetails object ....', landingPage);
      yield put(storeLandingPageDetails(landingPage));
      //   console.log('getLandingPageDetails saga action ....', action);
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

export default function* watchLandingPageAction() {
  yield takeLatest(SAGA_GET_LANDING_PAGE_DETAILS, getLandingPageDetails);
}
