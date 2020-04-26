import {takeLatest, call, put, select} from 'redux-saga/effects';
import {SAGA_GET_DASHBOARD_DATA} from '../AppStore/ActionTypes';
import {storeDashboardData} from './SagaActions';
import {fetchDashboardDataService} from '../networkServices/dashboardServices/dashboardService';

const getAccessToken = state => state.login.accessToken;

function* fetchDashboardData(action) {
  try {
    const accessToken = yield select(getAccessToken);
    const response = yield call(fetchDashboardDataService, accessToken);
    console.log('saga dashboard api response...', response);
    if (response !== null && response.status === 200) {
      console.log('dashboard data ....', response);
      console.log('dashboard saga action ....', action);
      const dashboardData = {
        pendingPayout: response['Commission Sum'][0].PendingPayout,
        totalDenied: response['Commission Sum'][0].TotalDenied,
        totalPayout: response['Commission Sum'][0].TotalPayout,
        totalCommissionReceivable:
          response['Commission Sum'][0].TotalCommissionReceivable,
        repFirstName: response['Rep Info'][0].FirstName,
        repLastName: response['Rep Info'][0].LastName,
      };

      console.log('dashboard data object ....', dashboardData);
      yield put(
        storeDashboardData({
          dashboardData,
        }),
      );
      action.onSuccesscallback();
    } else if (response !== null) {
      action.onErrorcallback(response.Message);
    } else {
      action.onErrorcallback('Unable to complete your request. Pls try again.');
    }
  } catch (error) {
    action.onErrorcallback('Unable to complete your request. Pls try again.');
  }
}

export default function* watchDashboarAction() {
  yield takeLatest(SAGA_GET_DASHBOARD_DATA, fetchDashboardData);
}
