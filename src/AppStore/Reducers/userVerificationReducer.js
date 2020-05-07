import {
  STORE_SEND_USER_EMAIL_VERIFICATION_CODE,
  STORE_SEND_USER_MOBILE_VERIFICATION_CODE,
  STORE_USER_EMAIL_DETAILS,
  STORE_USER_MOBILE_DETAILS,
} from '../ActionTypes';

const userVerificationReducer = (
  state = {emailVeification: {}, mobileVeification: {}, mobileDetails: {}},
  action,
) => {
  switch (action.type) {
    case STORE_SEND_USER_EMAIL_VERIFICATION_CODE:
      return {
        ...state,
        emailVeification: {...action.emailVeification},
      };
    case STORE_SEND_USER_MOBILE_VERIFICATION_CODE:
      return {
        ...state,
        mobileVeification: {...action.mobileVeification},
      };
    case STORE_USER_MOBILE_DETAILS:
      return {
        ...state,
        mobileDetails: {...action.mobileDetails},
      };
    case STORE_USER_EMAIL_DETAILS:
      return {
        ...state,
        emailDetails: {...action.emailDetails},
      };

    default:
      return state;
  }
};

export default userVerificationReducer;
