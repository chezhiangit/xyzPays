import {
  SAGA_GET_REFERRAL_DATE_FILTER,
  SAGA_GET_REP_REFERRED_USERS_LIST,
  SAGA_GET_REFERRAL_REG_STATUS_FILTER,
  SAGA_GET_REFERRAL_COMMISSION_LIST,
  SAGA_POST_REFERRAL_USER,
} from './ActionTypes';

export const getReferralDateFilter = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_REFERRAL_DATE_FILTER,
  onSuccesscallback,
  onErrorcallback,
});

export const getReferredUsersList = (
  StatusType,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_REP_REFERRED_USERS_LIST,
  StatusType,
  onSuccesscallback,
  onErrorcallback,
});

export const getReferralRegFilter = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_REFERRAL_REG_STATUS_FILTER,
  onSuccesscallback,
  onErrorcallback,
});

export const getReferralCommissionList = (
  SelectedDateRange,
  TxnStatusType,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_REFERRAL_COMMISSION_LIST,
  SelectedDateRange,
  TxnStatusType,
  onSuccesscallback,
  onErrorcallback,
});

export const postReferralUser = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_POST_REFERRAL_USER,
  payload,
  onSuccesscallback,
  onErrorcallback,
});
