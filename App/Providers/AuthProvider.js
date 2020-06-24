import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useEffect, useReducer, useState } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { navigate } from "../Navigation/RootNavigation";
import { Alert, AppState } from "react-native";
import { LocalStorage } from "../Lib/LocalStorage";

export const AuthContext = createContext({});
export const AuthProvider = AuthContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);

  const [appState, setAppState] = useState(AppState.currentState);
  console.log("STATEEEE", appState);
  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = nextAppState => {
    if (appState.match(/inactive|background/) && nextAppState === "active") {
    }
    setAppState(nextAppState);
  };

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
    const accessToken = data.access_token.access_token;
    onSuccess(is_authenticated);
    const serverToken = LocalStorage.set("servedToken", accessToken, 100000);
    const savedToken = LocalStorage.get("savedToken", serverToken);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};
const token = LocalStorage.get("savedToken");
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
  console.log("vali", isTokenValidated);
};

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch),
    isTokenValidated: isAppActive(dispatch)
  };
};
