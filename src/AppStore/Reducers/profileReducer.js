import {STORE_PROFILE_INFO, STORE_PROFILE_PROVIDERINFO} from '../ActionTypes';

const profileInfo = {
  RepId: 0,
  AddressLine: '',
  Mobile: 0,
  PaypalEmail: '',
  Website: '',
  State: '',
  CreatedBy: null,
  RegId: 0,
  Status: '',
  FirstName: '',
  LastName: '',
  RegistrationType: '',
  RegisteredOn: '',
  ProductAccess: '',
  City: '',
  ZipCode: '',
  LoginEmail: '',
  RepKey: '',
  Phone: 0,
  ProfilePicture: '',
};

const profileReducer = (
  state = {
    profileInfo,
    providersInfo: [],
  },
  action,
) => {
  switch (action.type) {
    case STORE_PROFILE_INFO:
      return {
        ...state,
        ...action.profileInfo,
      };
    case STORE_PROFILE_PROVIDERINFO:
      return {
        ...state,
        providersInfo: [...action.providersInfo],
      };
    default:
      return state;
  }
};

export default profileReducer;
