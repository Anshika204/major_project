import { combineReducers } from "redux";
import dishReducer from "./dishReducer"; // ✅ Ensure correct path

const dishRootReducer = combineReducers({
  dishes: dishReducer,
});

export default dishRootReducer;
