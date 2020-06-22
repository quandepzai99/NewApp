import initialState, {
  AuthProductionReducer
} from "../ReduxHooks/AuthProductionReducer";
import React, { createContext, useReducer } from "react";
import { AuthProductionActions } from "../ReduxHooks/AuthProductionActions";
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
  phone,
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.login(password);
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
