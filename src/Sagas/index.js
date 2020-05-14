import {all} from 'redux-saga/effects';
import watchuserLoginAction from './loginSaga';
import watchDashboarAction from './dashboardSaga';
import watchEventBasedTaskAction from './eventBasedTaskSaga';
import watchProfileAction from './profileSaga';
import watchCommissionAction from './commissionSaga';
import watchForgotPasswordActions from './forgotPasswordSaga';
import watchTrendingProductActions from './trendingProductsSaga';
import watchReferralActions from './referralSaga';
import watchPayoutAction from './payoutSaga';
import watchUserVerificationActions from './userVerificationSaga';
import watchContactsUsActions from './contactUSSaga';
import watchTaskEntryAction from './taskEntrySaga';
import watchLandingPageAction from './landingPageSaga';

export default function* rootSaga() {
  yield all([
    watchuserLoginAction(),
    watchDashboarAction(),
    watchEventBasedTaskAction(),
    watchProfileAction(),
    watchCommissionAction(),
    watchForgotPasswordActions(),
    watchTrendingProductActions(),
    watchReferralActions(),
    watchPayoutAction(),
    watchUserVerificationActions(),
    watchContactsUsActions(),
    watchTaskEntryAction(),
    watchLandingPageAction(),
  ]);
}
