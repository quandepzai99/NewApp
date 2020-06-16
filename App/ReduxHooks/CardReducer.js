import { CardActions } from "./CardActions";

export const initialState = {
  haravanCardList: []
};

export const CardReducer = (state, action) => {
  switch (action.type) {
    case CardActions.getHaravanCardListSuccess:
      return { ...state, haravanCardList: action.payload };
    case CardActions.resetHaravanCardList:
      return { ...state, haravanCardList: [] };
    default:
      return state;
  }
};

export default initialState;
