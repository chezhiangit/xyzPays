import {SAGA_GET_DASHBOARD_DATA} from './ActionTypes';
const getDashboardData = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_DASHBOARD_DATA,
  onSuccesscallback,
  onErrorcallback,
});

export {getDashboardData};
