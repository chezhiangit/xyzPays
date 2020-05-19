import {
  SAGA_GET_PAYOUT_DATE_FILTER,
  SAGA_GET_PAYOUT_HISTORY_LIST,
  SAGA_GET_PAYOUT_DETAILS,
  SAGA_POST_TRANSFER_MONEY_TO_PAYPAL,
} from './ActionTypes';

const getPayoutDateFilter = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PAYOUT_DATE_FILTER,
  onSuccesscallback,
  onErrorcallback,
});

const getPayoutHistoryList = (
  SelectedDateRange,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PAYOUT_HISTORY_LIST,
  SelectedDateRange,
  onSuccesscallback,
  onErrorcallback,
});

const getPayoutDetails = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PAYOUT_DETAILS,
  onSuccesscallback,
  onErrorcallback,
});

const transferToPaypal = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_POST_TRANSFER_MONEY_TO_PAYPAL,
  onSuccesscallback,
  onErrorcallback,
});

export {
  getPayoutDateFilter,
  getPayoutHistoryList,
  getPayoutDetails,
  transferToPaypal,
};
