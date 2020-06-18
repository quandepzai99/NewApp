import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
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

const mapActionsToDispatch = dispatch => {
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
  //await (async await) là 1 action bất đồng bộ, ở trên nếu không có await,
  //JS sẽ làm tuần tự từ trên xuống xưới mà không chờ dữ liệu ừ thằng reponse
  //còn ở đây là chờ cho đến khi thằng API trả dữ liệu về
  console.log("RESPONSE:", response);
  if (response.status) {
    const { data } = response;
    const { is_exist } = data;
    onSuccess(is_exist);
  } else {
    onFailed();
  }

  // dispatch({
  //   type: AuthActions.isPhoneNumberExist,
  //   payload: phone
  // });
};
