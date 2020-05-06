import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const userEmailVerificationService = async email => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.forgotPwdUserEmailVerification + email;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('useremail verfication service url ...', url);
    console.log(
      'useremail verfication service headersParams ...',
      headersParams,
    );

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
    );
    console.log('useremail verfication service response ...', response);
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
    console.log('user email verfication service failed.', e);
    return null;
    // throw new Error('User authentication failed.');
  }
};

const sendMobileVerificationCodeService = async ChangePasswordToken => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.forgotPwdSendMobileVerificaionCode +
      ChangePasswordToken;
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
  ChangePasswordToken,
  ServiceToken,
  VerificationCode,
) => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.forgotPwdVerifiMobileVerificationCode +
      ChangePasswordToken +
      '&ServiceToken=' +
      ServiceToken +
      '&VerificationCode=' +
      VerificationCode;
    const headersParams = {};
    headersParams['Content-Type'] = 'application/json';
    console.log('getCommissionList url ...', url);
    console.log('getCommissionList headersParams ...', headersParams);
    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'GET',
      url,
      headersParams,
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
  }
};

const changePasswordService = async payload => {
  try {
    const url = urlConstants.BaseUrl + urlConstants.changePassword;
    const headersParams = {};
    const paramsStr = JSON.stringify(payload);
    headersParams['Content-Type'] = 'application/json';
    console.log('changePasswordService url ...', url);
    console.log('changePasswordService paramsStr ...', paramsStr);
    console.log('changePasswordService headersParams ...', headersParams);

    const response = await RNFetchBlob.config({timeout: TIMEOUT}).fetch(
      'POST',
      url,
      headersParams,
      paramsStr,
    );
    console.log('changePasswordService response ...', response);
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
    console.log('changePasswordService failed.', e);
    return null;
  }
};

export {
  userEmailVerificationService,
  sendMobileVerificationCodeService,
  verifiMobileVerificationCodeService,
  changePasswordService,
};
