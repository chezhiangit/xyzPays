import {SAGA_VERIFY_USER_EMAIL, SAGA_SEND_VERIFICATION_CODE} from './ActionTypes';

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

const sendVerificationCode = (
  ChangePasswordToken,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SEND_VERIFICATION_CODE,
  ChangePasswordToken,
  onSuccesscallback,
  onErrorcallback,
});

export {verifyUserEmail, sendVerificationCode};
