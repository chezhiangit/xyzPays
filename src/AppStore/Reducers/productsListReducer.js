import {STORE_PRODUCTS_LIST} from '../ActionTypes';

const productsListReducer = (
  state = {
    productsList: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST:
      return {
        ...state,
        productsList: [...action.productsList],
      };
    default:
      return state;
  }
};

export default productsListReducer;
