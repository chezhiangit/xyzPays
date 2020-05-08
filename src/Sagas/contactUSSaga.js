import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_GOOGLE_MAP_COORDINATES,
  SAGA_SAVE_SUGGESTION,
} from '../AppStore/ActionTypes';
import {storeGoogleMapCoordinates} from './SagaActions';
import {
  getGoogleMapCoordinatesService,
  saveSuggestionService,
} from '../networkServices/contactUsServices/constactUsService';

const getAccessToken = state => state.login.accessToken;

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

function* saveSuggestion(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = {...action.payload, AccessToken: accessToken};
    const response = yield call(saveSuggestionService, payload);
    console.log('saga saveSuggestion api response...', response);
    if (response !== null && response.status === 200) {
    // if (response !== null && response !== '') {
      console.log('saveSuggestion data ....', response);
      console.log('saveSuggestion saga action ....', action);
      // const mapCoordinates = {...response};

      // console.log('saveSuggestion data object ....', mapCoordinates);
      // yield put(storeGoogleMapCoordinates(mapCoordinates));
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

export default function* watchContactsUsActions() {
  yield takeLatest(SAGA_GET_GOOGLE_MAP_COORDINATES, getGoogleMapCoordinates);
  yield takeLatest(SAGA_SAVE_SUGGESTION, saveSuggestion);
}
