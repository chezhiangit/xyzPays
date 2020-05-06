import RNFetchBlob from 'rn-fetch-blob';
import moment from 'moment';
import urlConstants from '../urlConstants';

const TIMEOUT = 30000;

const userEmailVerificationService = async email => {
  try {
    const url =
      urlConstants.BaseUrl + urlConstants.userEmailVerification + email;
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

const sendVerificationCodeService = async ChangePasswordToken => {
  try {
    const url =
      urlConstants.BaseUrl +
      urlConstants.sendMobileVerificaionCode +
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
    // throw new Error('User authentication failed.');
  }
};

export {userEmailVerificationService, sendVerificationCodeService};
