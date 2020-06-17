import { ButtonActions } from "./LanguageActions";
import colors from "../Themes/Colors"

export const initialState = {
    backgroundColor : colors.paleGreyFour
};
// Reducer
// Khi 1 action được dispatch, sẽ được chuyển đến reducer
// VD: action SET_LANGUAGE được dispatch với data: { type: "SET_LANGUAGE", payload: "en" }
// thì reducer sẽ tìm và thực hiện việc thay đổi state ứng với action đó, trong trường hợp
// ở đây thì thay đổi language thành "en"
// Reducer nên sử dụng syntax switch(action.type)
export const LanguageButtonColorActions = (state, action) => {
    if (action.type === ButtonActions.setColorButton) {
        return { ...state, buttonColor: action.payload };
    } else {
        return state;
    }
};

export default initialState;
