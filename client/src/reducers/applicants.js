import {
  POST_ERROR,
  GET_POSTS,
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
    case GET_POSTS:
      return { ...state, posts: payload, loading: false, error: {} };
    case POST_ERROR:
      return { ...state, error: payload, loading: false };
    case SEARCH_USER:
      return { ...state, posts: payload, loading: false, error: {} };
    case SEARCH_ERROR:
      return { ...state, error: payload, loading: false };

    default:
      return state;
  }
}
