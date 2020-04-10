import {LOGIN_SUCCESSFUL} from '../ActionTypes';

const loginReducer = (state = {userName: '', passWord: ''}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userName: action.userName,
        passWord: action.passWord,
      };
    default:
      return state;
  }
};

export default loginReducer;
