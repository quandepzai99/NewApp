import initialState, { LanguageReducer } from "../ReduxHooks/LanguageReducer";
import React, { createContext, useReducer } from "react";
import { LanguageActions, ButtonActions } from "../ReduxHooks/LanguageActions";
import colors from "../Themes/Colors";

export const LanguageContext = createContext({});
export const LanguageProvider = LanguageContext.Provider;

export default function Wrapper(props) {
  const [state, dispatch] = useReducer(LanguageReducer, initialState);
  // Tạo 1 object chứa các actions rồi truyền thành các value của provider
  // Khi muốn access context thì import LanguageContext rồi const languageContext = useContext(LanguageContext)
  // Khi đó object languageContext sẽ chứa tất cả những thứ được truyền qua prop value ở dưới, gồm state, dispatch, setLanguage
  const actions = mapActionsToDispatch(dispatch);
  return (
    <LanguageProvider value={{ state, dispatch, ...actions }}>
      {props.children}
    </LanguageProvider>
  );
}

// Map actions, return 1 object có các function đã map sẵn với dispatch
const mapActionsToDispatch = dispatch => {
  return {
    setLanguage: setLanguage(dispatch),
    setBackgroundColor: setColorButton(dispatch)
  };
};

// Một async action
const setLanguage = dispatch => (language): void => {
  setTimeout(() => {
    dispatch({
      type: LanguageActions.setLanguage,
      payload: language
    });
  }, 3000);
};

const setColorButton = dispatch => (
  buttonColor
): colors.paleGreyFour => {
  setTimeout(() => {
    dispatch({
      type: ButtonActions.setColorButton,
      payload: buttonColor
    });
  }, 3000);
};
