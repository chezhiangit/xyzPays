import {
  SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
  SAGA_POST_TASK_ENTRY_DATA,
} from './ActionTypes';

const getFormDefenitionDetailsData = (
  FormKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_FORM_DEFENITION_DETAILS_DATA,
  FormKey,
  onSuccesscallback,
  onErrorcallback,
});

const postEntry = (
  payload,
  FormKey,
  TaskKey,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_POST_TASK_ENTRY_DATA,
  payload,
  FormKey,
  TaskKey,
  onSuccesscallback,
  onErrorcallback,
});

export {getFormDefenitionDetailsData, postEntry};
