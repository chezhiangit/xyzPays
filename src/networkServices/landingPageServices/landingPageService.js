import RNFetchBlob from 'rn-fetch-blob';
// import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getLandingPageDetailsService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.landingPageDetails + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getLandingPageDetailsService url ...', url);
    console.log(
      'getLandingPageDetailsService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getLandingPageDetailsService response ...', response);
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
    console.log('getLandingPageDetailsService failed.', e);
    return null;
  }
};

export {getLandingPageDetailsService};
