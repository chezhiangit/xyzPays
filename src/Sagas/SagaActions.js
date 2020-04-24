import {LOGIN_SUCCESSFUL} from '../AppStore/ActionTypes';

export const userLoginSuccess = (userName, password) => ({
  type: LOGIN_SUCCESSFUL,
  userName,
  password,
});
