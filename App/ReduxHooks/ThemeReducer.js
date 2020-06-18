import { ThemeActions } from "./ThemeActions";

export const initialState = {
  theme: "light"
};

export const ThemeReducer = (state, action) => {
  const { type, payload } = action;

  if (type === ThemeActions.setTheme) {
    return { ...state, theme: payload };
  } else {
    return state;
  }
};

export default initialState;
