import {STORE_USER_DETAILS} from '../ActionTypes';

const forgotPassword = (state = {userDetails: {}}, action) => {
  switch (action.type) {
    case STORE_USER_DETAILS:
      return {
        ...state,
        userDetails: {...action.userDetails},
      };
    default:
      return state;
  }
};

export default forgotPassword;
