import {SET_INITIAL_ROUTE, STORE_LANDING_PAGE_DETAILS} from '../ActionTypes';

const landingPageReducer = (
  state = {initialRoute: 'AppLandingPage', landingPageDetails: {}},
  action,
) => {
  switch (action.type) {
    case SET_INITIAL_ROUTE:
      return {
        ...state,
        initialRoute: action.initialRoute,
      };
    case STORE_LANDING_PAGE_DETAILS:
      return {
        ...state,
        landingPageDetails: {...action.landingPageDetails},
      };
    default:
      return state;
  }
};

export default landingPageReducer;
