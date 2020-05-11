import {SET_INITIAL_ROUTE} from './ActionTypes';

const setIntialRoute = initialRoute => ({
  type: SET_INITIAL_ROUTE,
  initialRoute,
});

export {setIntialRoute};
