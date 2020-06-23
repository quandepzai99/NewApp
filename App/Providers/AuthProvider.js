import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
import { navigate } from "../Navigation/RootNavigation";
import { Alert } from "react-native";

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
    const { is_Correct } = data;
    onSuccess(is_Correct);
  } else {
    onFailed();
  }
  console.log("PASSWORD", password);
  console.log("Corrrect", is_Correct);

  dispatch({
    type: AuthActions.isPasswordCorrect,
    payload: password
  });
};

const mapActionsToDispatch = dispatch => {
  return {
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch)
  };
};
