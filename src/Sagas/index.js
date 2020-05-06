import {all} from 'redux-saga/effects';
import watchuserLoginAction from './loginSaga';
import watchDashboarAction from './dashboardSaga';
import watchProductsListAction from './productListSaga';
import watchProfileAction from './profileSaga';
import watchCommissionAction from './commissionSaga';
import watchForgotPasswordActions from './forgotPasswordSaga';
import watchTrendingProductActions from './trendingProductsSaga';
import watchReferralActions from './referralSaga';
import watchPayoutAction from './payoutSaga';
import watchUserVerificationActions from './userVerificationSaga';

export default function* rootSaga() {
  yield all([
    watchuserLoginAction(),
    watchDashboarAction(),
    watchProductsListAction(),
    watchProfileAction(),
    watchCommissionAction(),
    watchForgotPasswordActions(),
    watchTrendingProductActions(),
    watchReferralActions(),
    watchPayoutAction(),
    watchUserVerificationActions(),
  ]);
}
