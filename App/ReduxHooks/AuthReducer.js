import { AuthActions } from "./AuthActions";

export const initialState = {
  phone: "",
  isExist: false,
  password: ""
};

export const AuthReducer = (state, action) => {
  if (action.type === AuthActions.isPhoneNumberExist) {
    const phone = action.payload;
    return { ...state, phone: phone };
  }
  //   else if (action.type === AuthActions.isPasswordCorrect) {
  //   const password = action.payload;
  //   return { ...state, password: password };
  // }
  else if (action.type === AuthActions.isPasswordCorrect) {
    const password = action.payload;
    return { ...state, password: password };
  } else if (action.type === AuthActions.isPhoneNumberExist) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.logout) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.confirmPassword) {
    const password = action.payload;
    return { ...state, password: password };
  } else if (action.type === AuthActions.changePassword) {
    const password = action.payload;
    return { ...state, password: password };
  } else if (action.type === AuthActions.phoneRegister) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.sendOTP) {
    const phone = action.payload;
    return { ...state, phone: phone };
  } else if (action.type === AuthActions.confirmOTP) {
    const otp = action.payload;
    return { ...state, otp: otp };
  } else if (action.type === AuthActions.activeAccount) {
    const password = action.payload;
    return { ...state, password: password };
  } else {
    return state;
  }
};

export default initialState;
