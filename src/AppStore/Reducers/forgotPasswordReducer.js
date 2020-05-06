import {
  STORE_USER_DETAILS,
  STORE_SEND_PWD_MOBILE_VERIFICATION_CODE,
} from '../ActionTypes';

const forgotPassword = (
  state = {userDetails: {}, sendMobileVerificationRes: {}},
  action,
) => {
  switch (action.type) {
    case STORE_USER_DETAILS:
      return {
        ...state,
        userDetails: {...action.userDetails},
      };
    case STORE_SEND_PWD_MOBILE_VERIFICATION_CODE:
      return {
        ...state,
        sendMobileVerificationRes: {...action.sendMobileVerificationRes},
      };
    default:
      return state;
  }
};

export default forgotPassword;
