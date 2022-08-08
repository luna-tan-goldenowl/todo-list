import { combineReducers } from "redux";
import todo from "./todo";
import setFilter from "./set-filter";

export default combineReducers({
  todo,
  setFilter
});

