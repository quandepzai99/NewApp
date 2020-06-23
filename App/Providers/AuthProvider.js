import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { Alert } from "react-native";

export const AuthContext = createContext({});
export const AuthProvider = AuthContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const actionSetPhone = mapActionsToDispatchLogin(dispatch);
  const actionSetPassword = mapActionsToDispatchPassword(dispatch);
  return (
    <AuthProvider
      value={{ state, dispatch, ...actionSetPhone, ...actionSetPassword }}>
      {props.children}
    </AuthProvider>
  );
}

const mapActionsToDispatchLogin = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch)
  };
};
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

const mapActionsToDispatchPassword = dispatch => {
  return {
    isPasswordCorrect: isPasswordCorrect(dispatch)
  };
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
    const { is_correct } = data;
    onSuccess(is_correct);
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};
