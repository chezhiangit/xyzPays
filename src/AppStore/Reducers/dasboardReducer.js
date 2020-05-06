import {STORE_DASHBOARD_DATA, STORE_PENDING_TASK_DATA} from '../ActionTypes';

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
    pendingTask: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_DASHBOARD_DATA:
      return {
        ...state,
        ...action.dashboardData,
      };
    case STORE_PENDING_TASK_DATA:
      return {
        ...state,
        pendingTask: [...action.pendingTask],
      };
    default:
      return state;
  }
};

export default dashboardReducer;
