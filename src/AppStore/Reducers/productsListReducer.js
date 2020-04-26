import {STORE_PRODUCTS_LIST} from '../ActionTypes';

// const dashboardData = {
//   pendingPayout: 0,
//   totalDenied: 0,
//   totalPayout: 0,
//   totalCommissionReceivable: 0,
//   repFirstName: '',
//   repLastName: '',
// };

const productsListReducer = (
  state = {
    // ...dashboardData,
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST:
      return {
        ...state,
        ...action.productsList,
      };
    default:
      return state;
  }
};

export default productsListReducer;
