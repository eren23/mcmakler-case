import { SET_AMOUNT } from "../actions/types";

const initialState = {
  posts: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_AMOUNT:
      return { ...state, posts: payload };
    default:
      return state;
  }
}
