import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { navigate } from "../Navigation/RootNavigation";
import { Alert, AppState } from "react-native";
import { LocalStorage } from "../Lib/LocalStorage";
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

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
    const {access_token} = data.access_token;
    const {user_id} = data;
    onSuccess(is_authenticated);
    await LocalStorage.set("servedToken", access_token, 100000);
    await LocalStorage.get("getToken", access_token);
    // console.log('bdbdbdb', access_token)
    // console.log('bdbdbdb', access_token)
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};

const token = LocalStorage.get("savedToken", JSON.stringify({isPasswordCorrect}));
console.log("TOKENNNNNNN", token);

const isAppActive = dispatch => async (): void => {
  const response = await API.validateToken(token);
  if (response.status) {
    const { data } = response;
    const { is_alive } = data;
    console.log("status", response.status);
    console.log("DATATATATA", data);
  }
  dispatch({
    type: AuthActions.isAppActive,
    payload: token
  });
};

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch),
    isTokenValidated: isAppActive(dispatch)
  };
};
