import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { navigate } from "../Navigation/RootNavigation";
import { Alert } from "react-native";
import {LocalStorage} from '../Lib/LocalStorage';
// import AsyncStorage from '@react-native-community/async-storage';

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

    // await localStorage.getItem('token', JSON.stringify(data));
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
    console.log("DATA", data);
    const { is_authenticated } = data;
    onSuccess(is_authenticated);
    const setToken = localStorage.setItem('validation', access_token)
    console.log('setToken', setToken)
  } else {
    onFailed();
  }
  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
  console.log("passsss", password);
};

// const savePhoneNumber = dispatch => async (
//   phone,
//   token,
//   onSuccess,
//   onFailed
// ): void => {
//   const response = await API.validateToken(phone);
//   if (response.status) {
//     const { data } = response;
//     const { access_token } = data;
//     onSuccess(access_token);
//   } else {
//     onFailed();
//   }
//   dispatch({
//     type: AuthActions.savePhoneNumber,
//     payload: token
//   });
// };

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch)
  };
};

