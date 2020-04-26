import {
  STORE_COMMISSION_DATE_FILTER,
  STORE_COMMISSION_LIST,
} from '../ActionTypes';

const dateFilter = {
  // pendingPayout: 0,
  // totalDenied: 0,
  // totalPayout: 0,
  // totalCommissionReceivable: 0,
  // repFirstName: '',
  // repLastName: '',
};

const commissionData = {

};

const commissionReducer = (
  state = {
    dateFilter,
    commissionData,
  },
  action,
) => {
  switch (action.type) {
    case STORE_COMMISSION_DATE_FILTER:
      return {
        ...state,
        ...action.dateFilter,
      };
    case STORE_COMMISSION_LIST:
      return {
        ...state,
        ...action.commissionList,
      };
    default:
      return state;
  }
};

export default commissionReducer;
