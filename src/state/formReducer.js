import { actionTypes } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        PCsNumber: state.PCsNumber + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        PCsNumber: state.PCsNumber - 1,
      };
    default:
      return state;
  }
};
