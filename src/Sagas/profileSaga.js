import {takeLatest, call, put, select} from 'redux-saga/effects';
import {
  SAGA_GET_PROFILE_INFO,
  SAGA_SAVE_PROFILE_INFO,
  SAGA_ADD_PROFILE_PICTURE,
  SAGA_PROFILE_GET_PROVIDERINFO,
} from '../AppStore/ActionTypes';
import {storeProfileInfo, storeGetProviderInfo} from './SagaActions';
import {
  fetchProfileInfoService,
  saveProfileInfoService,
  addProfilePictureService,
  getProviderInfoService,
} from '../networkServices/profileServices/profileInfoService';
// import moment from 'moment';

const getAccessToken = state => state.login.accessToken;

function* fetchProfileInfo(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(fetchProfileInfoService, accessToken);
    console.log('saga profile info api response...', response);
    if (response !== null && response.status === 200) {
      console.log('profile info data ....', response);
      console.log('profile info saga action ....', action);
      const profileInfo = {
        RepId: response[0].RepId,
        AddressLine: response[0].AddressLine,
        Mobile: response[0].Mobile,
        PaypalEmail: response[0].PaypalEmail,
        Website: response[0].Website,
        State: response[0].State,
        CreatedBy: response[0].VendorName,
        RegId: response[0].RegId,
        Status: response[0].IsActive ? 'Active' : 'InActive',
        FirstName: response[0].FirstName,
        LastName: response[0].LastName,
        RegistrationType: response[0]['Registration Type'],
        RegisteredOn: response[0]['Registered On'], // moment().format('MM/DD/YYYY'),
        ProductAccess: response[0]['Proudct Access'],
        City: response[0].City,
        ZipCode: response[0].ZipCode,
        LoginEmail: response[0].LoginEmail,
        RepKey: response[0].RepKey,
        Phone: response[0].Phone,
        ProfilePicture: response[0].ProfilePicture,
      };

      console.log('profile info object ....', profileInfo);
      yield put(
        storeProfileInfo({
          profileInfo,
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

function* saveProfileInfo(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = {...action.profileInfo, AccessToken: accessToken};
    console.log('saga save profile payload.....', payload);
    const response = yield call(saveProfileInfoService, payload);
    console.log('saga profile info api response...', response);
    if (
      response !== null &&
      response.status === 200 &&
      response.IsProfileEditSuccess
    ) {
      console.log('profile info data ....', response);
      console.log('profile info saga action ....', action);
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

function* addProfilePicture(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = {...action.payload, AccessToken: accessToken};
    console.log('saga addProfilePicture payload.....', payload);
    const response = yield call(addProfilePictureService, payload);
    console.log('saga addProfilePicture api response...', response);
    if (response !== null && response.status === 200) {
      // const status = response.Action;
      console.log('addProfilePicture data ....', response);
      console.log('addProfilePicture saga action ....', action);
      // yield put(storeWishListStatus(status));
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

function* getProviderInfo(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(getProviderInfoService, accessToken);
    console.log('saga getProviderInfoService info api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getProviderInfoService info data ....', response);
      console.log('getProviderInfoService info saga action ....', action);
      const providersInfo = [...response];

      console.log('getProviderInfoService info object ....', providersInfo);
      yield put(storeGetProviderInfo(providersInfo));
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

export default function* watchProfileAction() {
  yield takeLatest(SAGA_GET_PROFILE_INFO, fetchProfileInfo);
  yield takeLatest(SAGA_SAVE_PROFILE_INFO, saveProfileInfo);
  yield takeLatest(SAGA_ADD_PROFILE_PICTURE, addProfilePicture);
  yield takeLatest(SAGA_PROFILE_GET_PROVIDERINFO, getProviderInfo);
}
