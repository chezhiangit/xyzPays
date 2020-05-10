import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getProductDetailsService = async (accessToken, ProductKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getProductInfo +
      accessToken +
      '&ProductKey=' +
      ProductKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getProductDetailsService url ...', url);
    console.log('getProductDetailsService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getProductDetailsService response ...', response);
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
    console.log('getProductDetailsService data failed.', e);
    return null;
  }
};

const getFormDefenitionService = async (accessToken, FormKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getFormDefinition +
      accessToken +
      '&FormKey=' +
      FormKey;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getFormDefenitionService url ...', url);
    console.log('getFormDefenitionService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getFormDefenitionService response ...', response);
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
    console.log('getFormDefenitionService data failed.', e);
    return null;
  }
};

const postEntryService = async (payload, accessToken, FormKey, TaskKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.postEntry +
      accessToken +
      '&FormKey=' +
      FormKey +
      '&TaskKey=' +
      TaskKey;
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
    if (result.HttpStatusCode === 200 || result.HttpStatusCode === '200') {
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

export {getProductDetailsService, getFormDefenitionService, postEntryService};
