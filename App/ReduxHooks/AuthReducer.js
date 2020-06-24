import { AuthActions } from "./AuthActions";

export const initialState = {
  phone: "",
  isExist: false,
  password: "",
};

export const AuthReducer = (state, action) => {
  if (action.type === AuthActions.isPhoneNumberExist) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.isPasswordCorrect) {
    const password = action.payload;
    return { ...state, password: password };
  } else if (action.type === AuthActions.isToken) {
    const token = action.payload;
    return { ...state, token: token };
  } else {
    return state;
  }
};
export default initialState;
