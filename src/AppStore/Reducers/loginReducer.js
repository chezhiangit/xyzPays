import {LOGIN_SUCCESSFUL} from '../ActionTypes';

const loginReducer = (
  state = {userName: '', userLoggedIn: false, accessToken: ''},
  action,
) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userName: action.userName,
        passWord: action.passWord,
        userLoggedIn: action.userLoggedIn,
      };
    default:
      return state;
  }
};

export default loginReducer;
