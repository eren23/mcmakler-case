import axios from "axios";
import { POST_ERROR, UPDATE_LIKES, SEARCH_USER, SEARCH_ERROR } from "./types";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`/api/users/`);
    console.log(res.data);
    dispatch({
      type: UPDATE_LIKES,
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
    console.log(res.data);
    dispatch({
      type: SEARCH_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_ERROR,
      payload: { msg: "Fetching Users Failed" },
    });
  }
};
