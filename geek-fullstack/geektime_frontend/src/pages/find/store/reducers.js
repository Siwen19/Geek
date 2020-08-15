import * as actionTypes from "./constants";

const defaultValue = {
  shop: [],
  university: [],
  class: [],
};

export default (state = defaultValue, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SUPERMARKET_CONTENT:
      return {
        ...state,
        shop: action.payload,
      };
    case actionTypes.CHANGE_UNIVERSITY_CONTENT:
      return {
        ...state,
        university: action.payload,
      };
    case actionTypes.CHANGE_CLASS_CONTENT:
      return {
        ...state,
        class: action.payload,
      };
    default:
      return state;
  }
};
