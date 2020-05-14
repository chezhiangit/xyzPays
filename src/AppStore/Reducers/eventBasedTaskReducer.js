import {
  STORE_PRODUCTS_LIST,
  STORE_PRODUCTS_FORM_DEFENITION_LIST,
  STORE_EVENTBASED_TASK_SUMMARY,
  STORE_EVENTBASED_TASK_LIST,
  STORE_EVENTBASED_TASK_LIST_FILTER,
} from '../ActionTypes';

const productsListReducer = (
  state = {
    productsList: [],
    formDefenition: [],
    formInfo: [],
    StepInfo: [],
    // currentFormKey: '',
    // currentLeadKey: '',
    // selectedProductName: '',
    taskSummary: [],
    totalEntries: [],
    taskList: [],
    taskListFilter: [],
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
        formDefenition: [...action.formDefenition.FormDefinition],
        formInfo: [...action.formDefenition.FormInfo],
        StepInfo: [...action.formDefenition.StepInfo],
        // currentFormKey: action.FormKey,
        // currentLeadKey: action.LeadKey,
        // selectedProductName: action.ProductName,
      };
    case STORE_EVENTBASED_TASK_SUMMARY:
      return {
        ...state,
        taskSummary: [...action.taskSummary.Summary],
        totalEntries: [...action.taskSummary.TotalEntries],
      };
    case STORE_EVENTBASED_TASK_LIST:
      return {
        ...state,
        taskList: [...action.taskList],
      };
    case STORE_EVENTBASED_TASK_LIST_FILTER:
      return {
        ...state,
        taskListFilter: [...action.taskListFilter],
      };
    default:
      return state;
  }
};

export default productsListReducer;
