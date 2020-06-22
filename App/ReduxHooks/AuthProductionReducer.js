import { AuthProductionActions } from "./AuthProductionActions";

export const initialState = {
    password: "",
    isAuthenticated: false
};

export const AuthProductionReducer = (state, action) => {
    if (action.type === AuthProductionActions.isAuthenticated) {
        const { password } = action.payload;
        return { ...state, password: content };
    } else {
        return state;
    }
};
export default initialState;
