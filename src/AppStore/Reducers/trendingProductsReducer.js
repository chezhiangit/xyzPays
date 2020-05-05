import {STORE_TRENDING_PRODUCTS_LIST} from '../ActionTypes';

const trendingProductsReducer = (state = {trendingProductList: []}, action) => {
  switch (action.type) {
    case STORE_TRENDING_PRODUCTS_LIST:
      return {
        ...state,
        trendingProductList: [...action.trendingProducts],
      };
    default:
      return state;
  }
};

export default trendingProductsReducer;
