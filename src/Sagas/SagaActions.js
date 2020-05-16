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
  STORE_REP_REFERRED_USERS_LIST,
  STORE_USER_DETAILS,
  STORE_PAYOUT_DATE_FILTER,
  STORE_PAYOUT_HISTORY_LIST,
  STORE_PAYOUT_DETAILS,
  STORE_PENDING_TASK_DATA,
  STORE_PENDING_TASK_PRODUCT_DETAILS_DATA,
  STORE_TRENDING_PRODUCTS_DETAILS,
  STORE_GOOGLE_MAP_COORDINATES,
  STORE_SEND_PWD_MOBILE_VERIFICATION_CODE,
  STORE_SEND_USER_EMAIL_VERIFICATION_CODE,
  STORE_SEND_USER_MOBILE_VERIFICATION_CODE,
  STORE_USER_EMAIL_VERIFIED,
  STORE_USER_MOBILE_VERIFIED,
  STORE_USER_EMAIL_DETAILS,
  STORE_USER_MOBILE_DETAILS,
  STORE_FORM_DEFENITION_DETAILS_DATA,
  SAGA_STORE_PROVIDERS,
  STORE_PRODUCTS_FORM_DEFENITION_LIST,
  STORE_LANDING_PAGE_DETAILS,
  STORE_EVENTBASED_TASK_SUMMARY,
  STORE_EVENTBASED_TASK_LIST,
  STORE_EVENTBASED_TASK_LIST_FILTER,
  STORE_TRANSACTION_FORM_DEFENITION_LIST,
  STORE_LAST_FIVE_TRANSACTIONS,
} from '../AppStore/ActionTypes';

export const userLoginSuccess = ({
  userName,
  userLoggedIn,
  accessToken,
  IsMobileVerificationDone,
  IsEmailVerificationDone,
  RepName,
}) => ({
  type: LOGIN_SUCCESSFUL,
  userName,
  userLoggedIn,
  accessToken,
  IsMobileVerificationDone,
  IsEmailVerificationDone,
  RepName,
});

export const storeDashboardData = dashboardData => ({
  type: STORE_DASHBOARD_DATA,
  dashboardData,
});

export const storeProductsList = productsList => ({
  type: STORE_PRODUCTS_LIST,
  productsList,
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

export const storeUserDetails = userDetails => ({
  type: STORE_USER_DETAILS,
  userDetails,
});

export const storePayoutDateFilter = dateFilter => ({
  type: STORE_PAYOUT_DATE_FILTER,
  dateFilter,
});

export const storePayoutHistoryList = payoutHistoryList => ({
  type: STORE_PAYOUT_HISTORY_LIST,
  payoutHistoryList,
});

export const storePayoutDetails = payoutDetails => ({
  type: STORE_PAYOUT_DETAILS,
  payoutDetails,
});

export const storePendingTaskData = pendingTask => ({
  type: STORE_PENDING_TASK_DATA,
  pendingTask,
});

export const storePendingTaskProductDetailsData = (
  productDetails,
  FormKey,
  TaskKey,
) => ({
  type: STORE_PENDING_TASK_PRODUCT_DETAILS_DATA,
  productDetails,
  FormKey,
  TaskKey,
});

export const storeTrendingProductDetailsData = productDetails => ({
  type: STORE_TRENDING_PRODUCTS_DETAILS,
  productDetails,
});

export const storeGoogleMapCoordinates = mapCoordinates => ({
  type: STORE_GOOGLE_MAP_COORDINATES,
  mapCoordinates,
});

export const storePwdSendMobileVerificationResponse = sendMobileVerificationRes => ({
  type: STORE_SEND_PWD_MOBILE_VERIFICATION_CODE,
  sendMobileVerificationRes,
});

export const storeEmailVerificationDetails = emailVeification => ({
  type: STORE_SEND_USER_EMAIL_VERIFICATION_CODE,
  emailVeification,
});

export const storeMobileVerificationDetails = mobileVeification => ({
  type: STORE_SEND_USER_MOBILE_VERIFICATION_CODE,
  mobileVeification,
});

export const userEmailVerified = status => ({
  type: STORE_USER_EMAIL_VERIFIED,
  status,
});

export const userMobileVerified = status => ({
  type: STORE_USER_MOBILE_VERIFIED,
  status,
});

export const storeUserEmailDetails = emailDetails => ({
  type: STORE_USER_EMAIL_DETAILS,
  emailDetails,
});

export const storeUserMobileDetails = mobileDetails => ({
  type: STORE_USER_MOBILE_DETAILS,
  mobileDetails,
});

export const storeFormDefenitionDetails = formDefenition => ({
  type: STORE_FORM_DEFENITION_DETAILS_DATA,
  formDefenition,
});

export const storeProviders = providers => ({
  type: SAGA_STORE_PROVIDERS,
  providers,
});

export const storeProductsFormDefenitionDetails = (
  formDefenition,
  // FormKey,
  // LeadKey,
  // ProductName,
) => ({
  type: STORE_PRODUCTS_FORM_DEFENITION_LIST,
  formDefenition,
  // FormKey,
  // LeadKey,
  // ProductName,
});

export const storeTransactionFormDefenitionDetails = formDefenition => ({
  type: STORE_TRANSACTION_FORM_DEFENITION_LIST,
  formDefenition,
});

export const storeLandingPageDetails = landingPageDetails => ({
  type: STORE_LANDING_PAGE_DETAILS,
  landingPageDetails,
});

export const storeEventBasedTaskSummary = taskSummary => ({
  type: STORE_EVENTBASED_TASK_SUMMARY,
  taskSummary,
});

export const storeEventBasedTaskList = taskList => ({
  type: STORE_EVENTBASED_TASK_LIST,
  taskList,
});

export const storeFilterForEventBasedTaskList = taskListFilter => ({
  type: STORE_EVENTBASED_TASK_LIST_FILTER,
  taskListFilter,
});

export const storeLastFiveTransactions = lastFiveTransaction => ({
  type: STORE_LAST_FIVE_TRANSACTIONS,
  lastFiveTransaction,
});
