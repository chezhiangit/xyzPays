import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const fetchDateFilterDataService = async accessToken => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.getDateFilter;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getDateFilter url ...', url);
    console.log('getDateFilter headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getDateFilter response ...', response);
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
    console.log('fetch getDateFilter data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const fetchCommissionListDataService = async (
  SelectedDateRange,
  TxnStatusType,
  AccessToken,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.getCommissionList +
      'AccessToken=' +
      AccessToken; //+
      // '&SelectedDateRange=' +
      // SelectedDateRange +
      // '&TxnStatusType=' +
      // TxnStatusType;
    // `AccessToken='${AccessToken}'&SelectedDateRange='${SelectedDateRange}'&TxnStatusType='${TxnStatusType}'`;
    // url.searchParams.append('AccessToken', AccessToken);
    // url.searchParams.append('SelectedDateRange', SelectedDateRange);
    // url.searchParams.append('TxnStatusType', TxnStatusType);
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    // headersParams.AccessToken = AccessToken;
    // headersParams.SelectedDateRange = SelectedDateRange;
    // headersParams.TxnStatusType = TxnStatusType;
    console.log('getCommissionList url ...', url);
    console.log('getCommissionList headersParams ...', headersParams);
    // const paramsStr = JSON.stringify({
    //   AccessToken: AccessToken,
    //   SelectedDateRange: SelectedDateRange,
    //   TxnStatusType: TxnStatusType,
    // });
    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
      // paramsStr,
    );
    console.log('getCommissionList response ...', response);
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
    console.log('fetch commission list data failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

export {fetchDateFilterDataService, fetchCommissionListDataService};
