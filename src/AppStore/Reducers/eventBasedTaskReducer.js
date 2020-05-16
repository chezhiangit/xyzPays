import {
  STORE_PRODUCTS_LIST,
  STORE_PRODUCTS_FORM_DEFENITION_LIST,
  STORE_EVENTBASED_TASK_SUMMARY,
  STORE_EVENTBASED_TASK_LIST,
  STORE_EVENTBASED_TASK_LIST_FILTER,
  STORE_TRANSACTION_FORM_DEFENITION_LIST,
  STORE_LAST_FIVE_TRANSACTIONS,
} from '../ActionTypes';

const productsListReducer = (
  state = {
    productsList: [],
    formDefenition: [],
    formInfo: [],
    StepInfo: [],
    Lead: [],
    leadTransaction: {
      formDefenition: [],
      formInfo: [],
      StepInfo: [],
      Lead: [],
    },
    taskSummary: [],
    totalEntries: [],
    lastFiveTransaction: [],
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
      };
    case STORE_TRANSACTION_FORM_DEFENITION_LIST:
      return {
        ...state,
        leadTransaction: {
          formDefenition:
            action.formDefenition?.FormDefinition === undefined
              ? []
              : [...action.formDefenition?.FormDefinition],
          formInfo:
            action.formDefenition?.FormInfo === undefined
              ? []
              : [...action.formDefenition?.FormInfo],
          StepInfo:
            action.formDefenition?.StepInfo === undefined
              ? []
              : [...action.formDefenition?.StepInfo],
          Lead:
            action.formDefenition?.Lead === undefined
              ? []
              : [...action.formDefenition?.Lead],
          ConfirmedLead:
            action.formDefenition['Confirmed Lead'] === undefined
              ? []
              : [...action.formDefenition['Confirmed Lead']],
        },
      };
    case STORE_EVENTBASED_TASK_SUMMARY:
      return {
        ...state,
        taskSummary: [...action.taskSummary.Summary],
        totalEntries: [...action.taskSummary.TotalEntries],
      };
    case STORE_LAST_FIVE_TRANSACTIONS:
      return {
        ...state,
        lastFiveTransaction: [...action.taskSummary.lastFiveTransaction],
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
