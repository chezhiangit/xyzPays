import {
  STORE_PRODUCTS_LIST,
  STORE_PRODUCTS_FORM_DEFENITION_LIST,
} from '../ActionTypes';

const productsListReducer = (
  state = {
    productsList: [],
    formDefenition: {},
    currentFormKey: '',
    currentLeadKey: '',
    selectedProductName: '',
  },
  action,
) => {
  switch (action.type) {
    case STORE_PRODUCTS_LIST:
      return {
        ...state,
        productsList: [...action.productsList],
      };
    case STORE_PRODUCTS_FORM_DEFENITION_LIST:
      return {
        ...state,
        formDefenition: [...action.formDefenition],
        currentFormKey: action.FormKey,
        currentLeadKey: action.LeadKey,
        selectedProductName: action.ProductName,
      };

    default:
      return state;
  }
};

export default productsListReducer;
