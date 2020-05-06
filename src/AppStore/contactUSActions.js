import {SAGA_GET_GOOGLE_MAP_COORDINATES} from './ActionTypes';

const getGoogleMapCoordinates = (
  onSuccesscallback = () => {},
  onErrorcallback = () => {},
) => ({
  type: SAGA_GET_GOOGLE_MAP_COORDINATES,
  onSuccesscallback,
  onErrorcallback,
});

export {getGoogleMapCoordinates};
