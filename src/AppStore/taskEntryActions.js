import {SAGA_GET_FORM_DEFENITION_DETAILS_DATA} from './ActionTypes';

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

export {getFormDefenitionDetailsData};
