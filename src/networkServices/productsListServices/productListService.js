import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const fetchProductListService = async accessToken => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.getProductsList + accessToken;
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

export {fetchProductListService};
