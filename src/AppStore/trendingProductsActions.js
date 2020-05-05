import {SAGA_GET_TRENDING_PRODUCTS} from './ActionTypes';

const getTrendingProducts = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_TRENDING_PRODUCTS,
  onSuccesscallback,
  onErrorcallback,
});

export {getTrendingProducts};
