import {
  STORE_PAYOUT_DATE_FILTER,
  STORE_PAYOUT_HISTORY_LIST,
  STORE_PAYOUT_DETAILS,
} from '../ActionTypes';

const payoutReducer = (
  state = {dateFilter: [], payoutHistoryList: [], payoutDetails: {}},
  action,
) => {
  switch (action.type) {
    case STORE_PAYOUT_DATE_FILTER:
      return {
        ...state,
        dateFilter: [...action.dateFilter],
      };
    case STORE_PAYOUT_HISTORY_LIST:
      return {
        ...state,
        payoutHistoryList: [...action.payoutHistoryList],
      };
    case STORE_PAYOUT_DETAILS:
      return {
        ...state,
        payoutDetails: {...action.payoutDetails},
      };
    default:
      return state;
  }
};

export default payoutReducer;
