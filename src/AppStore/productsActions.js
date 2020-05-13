import {
  SAGA_GET_PRODUCTS_LIST,
  SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
  SAGA_POST_CUSTOMER_DETAILS,
} from './ActionTypes';
const getProductsList = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PRODUCTS_LIST,
  onSuccesscallback,
  onErrorcallback,
});

const getProductsFormDefenitionDetailsData = (
  FormKey,
  LeadKey,
  ProductName,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_PRODUCTS_FORM_DEFENITION_LIST,
  FormKey,
  LeadKey,
  ProductName,
  onSuccesscallback,
  onErrorcallback,
});

const postCustomerDetails = (
  payload,
  FormKey,
  LeadKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_POST_CUSTOMER_DETAILS,
  payload,
  FormKey,
  LeadKey,
  onSuccesscallback,
  onErrorcallback,
});

export {
  getProductsList,
  getProductsFormDefenitionDetailsData,
  postCustomerDetails,
};
