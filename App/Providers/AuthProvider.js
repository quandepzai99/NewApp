import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";
import API from "../Lib/API";
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

// const isPhoneNumberExist = dispatch => async (
//   phone,
//   onSuccess,
//   onFailed
// ): void => {
//   const response = await API.phoneCheckExist(phone);
//   if (response.status) {
//     const { data } = response;
//     const { is_exist } = data;
//     onSuccess(is_exist);
//   } else {
//     onFailed();
//   }
//   dispatch({
//     type: AuthActions.isPhoneNumberExist,
//     payload: phone
//   });
// };

const isPhoneNumberExist = dispatch => async (phone, onSuccess, onFailed) : void => {
  const response = await API.phoneCheckExist(phone);
  if (response.status) {
    const {data} = response;
    const {is_exist} = data;
    onSuccess(is_exist);
    console.log('is_exist', is_exist)
  } else {
    onFailed();
  }
  dispatch ({
    type: AuthActions.isPhoneNumberExist,
    payload: phone
  })
}

// export const isPasswordCorrect = dispatch => async (
//   phone,
//   password,
//   onSuccess,
//   onFailed
// ): void => {
//   const response = await API.login(phone, password);
//   if (response.status) {
//     const { data } = response;
//     const { is_authenticated } = data;
//     onSuccess(is_authenticated);
//     const { access_token } = data.access_token;
//     LocalStorage.set("access_token", access_token);
//     API.setAccessToken(access_token);
//   } else {
//     onFailed();
//   }
//   dispatch({
//     type: AuthActions.isPasswordCorrect,
//     payload: password
//   });
// };

export const isPasswordCorrect = dispatch => async (
  phone,
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.login(phone, password);
  if (response.status) {
    const { data } = response;
    const {is_authenticated} = data;
    onSuccess(is_authenticated);
    const {access_token} = data.access_token;
    await LocalStorage.set('access_token', access_token);
    API.setAccessToken(access_token)
    console.log('asdadas', access_token)
  } else {
    onFailed();
  }
  dispatch({
    type: AuthContext.isPasswordCorrect,
    payload: password
  })
}

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

const logOut = dispatch => async (token): void => {
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

// const checkCurrentPassword = dispatch => async (
//   password,
//   onSuccess,
//   onFailed
// ): void => {
//   const response = await API.confirmPassword(password);
//   if (response.status) {
//     const { data } = response;
//     const { is_match } = data;
//     onSuccess(is_match);
//   } else {
//     onFailed();
//   }
//   dispatch({ type: AuthActions.confirmPassword, payload: password });
// };

const checkCurrentPassword = dispatch => async (password, onSuccess, onFailed): void => {
  const response = await API.confirmPassword(password);
  if (response.status) {
    const {data} = response;
    const {is_match} = data
    onSuccess(is_match);
  } else {
    onFailed();
  }
  dispatch({type: AuthActions.confirmPassword, payload: password})
}

const changePassword = dispatch => async (confirmPassword, onSuccess): void => {
  const response = await API.changePassword(confirmPassword);
  if (response.status) {
    const { data } = response;
    const {user_id} = data;
    onSuccess(user_id)
    console.log("DATAA", user_id);
  } else {
  }
  dispatch({type: AuthActions.changePassword, payload: confirmPassword});
};


const mapActionsToDispatch = dispatch => {
  return {
    logOut: logOut(dispatch),
    isTokenValidated: isTokenValidated(dispatch),
    isPhoneNumberExist: isPhoneNumberExist(dispatch),
    isPasswordCorrect: isPasswordCorrect(dispatch),
    checkCurrentPassword: checkCurrentPassword(dispatch),
    changePassword: changePassword(dispatch)
  };
};
