import {
  STORE_PENDING_TASK_PRODUCT_DETAILS_DATA,
  STORE_FORM_DEFENITION_DETAILS_DATA,
} from '../ActionTypes';

const taskEntryReducer = (
  state = {
    productDetails: {},
    formDefenition: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_PENDING_TASK_PRODUCT_DETAILS_DATA:
      return {
        ...state,
        productDetails: {
          ...action.productDetails,
          FormKey: action.FormKey,
          TaskKey: action.TaskKey,
        },
      };
    case STORE_FORM_DEFENITION_DETAILS_DATA:
      return {
        ...state,
        formDefenition: {...action.formDefenition},
      };
    default:
      return state;
  }
};

export default taskEntryReducer;
