import {SET_INITIAL_ROUTE} from '../ActionTypes';

const landingPageReducer = (state = {initialRoute: ''}, action) => {
  switch (action.type) {
    case SET_INITIAL_ROUTE:
      return {
        ...state,
        initialRoute: action.initialRoute,
      };
    default:
      return state;
  }
};

export default landingPageReducer;
