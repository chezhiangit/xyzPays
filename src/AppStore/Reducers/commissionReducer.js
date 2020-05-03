import {
  STORE_COMMISSION_DATE_FILTER,
  STORE_COMMISSION_LIST,
} from '../ActionTypes';

const dateFilter = {
  Text: '',
};

const commissionList = [];

const commissionReducer = (
  state = {
    dateFilter,
    commissionList,
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
        commissionList: [...action.commissionList],
      };
    default:
      return state;
  }
};

export default commissionReducer;
