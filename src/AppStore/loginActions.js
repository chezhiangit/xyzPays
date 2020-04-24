import {SAGA_AUTHENTICATE_USER} from './ActionTypes';
const authenticateUser = userCredential => ({
  type: SAGA_AUTHENTICATE_USER,
  userCredential,
});

export {authenticateUser};
