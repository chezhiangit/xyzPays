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

const addRemoveFromWishListService = async payload => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.addRemoveFromWishList;
    const headersParams = {};
    const paramsStr = JSON.stringify(payload);
    headersParams['Content-Type'] = 'application/json';
    console.log('addRemoveFromWishListService url ...', url);
    console.log('addRemoveFromWishListService paramsStr ...', paramsStr);
    console.log(
      'addRemoveFromWishListService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('addRemoveFromWishListService response ...', response);
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
    console.log('fetch addRemoveFromWishListService failed.', e);
    return null;
  }
};

export {getTrendingProductsService, addRemoveFromWishListService};
