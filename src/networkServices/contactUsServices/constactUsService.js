import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getGoogleMapCoordinatesService = async () => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.getXyziesGoogleMapCoordinates;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getGoogleMapCoordinates url ...', url);
    console.log('getGoogleMapCoordinates headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getGoogleMapCoordinates response ...', response);
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
    console.log('getGoogleMapCoordinates failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

export {getGoogleMapCoordinatesService};
