import {takeLatest, call, put, select} from 'redux-saga/effects';
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
} from '../AppStore/ActionTypes';
import {
  storeProductsList,
  storeProductsFormDefenitionDetails,
  storeTransactionFormDefenitionDetails,
  storeEventBasedTaskSummary,
  storeEventBasedTaskList,
  storeLastFiveTransactions,
  storeFilterForEventBasedTaskList,
  storeTxnDetail,
  storeTxnHistory,
} from './SagaActions';
import {
  getProductListService,
  getProductsFormDefenitionService,
  postCustomerDetailsService,
  getEventBasedTaskSummaryService,
  getEventBasedTaskListService,
  getFilterForEventBasedTaskListService,
  loadLastFiveTransactionsService,
  getTxnDetailService,
  getTxnHistoryService,
} from '../networkServices/eventBasedTaskServices/eventBasedTaskService';

const getAccessToken = state => state.login.accessToken;

function* getProductsList(action) {
  try {
    console.log('getProductsList saga action ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(getProductListService, accessToken);
    console.log('saga prdocucts list api response...', response);
    if (response !== null && response.status === 200) {
      console.log('products list data ....', response);
      console.log('products list saga action ....', action);
      const productsList = [...response];

      console.log('productsList object ....', productsList);
      yield put(storeProductsList(productsList));
      console.log('getProductsList saga action ....', action);
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getProductsFormDefenitionDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getProductsFormDefenitionService,
      accessToken,
      action.FormKey,
      action.LeadKey,
    );
    console.log(
      'task transaction saga getFormDefenitionDetails api response...',
      response,
    );
    if (response !== null && response.status === 200) {
      console.log(
        'task transaction getFormDefenitionDetails data ....',
        response,
      );
      console.log(
        'task transaction getFormDefenitionDetails saga action ....',
        action,
      );
      const formDefenition = {...response}; // [...response.FormDefinition];

      console.log(
        ' task transaction getFormDefenitionDetails data object ....',
        formDefenition,
      );
      if (action.calledFrom === 'ProductsList') {
        yield put(storeProductsFormDefenitionDetails(formDefenition));
      } else if (action.calledFrom === 'TaskTransaction') {
        yield put(storeTransactionFormDefenitionDetails(formDefenition));
      }

      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* postCustomerDetails(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const payload = [...action.payload];
    console.log('saga postTaskEntry payload.....', payload);
    const response = yield call(
      postCustomerDetailsService,
      payload,
      accessToken,
      action.FormKey,
      action.LeadKey,
      action.StepKey,
    );
    console.log('saga postTaskEntry api response...', response);
    if (
      (response !== null && response.HttpStatusCode === 200) ||
      response.HttpStatusCode === '200'
    ) {
      console.log('postTaskEntry data ....', response);
      console.log('postTaskEntry saga action ....', action);
      action.onSuccesscallback(response.Message);
    } else if (response !== null) {
      console.log(' saga postTaskEntry failed message....', response[0].Message);
      action.onErrorcallback(response[0].Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getEventBasedTaskSummary(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getEventBasedTaskSummaryService,
      accessToken,
      action.FormKey,
    );
    console.log('saga getEventBasedTaskSummary api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getEventBasedTaskSummary data ....', response);
      console.log('getEventBasedTaskSummary saga action ....', action);
      const taskSummary = {...response}; // [...response.FormDefinition];

      // if (action.calledFrom === 'StartPendingTask') {
      console.log(' getEventBasedTaskSummary data object ....', taskSummary);
      yield put(storeEventBasedTaskSummary(taskSummary));
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* loadLastFiveTransactions(action) {
  try {
    console.log('saga loadLastFiveTransactions action received ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      loadLastFiveTransactionsService,
      accessToken,
      action.FormKey,
    );
    console.log('saga loadLastFiveTransactions api response...', response);
    // if (response !== null && response.status === 200) {
    if (response !== null) {
      delete response.status;
      console.log('loadLastFiveTransactions data ....', response);
      console.log('loadLastFiveTransactions saga action ....', action);
      const lastFiveTransaction = [...response]; // [...response.FormDefinition];

      yield put(storeLastFiveTransactions(lastFiveTransaction));
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getEventBasedTaskList(action) {
  try {
    console.log('saga getEventBasedTaskList action received ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getEventBasedTaskListService,
      accessToken,
      action.FormKey,
      action.StepKey,
    );
    console.log('saga getEventBasedTaskList api response...', response);
    if (response !== null && response.status === 200) {
      console.log('getEventBasedTaskList data ....', response);
      console.log('getEventBasedTaskList saga action ....', action);
      const taskList = [...response.Leads]; // [...response.FormDefinition];

      // if (action.calledFrom === 'StartPendingTask') {
      console.log(
        ' pending task getEventBasedTaskList data object ....',
        taskList,
      );
      yield put(storeEventBasedTaskList(taskList));
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getFilterForEventBasedTaskList(action) {
  try {
    console.log(
      'saga getFilterForEventBasedTaskList action received ....',
      action,
    );
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getFilterForEventBasedTaskListService,
      accessToken,
      action.FormKey,
    );
    console.log(
      'saga getFilterForEventBasedTaskList api response...',
      response,
    );
    // if (response !== null && response.status === 200) {
    if (response !== null) {
      console.log('getFilterForEventBasedTaskList data ....', response);
      console.log('getFilterForEventBasedTaskList saga action ....', action);
      const taskListFilter = [...response]; // [...response.FormDefinition];

      console.log(
        'getFilterForEventBasedTaskList data object ....',
        taskListFilter,
      );
      yield put(storeFilterForEventBasedTaskList(taskListFilter));
      action.onSuccesscallback();
    } else if (response === null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getTxnDetail(action) {
  try {
    console.log('saga getTxnDetail action received ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getTxnDetailService,
      accessToken,
      action.TxnKey,
    );
    console.log('saga getTxnDetail api response...', response);
    // if (response !== null && response.status === 200) {
    if (response !== null) {
      console.log('getTxnDetail data ....', response);
      console.log('getTxnDetail saga action ....', action);
      const taskTransactionDetails = {...response}; // [...response.FormDefinition];

      console.log('getTxnDetail data object ....', taskTransactionDetails);
      yield put(storeTxnDetail(taskTransactionDetails));
      action.onSuccesscallback();
    } else if (response === null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

function* getTxnHistory(action) {
  try {
    console.log('saga getTxnHistory action received ....', action);
    const accessToken = yield select(getAccessToken);
    const response = yield call(
      getTxnHistoryService,
      accessToken,
      action.TxnKey,
    );
    console.log('saga getTxnHistory api response...', response);
    // if (response !== null && response.status === 200) {
    if (response !== null) {
      console.log('getTxnHistory data ....', response);
      console.log('getTxnHistory saga action ....', action);
      const taskTransactionHistory = [...response];

      console.log('getTxnHistory data object ....', taskTransactionHistory);
      yield put(storeTxnHistory(taskTransactionHistory));
      action.onSuccesscallback();
    } else if (response === null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

export default function* watchEventBasedTaskAction() {
  yield takeLatest(SAGA_GET_PRODUCTS_LIST, getProductsList);
  yield takeLatest(
    SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
    getProductsFormDefenitionDetails,
  );
  yield takeLatest(SAGA_POST_CUSTOMER_DETAILS, postCustomerDetails);
  yield takeLatest(SAGA_GET_EVENTBASED_TASK_SUMMARY, getEventBasedTaskSummary);
  yield takeLatest(SAGA_GET_EVENTBASED_TASK_LIST, getEventBasedTaskList);
  yield takeLatest(
    SAGA_GET_EVENTBASED_TASK_LIST_FILTER,
    getFilterForEventBasedTaskList,
  );
  yield takeLatest(SAGA_LOAD_LAST_FIVE_TRANSACTIONS, loadLastFiveTransactions);
  yield takeLatest(SAGA_GET_TASK_TRANSACTION_DETAILS, getTxnDetail);
  yield takeLatest(SAGA_GET_TASK_TRANSACTION_HISTORY, getTxnHistory);
}
