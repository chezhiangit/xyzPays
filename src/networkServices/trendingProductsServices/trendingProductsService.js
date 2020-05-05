import RNFetchBlob from 'rn-fetch-blob';
// import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getTrendingProductsService = async accessToken => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.getTrendingProducts + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getTrendingProductsService url ...', url);
    console.log('getTrendingProductsService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getTrendingProductsService response ...', response);
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
    console.log('getTrendingProductsService failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

export {getTrendingProductsService};
