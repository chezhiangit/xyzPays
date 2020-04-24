import {takeLatest, call, put} from 'redux-saga/effects';
// import {fetchItemDescription} from '../network/TireService';
import {USER_LOGIN} from '../AppStore/ActionTypes';
import {userLoginSuccess} from './SagaActions';

function* userLogin(action) {
  try {
    // const description = yield call(
    //   fetchItemDescription,
    //   action.itemNumber,
    //   action.membershipId,
    // );
    yield put(userLoginSuccess(/*userName, password*/));
  } catch (error) {}
}

export default function* watchuserLoginAction() {
  yield takeLatest(USER_LOGIN, userLogin);
}
