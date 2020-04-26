import {SAGA_GET_PROFILE_INFO, SAGA_SAVE_PROFILE_INFO} from './ActionTypes';

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

export {getProfileInfo, saveProfileInfo};
