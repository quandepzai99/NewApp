import { ThemeActions } from "./ThemeActions";

export const initialState = {
  theme: "light"
};

export const ThemeReducer = (state, action) => {
  console.log("ACTIONTTTT", action);
  const { type, payload } = action;

  if (type === ThemeActions.setTheme) {
    console.log("REDUCERRRRRRR");
    return { ...state, theme: payload };
  } else {
    return state;
  }
};

export default initialState;
