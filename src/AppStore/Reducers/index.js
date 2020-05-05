import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import dashboardReducer from './dasboardReducer';
import productsListReducer from './productsListReducer';
import profileReducer from './profileReducer';
import commissionReducer from './commissionReducer';
import trendingProductsReducer from './trendingProductsReducer';
import referralReducer from './referralReducers';

const appReducer = combineReducers({
  login: loginReducer,
  dashboard: dashboardReducer,
  products: productsListReducer,
  profileInfo: profileReducer,
  commission: commissionReducer,
  trending: trendingProductsReducer,
  referral: referralReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
