import {
  SAGA_AUTHENTICATE_USER,
  SAGA_REGISTER_USER,
  SAGA_GET_PROVIDERS,
} from './ActionTypes';

const authenticateUser = (
  userCredential,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_AUTHENTICATE_USER,
  userCredential,
  onSuccesscallback,
  onErrorcallback,
});

const registerNewUser = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_REGISTER_USER,
  payload,
  onSuccesscallback,
  onErrorcallback,
});

const getProviders = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PROVIDERS,
  onSuccesscallback,
  onErrorcallback,
});

export {authenticateUser, registerNewUser, getProviders};
