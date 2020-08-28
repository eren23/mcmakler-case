import axios from "axios";
import { POST_ERROR, GET_POSTS, SEARCH_USER, SEARCH_ERROR } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/`);
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: "Fetching Users Failed" },
    });
  }
};

export const searchUser = (query) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/search?searchquery=${query}`);
    dispatch({
      type: SEARCH_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: `${err}` },
    });
  }
};
