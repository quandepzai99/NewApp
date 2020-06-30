import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { LocalStorage } from "../Lib/LocalStorage";

export const AuthContext = createContext({});
export const AuthProvider = AuthContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);

  return (
    <AuthProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </AuthProvider>
  );
}

export const isPhoneNumberExist = dispatch => async (
  phone,
  onSuccess,
  onFailed
): void => {
  const response = await API.phoneCheckExist(phone);
  if (response.status) {
    const { data } = response;
    const { is_exist } = data;
    const { phone } = data;
    onSuccess(is_exist);
  } else {
    onFailed();
  }
  dispatch(
    {
      type: AuthActions.isPhoneNumberExist,
      payload: phone
    } & { type: AuthActions.savePhoneNumber, payload: phone }
  );
};

const saveTheDamnPhone = dispatch => {phone}

export const isPasswordCorrect = dispatch => async (
  phone,
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.login(phone, password);
  if (response.status) {
    const { data } = response;
    const { is_authenticated } = data;
    onSuccess(is_authenticated);
    const { access_token } = data.access_token;
    LocalStorage.set("access_token", access_token);
    API.setAccessToken(access_token);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};

const isTokenValidated = dispatch => async (
  token,
  onSuccess,
  onFailed
): void => {
  const response = await API.validateToken(token);
  if (response.status) {
    const { data } = response;
    const { is_alive } = data;
    onSuccess(is_alive);
    // console.log("SENT", token);
    // console.log("ALIVE?", is_alive);
    // console.log("DATA", data);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.validateToken,
    payload: token
  });
};

const logOut = dispatch => async (token): void => {
  const response = await API.logout(token);
  if (response.status) {
    LocalStorage.delete("access_token");
  } else {
  }
  dispatch({
    type: AuthActions.logout,
    payload: {}
  });
};

const checkCurrentPassword = dispatch => async (
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.confirmPassword(password);
  if (response.status) {
    const { data } = response;
    const { is_match } = data;
    onSuccess(is_match);
  } else {
    onFailed();
  }
  dispatch({ type: AuthActions.confirmPassword, payload: password });
};

const changePassword = dispatch => async (confirmPassword): void => {
  const response = await API.changePassword(confirmPassword);
  if (response.status) {
    const { data } = response;
  } else {
  }
  dispatch({ type: AuthActions.changePassword, payload: confirmPassword });
};

const phoneRegister = dispatch => async (phone): void => {
  const response = await API.phoneRegister(phone);
  if (response.status) {
    sendOTP(phone);
    console.log("PHONEREG STATUS", response.status);
  } else {
  }
  dispatch({ type: AuthActions.phoneRegister, payload: phone });
};

const sendOTP = dispatch => async (phone): void => {
  const response = await API.sendOTP(phone);
  if (response.status) {
    const { data } = response;
    const { otp } = data;
    const { otp_expired } = data;
    console.log("SENT OTP", response.status);

    LocalStorage.set("phone", phone);
    LocalStorage.set("otp", otp);
    LocalStorage.set("otp_expired", otp_expired);
  }
  dispatch({ type: AuthActions.sendOTP, payload: phone });
};

const confirmOTP = dispatch => async (
  phone,
  otp,
  onSuccess,
  onFailed
): void => {
  const response = await API.confirmOTP(phone, otp);
  if (response.status) {
    const { data } = response;
    const { is_match } = data;
    const { is_expired } = data;
    onSuccess(is_expired, is_match);
  } else {
    onFailed();
  }
  dispatch({ type: AuthActions.confirmOTP, payload: otp });
};

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    phoneRegister: phoneRegister(dispatch),
    sendOTP: sendOTP(dispatch),
    confirmOTP: confirmOTP(dispatch),
    logOut: logOut(dispatch),
    isTokenValidated: isTokenValidated(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch),
    checkCurrentPassword: checkCurrentPassword(dispatch),
    changePassword: changePassword(dispatch)
  };
};
