import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // this is from reducers index.js where we combine all the reducers

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer, // bir rootReducer verelim
  initialState, //store'a bir initial state verelim
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
