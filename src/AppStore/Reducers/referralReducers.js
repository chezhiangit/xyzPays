import {
  STORE_REFERRAL_COMMISSION_LIST,
  STORE_REFERRAL_DATE_FILTER,
  STORE_REFERRAL_REG_STATUS_FILTER,
  STORE_REFERRAL_USER,
  STORE_REP_REFERRED_USERS_LIST,
} from '../ActionTypes';

const referralReducer = (
  state = {
    dateFilter: [],
    registrationStatus: [],
    userList: [],
    referralCommissionList: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_REFERRAL_DATE_FILTER:
      return {
        ...state,
        dateFilter: [...action.dateFilter],
      };
    case STORE_REFERRAL_REG_STATUS_FILTER:
      return {
        ...state,
        registrationStatus: [...action.regFilter],
      };
    case STORE_REP_REFERRED_USERS_LIST:
      return {
        ...state,
        userList: [...action.userList],
      };
    case STORE_REFERRAL_COMMISSION_LIST:
      return {
        ...state,
        referralCommissionList: [...action.referralCommissionList],
      };
    default:
      return state;
  }
};

export default referralReducer;
