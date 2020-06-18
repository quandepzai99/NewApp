import initialState, { AuthReducer } from "../ReduxHooks/AuthReducer";
import React, { createContext, useReducer } from "react";
import { AuthActions } from "../ReduxHooks/AuthActions";

export const AuthContext = createContext({});
export const AuthProvider = AuthContext.Provider;

export default function Wrapper(props) {
    const [state, dispatch] = useReducer(AuthReducer, initialState);
    // Tạo 1 object chứa các actions rồi truyền thành các value của provider
    // Khi muốn access context thì import AuthContext rồi const languageContext = useContext(AuthContext)
    // Khi đó object languageContext sẽ chứa tất cả những thứ được truyền qua prop value ở dưới, gồm state, dispatch, setAuth
    const actions = mapActionsToDispatch(dispatch);
    return (
        <AuthProvider value={{ state, dispatch, ...actions }}>
            {props.children}
        </AuthProvider>
    );
}

// Map actions, return 1 object có các function đã map sẵn với dispatch
const mapActionsToDispatch = dispatch => {
    return {
        setAuth: setAuth(dispatch)
    };
};

// Một async action
const setAuth = dispatch => (language): void => {
    dispatch({
        type: AuthActions.setAuth,
        payload: language
    });
};
