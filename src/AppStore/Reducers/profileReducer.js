import {STORE_PROFILE_INFO} from '../ActionTypes';

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
  },
  action,
) => {
  switch (action.type) {
    case STORE_PROFILE_INFO:
      return {
        ...state,
        ...action.profileInfo,
      };
    default:
      return state;
  }
};

export default profileReducer;
