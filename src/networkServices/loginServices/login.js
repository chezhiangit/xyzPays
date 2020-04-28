import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const authenticateUserService = async userCredentials => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.login;
    const headersParams = {};
    const requestBody = {
      UserName: userCredentials.userName,
      Password: userCredentials.password,
    };
    headersParams['Content-Type'] = 'application/json';
    const paramsStr = JSON.stringify(requestBody);
    console.log('login url ...', url);
    console.log('login paramsStr ...', paramsStr);
    console.log('login headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('login response ...', response);
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
    console.log('User authentication failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const registerNewUserService = async payload => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.newRegistration;
    const headersParams = {};
    // const requestBody = {
    //   UserName: userCredentials.userName,
    //   Password: userCredentials.password,
    // };
    headersParams['Content-Type'] = 'application/json';
    const paramsStr = JSON.stringify(payload);
    console.log(' registerNewUser url ...', url);
    console.log('registerNewUser paramsStr ...', paramsStr);
    console.log('registerNewUser headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('registerNewUser response ...', response);
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
    console.log('User registration failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

export {authenticateUserService, registerNewUserService};
