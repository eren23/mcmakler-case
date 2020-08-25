import {
  POST_ERROR,
  UPDATE_LIKES,
  SEARCH_USER,
  SEARCH_ERROR,
} from "../actions/types";

const initialState = {
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_LIKES:
      return { ...state, posts: payload, loading: false };
    case POST_ERROR:
      return { ...state, error: payload };
    case SEARCH_USER:
      return { ...state, posts: payload, loading: false };
    case SEARCH_ERROR:
      return { ...state, error: payload };

    default:
      return state;
  }
}
