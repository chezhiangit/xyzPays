import {
  SAGA_VERIFY_USER_EMAIL,
  SAGA_SEND_PWD_MOBILE_VERIFICATION_CODE,
  SAGA_VERIFY_PWD_MOBILE_VERIFICATION_CODE,
  SAGA_FORGOT_PWD_CHANGE_PASSWORD,
} from './ActionTypes';

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

const sendMobileVerificationCode = (
  ChangePasswordToken,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SEND_PWD_MOBILE_VERIFICATION_CODE,
  ChangePasswordToken,
  onSuccesscallback,
  onErrorcallback,
});

const veifyMobileVerificationCode = (
  ChangePasswordToken,
  ServiceToken,
  VerificationCode,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_VERIFY_PWD_MOBILE_VERIFICATION_CODE,
  ChangePasswordToken,
  ServiceToken,
  VerificationCode,
  onSuccesscallback,
  onErrorcallback,
});

const changePassword = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_FORGOT_PWD_CHANGE_PASSWORD,
  payload,
  onSuccesscallback,
  onErrorcallback,
});

export {
  verifyUserEmail,
  sendMobileVerificationCode,
  veifyMobileVerificationCode,
  changePassword,
};
