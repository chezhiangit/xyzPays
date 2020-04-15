import {LOGIN_SUCCESSFUL} from '../appStore/ActionTypes';

export const userLoginSuccess = (userName, password) => ({
  type: LOGIN_SUCCESSFUL,
  userName,
  password,
});
