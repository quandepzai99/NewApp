import initialState, { LanguageReducer } from "../ReduxHooks/LanguageReducer";
import React, { createContext, useReducer } from "react";
import { LanguageActions } from "../ReduxHooks/LanguageActions";

export const LanguageContext = createContext({});
export const LanguageProvider = LanguageContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  // Tạo 1 object chứa các actions rồi truyền thành các value của provider
  // Khi đó method setLanguage sẽ có trong object trả về từ useContext(LanguageContext)
  const actions = mapActionsToDispatch(dispatch);
  return (
    <LanguageProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </LanguageProvider>
  );
}

const mapActionsToDispatch = dispatch => {
  return {
    setLanguage: setLanguage(dispatch)
  };
};

const setLanguage = dispatch => (language): void => {
  setTimeout(() => {
    dispatch({
      type: LanguageActions.setLanguage,
      payload: language
    });
  }, 3000);
};
