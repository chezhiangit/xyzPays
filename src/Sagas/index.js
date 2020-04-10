import {all} from 'redux-saga/effects';
import watchuserLoginAction from './loginSaga';

export default function* rootSaga() {
  yield all([watchuserLoginAction()]);
}
