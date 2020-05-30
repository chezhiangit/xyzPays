import {
  SAGA_GET_PROFILE_INFO,
  SAGA_SAVE_PROFILE_INFO,
  SAGA_ADD_PROFILE_PICTURE,
  SAGA_PROFILE_GET_PROVIDERINFO,
} from './ActionTypes';

const getProfileInfo = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PROFILE_INFO,
  onSuccesscallback,
  onErrorcallback,
});

const saveProfileInfo = (
  profileInfo,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SAVE_PROFILE_INFO,
  profileInfo,
  onSuccesscallback,
  onErrorcallback,
});

const addProfilePicture = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_ADD_PROFILE_PICTURE,
  payload,
  onSuccesscallback,
  onErrorcallback,
});

const getProviderInfo = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_PROFILE_GET_PROVIDERINFO,
  onSuccesscallback,
  onErrorcallback,
});

export {getProfileInfo, saveProfileInfo, addProfilePicture, getProviderInfo};
