import { LanguageActions } from "./LanguageActions";
import ContentEn from "../I18n/en";
import ContentVi from "../I18n/vi";

export const initialState = {
  language: "vi",
  content: ContentVi
};

export const LanguageReducer = (state, action) => {
  if (action.type === LanguageActions.setLanguage) {
    const language = action.payload;
    const content = language === "vi" ? ContentVi : ContentEn;
    return { ...state, language: language, content: content };
  } else {
    return state;
  }
};
export default initialState;
