import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const fetchProfileInfoService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.getProfileInfo + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getProfileInfo url ...', url);
    console.log('getProfileInfo headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getProfileInfo response ...', response);
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
    console.log('fetch profile info failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const saveProfileInfoService = async payload => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.saveProfileInfo;
    const headersParams = {};
    const paramsStr = JSON.stringify(payload);
    headersParams['Content-Type'] = 'application/json';
    console.log('saveProfileInfo url ...', url);
    console.log('saveProfileInfo paramsStr ...', paramsStr);
    console.log('saveProfileInfo headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('saveProfileInfo response ...', response);
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
    console.log('fetch saveProfileInfo failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

export {fetchProfileInfoService, saveProfileInfoService};
