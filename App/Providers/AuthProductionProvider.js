import initialState, {
  AuthProductionProductionReducer
} from "../ReduxHooks/AuthProductionProductionReducer";
import React, { createContext, useReducer } from "react";
import { AuthProductionProductionActions } from "../ReduxHooks/AuthProductionProductionActions";
import API from "../Lib/API";
import { Alert } from "react-native";

export const AuthProductionContext = createContext({});
export const AuthProductionProvider = AuthProductionContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AuthProductionReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <AuthProductionProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </AuthProductionProvider>
  );
}

const mapActionsToDispatch = dispatch => {
  return {
    isAuthenticated: isAuthenticated(dispatch)
  };
};

const isAuthenticated = dispatch => async (
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.passwordCheckExist(password);
  //await (async await) là 1 action bất đồng bộ, ở trên nếu không có await,
  //JS sẽ làm tuần tự từ trên xuống xưới mà không chờ dữ liệu ừ thằng reponse
  //còn ở đây là chờ cho đến khi thằng API trả dữ liệu về
  console.log("RESPONSE:", response);
  if (response.status) {
    const { data } = response;
    const { is_authenticated } = data;
    onSuccess(is_authenticated);
  } else {
    onFailed();
  }
  //Nếu response trả về true thì lọc data theo các filter

  // dispatch({
  //   type: AuthProductionActions.isPhoneNumberExist,
  //   payload: password
  // });
};
