import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import dashboardReducer from './dasboardReducer';
import productsListReducer from './productsListReducer';
import profileReducer from './profileReducer';
import commissionReducer from './commissionReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  products: productsListReducer,
  profileInfo: profileReducer,
  commission: commissionReducer,
});

export default rootReducer;
