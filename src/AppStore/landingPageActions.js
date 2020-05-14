import {SET_INITIAL_ROUTE, SAGA_GET_LANDING_PAGE_DETAILS} from './ActionTypes';

const setIntialRoute = initialRoute => ({
  type: SET_INITIAL_ROUTE,
  initialRoute,
});

const getLandingPageDetails = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_LANDING_PAGE_DETAILS,
  onSuccesscallback,
  onErrorcallback,
});

export {setIntialRoute, getLandingPageDetails};
