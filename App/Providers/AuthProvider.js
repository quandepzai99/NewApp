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

const isPasswordCorrect = dispatch => async (
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
    const token = LocalStorage.set("access_token", access_token);
  } else {
    onFailed();
  }

  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};

export const isTokenValidated = dispatch => async (
  access_token,
  onSuccess,
  onFailed
): void => {
  const response = await API.validateToken(access_token);
  if (response.status) {
    const { data } = response;
    const { is_alive } = data;
    console.log("status", response.status);
    console.log("ALIVE?", is_alive);
    console.log("token?", access_token);
    onSuccess(is_alive);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.validateToken,
    payload: access_token
  });
};

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch),
    isTokenValidated: isTokenValidated(dispatch)
  };
};
