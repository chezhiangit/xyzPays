import {STORE_DASHBOARD_DATA} from '../ActionTypes';

const dashboardData = {
  pendingPayout: 0,
  totalDenied: 0,
  totalPayout: 0,
  totalCommissionReceivable: 0,
  repFirstName: '',
  repLastName: '',
};

const dashboardReducer = (
  state = {
    dashboardData,
  },
  action,
) => {
  switch (action.type) {
    case STORE_DASHBOARD_DATA:
      return {
        ...state,
        ...action.dashboardData,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
