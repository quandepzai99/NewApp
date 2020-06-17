import initialState, { ThemeReducer } from "../ReduxHooks/ThemeReducer";
import React, { createContext, useReducer } from "react";
import { ThemeActions } from "../ReduxHooks/ThemeActions";

export const ThemeContext = createContext({});
export const ThemeProvider = ThemeContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(ThemeReducer, initialState);
  const actions = mapActionsToDispatch(dispatch);
  return (
    <ThemeProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </ThemeProvider>
  );
}

const mapActionsToDispatch = dispatch => {
  return {
    setTheme: setTheme(dispatch)
  };
};

const setTheme = dispatch => (theme): void => {
  dispatch({
    type: ThemeActions.setTheme,
    payload: theme
  });
};
