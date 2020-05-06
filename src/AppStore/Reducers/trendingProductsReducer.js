import {
  STORE_TRENDING_PRODUCTS_LIST,
  STORE_TRENDING_PRODUCTS_DETAILS,
} from '../ActionTypes';

const trendingProductsReducer = (
  state = {trendingProductList: [], productDetails: {}},
  action,
) => {
  switch (action.type) {
    case STORE_TRENDING_PRODUCTS_LIST:
      return {
        ...state,
        trendingProductList: [...action.trendingProducts],
        productDetails: {},
      };
    case STORE_TRENDING_PRODUCTS_DETAILS:
      return {
        ...state,
        productDetails: {...action.productDetails},
      };
    default:
      return state;
  }
};

export default trendingProductsReducer;
