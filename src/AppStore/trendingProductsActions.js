import {
  SAGA_GET_TRENDING_PRODUCTS,
  SAGA_GET_PRODUCT_DETAILS_DATA,
  SAGA_ADD_REMOVE_FROM_WISH_LIST,
} from './ActionTypes';

const getTrendingProducts = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_TRENDING_PRODUCTS,
  onSuccesscallback,
  onErrorcallback,
});

const getProductDetailsData = (
  ProductKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
  calledFrom = 'TrendingProductDetails',
) => ({
  type: SAGA_GET_PRODUCT_DETAILS_DATA,
  ProductKey,
  onSuccesscallback,
  onErrorcallback,
  calledFrom,
});

const addRemoveFromWishList = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_ADD_REMOVE_FROM_WISH_LIST,
  payload,
  onSuccesscallback,
  onErrorcallback,
});



export {getTrendingProducts, getProductDetailsData, addRemoveFromWishList};
