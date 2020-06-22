import { AuthProductionActions } from "./LoginActions";

export const initialState = {
    phone: "",
    isAuthenticated: false
};

export const AuthProductionReducer = (state, action) => {
    if (action.type === AuthProductionActions.isAuthenticated) {
        const { status } = action.payload;
        return { ...state, status: content };
    } else {
        return state;
    }
};
export default initialState;
