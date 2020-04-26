import {
  SAGA_GET_COMMISSION_DATE_FILTER,
  SAGA_GET_COMMISSION_LIST,
} from './ActionTypes';

const getDateFilter = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_COMMISSION_DATE_FILTER,
  onSuccesscallback,
  onErrorcallback,
});

const getCommissionList = (
  SelectedDateRange,
  TxnStatusType,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_COMMISSION_LIST,
  SelectedDateRange,
  TxnStatusType,
  onSuccesscallback,
  onErrorcallback,
});

export {getDateFilter, getCommissionList};
