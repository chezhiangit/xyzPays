import {
  STORE_TRENDING_PRODUCTS_LIST,
  STORE_TRENDING_PRODUCTS_DETAILS,
  STORE_WISHLIST_STATUS,
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
    case STORE_WISHLIST_STATUS:
      console.log('state from trending reducer ...', state);
      const productDetails = {...state.productDetails};
      productDetails[0].IsInWishList = Number(action.status);
      return {
        ...state,
        productDetails: {...productDetails},
      };
    default:
      return state;
  }
};

export default trendingProductsReducer;
