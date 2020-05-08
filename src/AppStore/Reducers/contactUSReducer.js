import {STORE_GOOGLE_MAP_COORDINATES} from '../ActionTypes';

const contactUsReducer = (
  state = {
    mapCoordinates: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_GOOGLE_MAP_COORDINATES:
      return {
        ...state,
        mapCoordinates: {...action.mapCoordinates},
      };
    default:
      return state;
  }
};

export default contactUsReducer;
