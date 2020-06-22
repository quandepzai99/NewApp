import {PassAction} from './PassAction';

export const initialState = {
  password: '',
  isExist: false
}

export const PassReducer = (state, action) => {
  if (action.type === PassAction.isPasswordNumberExist) {
    const {password} = action.payload;
    return {...state, password: content}
  } else {
    return state;
  }
}
export default initialState;
