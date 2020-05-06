import {SAGA_GET_GOOGLE_MAP_COORDINATES} from '../ActionTypes';

const contactUsReducer = (
  state = {
    mapCoordinates: [],
  },
  action,
) => {
  switch (action.type) {
    case SAGA_GET_GOOGLE_MAP_COORDINATES:
      return {
        ...state,
        mapCoordinates: [...action.mapCoordinates],
      };
    default:
      return state;
  }
};

export default contactUsReducer;
