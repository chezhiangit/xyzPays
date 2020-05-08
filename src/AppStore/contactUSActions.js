import {
  SAGA_GET_GOOGLE_MAP_COORDINATES,
  SAGA_SAVE_SUGGESTION,
} from './ActionTypes';

const getGoogleMapCoordinates = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_GOOGLE_MAP_COORDINATES,
  onSuccesscallback,
  onErrorcallback,
});

const saveSuggestion = (
  payload,
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_SAVE_SUGGESTION,
  payload,
  onSuccesscallback,
  onErrorcallback,
});

export {getGoogleMapCoordinates, saveSuggestion};
