import {PassReducer} from '../ReduxHooks/PassReducer';
import React, {createContext, useReducer} from 'react';
import {PassAction} from '../ReduxHooks/PassAction';
import API from '../Lib/API';
import {Alert} from 'react-native';
import initialState, {AuthReducer} from '../ReduxHooks/AuthReducer';

export const PassContext = createContext({});
export const PassProvider = PassContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <PassProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </PassProvider>
  );
}

const mapActionsToDispatch = dispatch => {
  return {
    isPasswordNumberExist: isPasswordExist(dispatch)
  };
};

const isPasswordExist = dispatch => async (
  password,
  onSuccess,
  onFailed
): void => {
  const response = await API.login(password);
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
  //Nếu response trả về true thì lọc data theo các filter

  // dispatch({
  //   type: AuthActions.isPhoneNumberExist,
  //   payload: phone
  // });
};

