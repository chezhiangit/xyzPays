import {
  SAGA_GET_USER_MOBILE_DETAIL,
  SAGA_SEND_USER_MOBILE_VERIFICATION_CODE,
  SAGA_VERIFY_USER_MOBILE_VERIFICATION_CODE,
  SAGA_GET_USER_EMAIL_DETAIL,
  SAGA_SEND_USER_EMAIL_VERIFICATION_CODE,
  SAGA_VERIFY_USER_EMAIL_VERIFICATION_CODE,
} from './ActionTypes';

const getUserMobileDetails = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_USER_MOBILE_DETAIL,
  onSuccesscallback,
  onErrorcallback,
});

const sendMobileVerificationCode = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SEND_USER_MOBILE_VERIFICATION_CODE,
  onSuccesscallback,
  onErrorcallback,
});

const veifyMobileVerificationCode = (
  ServiceToken,
  VerificationCode,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_VERIFY_USER_MOBILE_VERIFICATION_CODE,
  ServiceToken,
  VerificationCode,
  onSuccesscallback,
  onErrorcallback,
});

const getUserEmailDetails = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_USER_EMAIL_DETAIL,
  onSuccesscallback,
  onErrorcallback,
});

const sendEmailVerificationCode = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SEND_USER_EMAIL_VERIFICATION_CODE,
  onSuccesscallback,
  onErrorcallback,
});

const veifyEmailVerificationCode = (
  ServiceToken,
  VerificationCode,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_VERIFY_USER_EMAIL_VERIFICATION_CODE,
  ServiceToken,
  VerificationCode,
  onSuccesscallback,
  onErrorcallback,
});

export {
  getUserMobileDetails,
  sendMobileVerificationCode,
  veifyMobileVerificationCode,
  getUserEmailDetails,
  sendEmailVerificationCode,
  veifyEmailVerificationCode,
};
