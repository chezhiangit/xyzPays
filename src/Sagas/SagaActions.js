import {
  LOGIN_SUCCESSFUL,
  STORE_DASHBOARD_DATA,
  STORE_PRODUCTS_LIST,
  STORE_PROFILE_INFO,
  STORE_COMMISSION_DATE_FILTER,
  STORE_COMMISSION_LIST,
  STORE_TRENDING_PRODUCTS_LIST,
  STORE_REFERRAL_COMMISSION_LIST,
  STORE_REFERRAL_DATE_FILTER,
  STORE_REFERRAL_REG_STATUS_FILTER,
  STORE_REFERRAL_USER,
  STORE_REP_REFERRED_USERS_LIST,
} from '../AppStore/ActionTypes';

export const userLoginSuccess = ({userName, userLoggedIn, accessToken}) => ({
  type: LOGIN_SUCCESSFUL,
  userName,
  userLoggedIn,
  accessToken,
});

export const storeDashboardData = dashboardData => ({
  type: STORE_DASHBOARD_DATA,
  dashboardData,
});

export const storeProductsList = productList => ({
  type: STORE_PRODUCTS_LIST,
  productList,
});

export const storeProfileInfo = profileInfo => ({
  type: STORE_PROFILE_INFO,
  profileInfo,
});

export const storeCommissionDateFilter = dateFilter => ({
  type: STORE_COMMISSION_DATE_FILTER,
  dateFilter,
});

export const storeCommissionList = commissionList => ({
  type: STORE_COMMISSION_LIST,
  commissionList,
});

export const storeTrendingProductsList = trendingProducts => ({
  type: STORE_TRENDING_PRODUCTS_LIST,
  trendingProducts,
});

export const storeReferralDateFilter = dateFilter => ({
  type: STORE_REFERRAL_DATE_FILTER,
  dateFilter,
});

export const storeReferredUsersList = userList => ({
  type: STORE_REP_REFERRED_USERS_LIST,
  userList,
});

export const storeReferralRegFilter = regFilter => ({
  type: STORE_REFERRAL_REG_STATUS_FILTER,
  regFilter,
});

export const storeReferralCommissionList = referralCommissionList => ({
  type: STORE_REFERRAL_COMMISSION_LIST,
  referralCommissionList,
});

