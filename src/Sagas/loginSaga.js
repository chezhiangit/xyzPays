import {takeLatest, call, put} from 'redux-saga/effects';
import {SAGA_AUTHENTICATE_USER} from '../AppStore/ActionTypes';
import {userLoginSuccess} from './SagaActions';
import {AuthenticateUser} from '../networkServices/loginServices/login';

function* userLogin(action) {
  try {
    console.log('saga user login userinfo...', action.userCredential);
    const response = yield call(AuthenticateUser, action.userCredential);
    yield put(
      userLoginSuccess({
        userName: action.userCredential.userName,
        userLoggedIn: response.IsLoginSuccess,
        accessToken: response.AccessToken,
      }),
    );
  } catch (error) {}
}

export default function* watchuserLoginAction() {
  yield takeLatest(SAGA_AUTHENTICATE_USER, userLogin);
}
