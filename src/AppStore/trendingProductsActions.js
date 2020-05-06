import {
  SAGA_GET_TRENDING_PRODUCTS,
  SAGA_GET_PRODUCT_DETAILS_DATA,
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

export {getTrendingProducts, getProductDetailsData};
