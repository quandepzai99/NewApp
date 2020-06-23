import { AuthActions } from "./AuthActions";

export const initialState = {
  phone: "",
  isExist: false,
  password: "",
  isCorrect: false
};

export const AuthReducer = (state, action) => {
  if (action.type === AuthActions.isPhoneNumberExist) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.isPasswordCorrect) {
    const password = action.payload;
    return { ...state, password: password };
  } else {
    return state;
  }
  console.log("come hezzzze")
};

export default initialState;
