import {
  SAGA_GET_DASHBOARD_DATA,
  SAGA_GET_PENDING_TASK_DATA,
  SAGA_GET_PRODUCT_DETAILS_DATA,
} from './ActionTypes';

const getDashboardData = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_DASHBOARD_DATA,
  onSuccesscallback,
  onErrorcallback,
});

const getPendingTaskData = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PENDING_TASK_DATA,
  onSuccesscallback,
  onErrorcallback,
});

const getProductDetailsData = (
  ProductKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
  calledFrom = 'StartPendingTask',
) => ({
  type: SAGA_GET_PRODUCT_DETAILS_DATA,
  ProductKey,
  onSuccesscallback,
  onErrorcallback,
  calledFrom,
});

export {getDashboardData, getPendingTaskData, getProductDetailsData};
