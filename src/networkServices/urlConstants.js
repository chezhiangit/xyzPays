export default {
  BaseUrl: 'http://xyzpaysdevwebapi.azurewebsites.net/',
  login: 'api/Login/AuthenticateUser',
  dashboard: 'api/Dashboard/GetDasboard?AccessToken=',
  newRegistration: 'api/Registration/NewRegistration',
  getDateFilter: 'api/Commission/GetDateFilter',
  getCommissionList: 'api/Commission/GetCommissionList?',
  getProfileInfo: 'api/Profile/GetProfileInfo?AccessToken=',
  saveProfileInfo: 'api/Profile/PostProfileInfo',
  getProductsList: 'api/ProductToSell/GetProductToSellLi?AccessToken=',
  getTrendingProducts: 'api/Trending/GetTrendingProducts?AccessToken=',
  getReferralRegStatusFilter: 'api/Referral/GetRegStatusFilter',
  getReferralDateFilter: 'api/Referral/GetDateFilter',
  getRepReferredUsers: 'api/Referral/GetRepReferredUsers?AccessToken=',
  getReferralCommissionList: 'api/Referral/GetCommissionList?AccessToken=',
  postReferraluser: 'api/Referral/PostReferraluser',

  forgotPwdSendMobileVerificaionCode:
    'api/ForgotPassword/SendMobileVerificaionCode?ChangePasswordToken=',
  forgotPwdUserEmailVerification: 'api/ForgotPassword/CheckUserExists?Email=',
  forgotPwdVerifiMobileVerificationCode:
    'api/ForgotPassword/VerifiMobileVerificationCode?ChangePasswordToken=',
  changePassword: 'api/ForgotPassword/ChangePassword',

  getPayoutHistory: 'api/Payout/GetPayoutHistory?AccessToken=',
  getPayoutDetails: 'api/Payout/GetPayoutDetails?AccessToken=',

  getMobileDetails: 'api/Mobile/GetMobileDetails?AccessToken=',
  sendMobileVerificaionCode:
    'api/Mobile/SendMobileVerificaionCode?AccessToken=',
  verifiMobileVerificationCode:
    'api/Mobile/VerifiMobileVerificationCode?AccessToken=',

  getEmailDetails: 'api/Email/GetEmailDetails?AccessToken=',
  sendEmailVerificaionCode: 'api/Email/SendEmailVerificaionCode?AccessToken=',
  verifiEmailVerificationCode:
    'api/Email/VerifiEmailVerificationCode?AccessToken=',
  pendingTask: 'api/TaskBased/GetTasks?AccessToken=',
  getProductDetails: 'api/Product/GetProductDetail?AccessToken=',

  getXyziesGoogleMapCoordinates: 'api/Contact/GetXyziesGoogleMapCoordinates',
  saveSuggestion: 'api/Contact/SaveSuggestion',

  getProductInfo: 'api/TaskBased/GetProductInfo?AccessToken=',
  getFormDefinition: 'api/TaskBased/GetFormDefinition?AccessToken=',
  postEntry: 'api/TaskBased/PostEntry?AccessToken=',
  getProviders: 'api/Registration/GetProviders',

  getProductsFormDefinition: 'api/EventBased/GetFormDefinition?AccessToken=',

  postCustomerDetails: 'api/EventBased/PostEntry?AccessToken=',

  landingPageDetails: 'api/Home/GetHomeDetails?AccessToken=',

  getFilterForEventBasedTaskList:
    'api/EventBased/GetFilterForEventBasedTaskList?AccessToken=',

  loadEventBasedTaskSummary:
    'api/EventBased/LoadEventBasedTaskSummary?AccessToken=',

  getEventBasedTaskList: 'api/EventBased/GetEventBasedTaskList?AccessToken=',

  loadLastFiveTransactions: 'api/EventBased/LoadLastFiveTransactions?AccessToken=',
  getTxnDetail: 'api/Transation/GetTxnDetail?AccessToken=',
  getTxnHistory: 'api/Transation/GetTxnHistory?AccessToken=',
};
