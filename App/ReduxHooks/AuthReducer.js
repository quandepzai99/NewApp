import { AuthActions } from "./AuthActions";

export const initialState = {
  phone: "",
  isExist: false
};

export const AuthReducer = (state, action) => {
  if (action.type === AuthActions.isPhoneNumberExist) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else {
    return state;
  }
};

export default initialState;
