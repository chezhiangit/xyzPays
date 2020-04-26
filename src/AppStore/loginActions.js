import {SAGA_AUTHENTICATE_USER, SAGA_REGISTER_USER} from './ActionTypes';

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

export {authenticateUser, registerNewUser};
