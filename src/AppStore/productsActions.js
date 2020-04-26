import {SAGA_GET_PRODUCTS_LIST} from './ActionTypes';
const getProductsList = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PRODUCTS_LIST,
  onSuccesscallback,
  onErrorcallback,
});

export {getProductsList};
