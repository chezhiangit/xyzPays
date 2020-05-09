import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const fetchDashboardDataService = async accessToken => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.dashboard + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('DashboardData url ...', url);
    console.log('DashboardData headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('dashboard response ...', response);
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
    console.log('fetch dashboard data failed.', e);
    return null;
  }
};

const getPendingTaskService = async accessToken => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.pendingTask + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getPendingTaskService url ...', url);
    console.log('getPendingTaskService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getPendingTaskService response ...', response);
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
    console.log('getPendingTaskService data failed.', e);
    return null;
  }
};

// const getProductDetailsService = async (accessToken, ProductKey) => {
//   try {
//     const url =
//       urlConstants.BaseUrl +
//       urlConstants.getProductInfo +
//       accessToken +
//       '&ProductKey=' +
//       ProductKey;
//     const headersParams = {};
//     headersParams['Content-Type'] = 'application/json';
//     console.log('getProductDetailsService url ...', url);
//     console.log('getProductDetailsService headersParams ...', headersParams);

//     const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
//       'GET',
//       url,
//       headersParams,
//     );
//     console.log('getProductDetailsService response ...', response);
//     const result = response.json();
//     if (response.respInfo.status === 200) {
//       result.status = 200;
//       return result;
//     } else if (response.respInfo.status === 500) {
//       result.status = 500;
//       return result;
//     }
//     return null;
//   } catch (e) {
//     console.log('getProductDetailsService data failed.', e);
//     return null;
//   }
// };

// const getFormDefenitionService = async (accessToken, FormKey) => {
//   try {
//     const url =
//       urlConstants.BaseUrl +
//       urlConstants.getFormDefinition +
//       accessToken +
//       '&FormKey=' +
//       FormKey;
//     const headersParams = {};
//     headersParams['Content-Type'] = 'application/json';
//     console.log('getFormDefenitionService url ...', url);
//     console.log('getFormDefenitionService headersParams ...', headersParams);

//     const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
//       'GET',
//       url,
//       headersParams,
//     );
//     console.log('getFormDefenitionService response ...', response);
//     const result = response.json();
//     if (response.respInfo.status === 200) {
//       result.status = 200;
//       return result;
//     } else if (response.respInfo.status === 500) {
//       result.status = 500;
//       return result;
//     }
//     return null;
//   } catch (e) {
//     console.log('getFormDefenitionService data failed.', e);
//     return null;
//   }
// };

// const postEntryService = async payload => {
//   try {
//     const url = urlConstants.BaseUrl + urlConstants.postEntry;
//     const headersParams = {};
//     const paramsStr = JSON.stringify(payload);
//     headersParams['Content-Type'] = 'application/json';
//     console.log('postEntryService url ...', url);
//     console.log('postEntryService paramsStr ...', paramsStr);
//     console.log('postEntryService headersParams ...', headersParams);

//     const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
//       'POST',
//       url,
//       headersParams,
//       paramsStr,
//     );
//     console.log('postEntryService response ...', response);
//     const result = response.json();
//     if (response.respInfo.status === 200) {
//       result.status = 200;
//       return result;
//     } else if (response.respInfo.status === 500) {
//       result.status = 500;
//       return result;
//     }
//     return null;
//   } catch (e) {
//     console.log('postEntryService failed.', e);
//     return null;
//   }
// };

export {
  fetchDashboardDataService,
  getPendingTaskService,
  // getProductDetailsService,
  // getFormDefenitionService,
};
