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
    // throw new Error('User authentication failed.');
  }
};

export {fetchDashboardDataService};
