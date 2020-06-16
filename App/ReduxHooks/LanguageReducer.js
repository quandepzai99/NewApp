import { LanguageActions } from "./LanguageActions";

export const initialState = {
  language: "vi"
};

export const LanguageReducer = (state, action) => {
  if (action.type === LanguageActions.setLanguage) {
    return { ...state, language: action.payload };
  } else {
    return state;
  }
};

export default initialState;
