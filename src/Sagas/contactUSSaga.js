import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_GOOGLE_MAP_COORDINATES,
  SAGA_SEND_MESSAGE,
} from '../AppStore/ActionTypes';
import {storeGoogleMapCoordinates} from './SagaActions';
import {
  getGoogleMapCoordinatesService,
//   sendMessageService,
} from '../networkServices/contactUsServices/constactUsService';
// import {startLoading, stopLoading} from '../AppStore/loadingActions';

function* getGoogleMapCoordinates(action) {
  try {
    //   const accessToken = yield select(getAccessToken);
    const response = yield call(getGoogleMapCoordinatesService);
    console.log('saga getGoogleMapCoordinates api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getGoogleMapCoordinates data ....', response);
      console.log('getGoogleMapCoordinates saga action ....', action);
      const mapCoordinates = {...response};

      console.log('getGoogleMapCoordinates data object ....', mapCoordinates);
      yield put(storeGoogleMapCoordinates(mapCoordinates));
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

export default function* watchContactsUsActions() {
  yield takeLatest(SAGA_GET_GOOGLE_MAP_COORDINATES, getGoogleMapCoordinates);
}
