import {
  SAGA_GET_PRODUCTS_LIST,
  SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
  SAGA_POST_CUSTOMER_DETAILS,
  SAGA_GET_EVENTBASED_TASK_SUMMARY,
  SAGA_GET_EVENTBASED_TASK_LIST,
  SAGA_GET_EVENTBASED_TASK_LIST_FILTER,
  SAGA_LOAD_LAST_FIVE_TRANSACTIONS,
  SAGA_GET_TASK_TRANSACTION_DETAILS,
  SAGA_GET_TASK_TRANSACTION_HISTORY,
} from './ActionTypes';
const getProductsList = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PRODUCTS_LIST,
  onSuccesscallback,
  onErrorcallback,
});

const getProductsFormDefenitionDetailsData = (
  FormKey,
  LeadKey,
  calledFrom,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
  FormKey,
  LeadKey,
  calledFrom,
  onSuccesscallback,
  onErrorcallback,
});

const postCustomerDetails = (
  payload,
  FormKey,
  LeadKey,
  StepKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_POST_CUSTOMER_DETAILS,
  payload,
  FormKey,
  LeadKey,
  StepKey,
  onSuccesscallback,
  onErrorcallback,
});

const getEventBasedTaskSummary = (
  FormKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_EVENTBASED_TASK_SUMMARY,
  FormKey,
  onSuccesscallback,
  onErrorcallback,
});

const getEventBasedTaskList = (
  FormKey,
  StepKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_EVENTBASED_TASK_LIST,
  FormKey,
  StepKey,
  onSuccesscallback,
  onErrorcallback,
});

const getFilterForEventBasedTaskList = (
  FormKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_EVENTBASED_TASK_LIST_FILTER,
  FormKey,
  onSuccesscallback,
  onErrorcallback,
});

const loadLastFiveTransactions = (
  FormKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_LOAD_LAST_FIVE_TRANSACTIONS,
  FormKey,
  onSuccesscallback,
  onErrorcallback,
});

const getTxnDetail = (
  TxnKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_TASK_TRANSACTION_DETAILS,
  TxnKey,
  onSuccesscallback,
  onErrorcallback,
});

const getTxnHistory = (
  TxnKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_TASK_TRANSACTION_HISTORY,
  TxnKey,
  onSuccesscallback,
  onErrorcallback,
});

export {
  getProductsList,
  getProductsFormDefenitionDetailsData,
  postCustomerDetails,
  getEventBasedTaskSummary,
  getEventBasedTaskList,
  getFilterForEventBasedTaskList,
  loadLastFiveTransactions,
  getTxnDetail,
  getTxnHistory,
};
