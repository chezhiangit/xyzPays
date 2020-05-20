import {
  SAGA_GET_PROFILE_INFO,
  SAGA_SAVE_PROFILE_INFO,
  SAGA_ADD_PROFILE_PICTURE,
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

export {getProfileInfo, saveProfileInfo, addProfilePicture};
