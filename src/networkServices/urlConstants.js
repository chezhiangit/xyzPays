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
};
