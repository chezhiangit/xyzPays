import {
  LOGIN_SUCCESSFUL,
  STORE_USER_EMAIL_VERIFIED,
  STORE_USER_MOBILE_VERIFIED,
  SAGA_STORE_PROVIDERS,
} from '../ActionTypes';

const loginReducer = (
  state = {userName: '', userLoggedIn: false, accessToken: '', providers: []},
  action,
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userName: action.userName,
        accessToken: action.accessToken,
        userLoggedIn: action.userLoggedIn,
        IsEmailVerificationDone: action.IsEmailVerificationDone,
        IsMobileVerificationDone: action.IsMobileVerificationDone,
      };
    case STORE_USER_EMAIL_VERIFIED:
      return {
        ...state,
        IsEmailVerificationDone: action.status,
      };
    case STORE_USER_MOBILE_VERIFIED:
      return {
        ...state,
        IsMobileVerificationDone: action.status,
      };
    case SAGA_STORE_PROVIDERS:
      console.log('action.providers ....', action.providers);
      return {
        ...state,
        providers: [...action.providers],
      };
    default:
      return state;
  }
};

export default loginReducer;
