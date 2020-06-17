import { LanguageActions } from "./LanguageActions";

export const initialState = {
  language: "vi"
};
// Reducer
// Khi 1 action được dispatch, sẽ được chuyển đến reducer
// VD: action SET_LANGUAGE được dispatch với data: { type: "SET_LANGUAGE", payload: "en" }
// thì reducer sẽ tìm và thực hiện việc thay đổi state ứng với action đó, trong trường hợp
// ở đây thì thay đổi language thành "en"
// Reducer nên sử dụng syntax switch(action.type)
export const LanguageReducer = (state, action) => {
  if (action.type === LanguageActions.setLanguage) {
    return { ...state, language: action.payload };
  } else {
    return state;
  }
};

export default initialState;
