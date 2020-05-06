import {STORE_PENDING_TASK_PRODUCT_DETAILS_DATA} from '../ActionTypes';

const taskEntryReducer = (
  state = {
    productDetails: {},
  },
  action,
) => {
  switch (action.type) {
    case STORE_PENDING_TASK_PRODUCT_DETAILS_DATA:
      return {
        ...state,
        productDetails: {...action.productDetails},
      };
    default:
      return state;
  }
};

export default taskEntryReducer;
