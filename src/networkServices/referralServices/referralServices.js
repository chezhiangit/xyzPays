import RNFetchBlob from 'rn-fetch-blob';
// import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getRegistrationStatusService = async () => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.getReferralRegStatusFilter;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getRegistrationStatusService url ...', url);
    console.log(
      'getRegistrationStatusService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getRegistrationStatusService response ...', response);
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
    console.log('fetch getRegistrationStatusService data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const getReferralDateFilterService = async () => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.getReferralDateFilter;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getReferralDateFilterService url ...', url);
    console.log(
      'getReferralDateFilterService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getReferralDateFilterService response ...', response);
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
    console.log('fetch getReferralDateFilterService data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const getReferredUserListService = async (StatusType, AccessToken) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getRepReferredUsers +
      AccessToken +
      '&StatusType=' +
      StatusType;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';

    console.log('getReferredUserListService url ...', url);
    console.log('getReferredUserListService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
      // paramsStr,
    );
    console.log('getReferredUserListService response ...', response);
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
    console.log('fetch getReferredUserListService data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const getReferralCommissionListService = async (
  SelectedDateRange,
  TxnStatusType,
  AccessToken,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getReferralCommissionList +
      AccessToken +
      '&SelectedDateRange=' +
      SelectedDateRange +
      '&TxnStatusType=' +
      TxnStatusType;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getReferralCommissionListService url ...', url);
    console.log(
      'getReferralCommissionListService headersParams ...',
      headersParams,
    );
    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
      // paramsStr,
    );
    console.log('getReferralCommissionListService response ...', response);
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
    console.log('fetch getReferralCommissionListService failed.', e);
    return null;
  }
};

const postReferralUserService = async (payload, AccessToken) => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.postReferraluser;
    const headersParams = {};
    // const requestBody = {
    //   UserName: userCredentials.userName,
    //   Password: userCredentials.password,
    // };
    const requestBody = {...payload, AccessToken};
    headersParams['Content-Type'] = 'application/json';
    const paramsStr = JSON.stringify(requestBody);
    console.log(' postReferralUserService url ...', url);
    console.log('postReferralUserService paramsStr ...', paramsStr);
    console.log('postReferralUserService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('postReferralUserService response ...', response);
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
    console.log('postReferralUserService failed.', e);
    return null;
  }
};

export {
  getRegistrationStatusService,
  getReferralDateFilterService,
  getReferredUserListService,
  getReferralCommissionListService,
  postReferralUserService,
};
