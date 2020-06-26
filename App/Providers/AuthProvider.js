import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
// import { Alert, AppState } from "react-native";
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

const isPhoneNumberExist = dispatch => async (
  phone,
  onSuccess,
  onFailed
): void => {
  const response = await API.phoneCheckExist(phone);
  if (response.status) {
    const { data } = response;
    const { is_exist } = data;
    onSuccess(is_exist);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPhoneNumberExist,
    payload: phone
  });
};

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
    const savedToken = LocalStorage.set("access_token", access_token);
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

const logOut = dispatch => async (token, onSuccess, onFailed): void => {
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

const mapActionsToDispatch = dispatch => {
  return {
    logOut: logOut(dispatch),
    isTokenValidated: isTokenValidated(dispatch),
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch)
  };
};
