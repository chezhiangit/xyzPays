import RNFetchBlob from 'rn-fetch-blob';
// import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getProductListService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.getProductsList + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getProductsList url ...', url);
    console.log('getProductsList headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getProductsList response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('fetch product list data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const getProductsFormDefenitionService = async (
  accessToken,
  FormKey,
  LeadKey,
  StepKey,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getProductsFormDefinition +
      accessToken +
      '&FormKey=' +
      FormKey +
      '&LeadKey=' +
      LeadKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getProductsFormDefenitionService url ...', url);
    console.log(
      'getProductsFormDefenitionService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getProductsFormDefenitionService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getProductsFormDefenitionService data failed.', e);
    return null;
  }
};

const postCustomerDetailsService = async (
  payload,
  accessToken,
  FormKey,
  LeadKey,
  StepKey,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.postCustomerDetails +
      accessToken +
      '&FormKey=' +
      FormKey +
      '&StepKey=' +
      StepKey +
      '&LeadKey=' +
      LeadKey;
    const headersParams = {};
    const paramsStr = JSON.stringify(payload);
    headersParams['Content-Type'] = 'application/json';
    console.log('postEntryService url ...', url);
    console.log('postEntryService paramsStr ...', paramsStr);
    console.log('postEntryService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('postEntryService response ...', response);
    const result = response.json();
    console.log('postEntryService result ...', result);
    if (response.respInfo.status === 200) {
      return result;
    } else if (result.HttpStatusCode === 500) {
      return result;
    }
    return null;
  } catch (e) {
    console.log('postEntryService failed.', e);
    return null;
  }
};

const getEventBasedTaskSummaryService = async (accessToken, FormKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.loadEventBasedTaskSummary +
      accessToken +
      '&FormKey=' +
      FormKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getEventBasedTaskSummaryService url ...', url);
    console.log(
      'getEventBasedTaskSummaryService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getEventBasedTaskSummaryService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getEventBasedTaskSummaryService data failed.', e);
    return null;
  }
};

const loadLastFiveTransactionsService = async (accessToken, FormKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.loadLastFiveTransactions +
      accessToken +
      '&FormKey=' +
      FormKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('loadLastFiveTransactionsService url ...', url);
    console.log(
      'loadLastFiveTransactionsService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('loadLastFiveTransactionsService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      // result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      // result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('loadLastFiveTransactionsService data failed.', e);
    return null;
  }
};

const getEventBasedTaskListService = async (accessToken, FormKey, StepKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getEventBasedTaskList +
      accessToken +
      '&FormKey=' +
      FormKey +
      '&StepKey=' +
      StepKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getEventBasedTaskListService url ...', url);
    console.log(
      'getEventBasedTaskListService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getEventBasedTaskListService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getEventBasedTaskListService data failed.', e);
    return null;
  }
};
const getFilterForEventBasedTaskListService = async (accessToken, FormKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getFilterForEventBasedTaskList +
      accessToken +
      '&FormKey=' +
      FormKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getFilterForEventBasedTaskListService url ...', url);
    console.log(
      'getFilterForEventBasedTaskListService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getFilterForEventBasedTaskListService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      // result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      // result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getFilterForEventBasedTaskListService data failed.', e);
    return null;
  }
};

const getTxnDetailService = async (accessToken, TxnKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getTxnDetail +
      accessToken +
      '&TxnKey=' +
      TxnKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getTxnDetailService url ...', url);
    console.log('getTxnDetailService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
    );
    console.log('getTxnDetailService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      // result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      // result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getTxnDetailService data failed.', e);
    return null;
  }
};

const getTxnHistoryService = async (accessToken, TxnKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getTxnHistory +
      accessToken +
      '&TxnKey=' +
      TxnKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getTxnHistoryService url ...', url);
    console.log('getTxnHistoryService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getTxnHistoryService response ...', response);
    const result = response.json();
    if (response.respInfo.status === 200) {
      // result.status = 200;
      return result;
    } else if (response.respInfo.status === 500) {
      // result.status = 500;
      return result;
    }
    return null;
  } catch (e) {
    console.log('getTxnHistoryService data failed.', e);
    return null;
  }
};

export {
  getProductListService,
  getProductsFormDefenitionService,
  postCustomerDetailsService,
  getEventBasedTaskSummaryService,
  getEventBasedTaskListService,
  getFilterForEventBasedTaskListService,
  loadLastFiveTransactionsService,
  getTxnDetailService,
  getTxnHistoryService,
};
