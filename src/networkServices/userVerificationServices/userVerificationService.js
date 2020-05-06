import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const getUserMobileDetailService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.getMobileDetails + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getUserMobileDetailService url ...', url);
    console.log('getUserMobileDetailService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getUserMobileDetailService response ...', response);
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
    console.log('getUserMobileDetailService failed.', e);
    return null;
  }
};

const sendMobileVerificationCodeService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.sendMobileVerificaionCode +
      accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('sendVerificationCodeService url ...', url);
    console.log('sendVerificationCodeService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('sendVerificationCodeService response ...', response);
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
    console.log('sendVerificationCodeService failed.', e);
    return null;
  }
};

const verifiMobileVerificationCodeService = async (
  accessToken,
  ServiceToken,
  VerificationCode,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.verifiMobileVerificationCode +
      accessToken +
      '&ServiceToken=' +
      ServiceToken +
      '&VerificationCode=' +
      VerificationCode;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('verifiMobileVerificationCodeService url ...', url);
    console.log(
      'verifiMobileVerificationCodeService headersParams ...',
      headersParams,
    );
    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('verifiMobileVerificationCodeService response ...', response);
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
    console.log('verifiMobileVerificationCodeService failed.', e);
    return null;
  }
};

const getUserEmailDetailService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.getMobileDetails + accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getUserEmailDetailService url ...', url);
    console.log('getUserEmailDetailService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('getUserEmailDetailService response ...', response);
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
    console.log('getUserEmailDetailService failed.', e);
    return null;
  }
};

const sendEmailVerificationCodeService = async accessToken => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.sendMobileVerificaionCode +
      accessToken;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('sendEmailVerificationCodeService url ...', url);
    console.log(
      'sendEmailVerificationCodeService headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('sendEmailVerificationCodeService response ...', response);
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
    console.log('sendEmailVerificationCodeService failed.', e);
    return null;
  }
};

const verifiEmailVerificationCodeService = async (
  accessToken,
  ServiceToken,
  VerificationCode,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.verifiMobileVerificationCode +
      accessToken +
      '&ServiceToken=' +
      ServiceToken +
      '&VerificationCode=' +
      VerificationCode;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('verifiEmailVerificationCodeService url ...', url);
    console.log(
      'verifiEmailVerificationCodeService headersParams ...',
      headersParams,
    );
    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('verifiEmailVerificationCodeService response ...', response);
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
    console.log('verifiEmailVerificationCodeService failed.', e);
    return null;
  }
};

export {
  getUserMobileDetailService,
  sendMobileVerificationCodeService,
  verifiMobileVerificationCodeService,
  getUserEmailDetailService,
  sendEmailVerificationCodeService,
  verifiEmailVerificationCodeService,
};
