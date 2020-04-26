import {
  STORE_COMMISSION_DATE_FILTER,
  STORE_COMMISSION_LIST,
} from '../ActionTypes';

const dateFilter = {
  Text: '',
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
