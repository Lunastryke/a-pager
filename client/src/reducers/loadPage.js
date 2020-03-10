import { LOAD_PAGE } from "../actions/types";

const initialState = {
  url: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PAGE:
      return {
        ...state,
        url: payload
      };
    default:
      return state;
  }
}
