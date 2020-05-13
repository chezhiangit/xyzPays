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

const postCustomerDetailsService = async (payload, accessToken, FormKey, LeadKey) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.postCustomerDetails +
      accessToken +
      '&FormKey=' +
      FormKey +
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

export {
  getProductListService,
  getProductsFormDefenitionService,
  postCustomerDetailsService,
};
