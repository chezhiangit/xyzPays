import {SAGA_VERIFY_USER_EMAIL} from './ActionTypes';

const verifyUserEmail = (
  email,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_VERIFY_USER_EMAIL,
  email,
  onSuccesscallback,
  onErrorcallback,
});

export {verifyUserEmail};
