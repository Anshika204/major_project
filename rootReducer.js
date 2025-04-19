import { combineReducers } from "redux";
import dishReducer from "./dishReducer"; // Ensure correct path
import propertyReducer from "./propertyReducer"; // Ensure correct path

const rootReducer = combineReducers({
  // dishes: dishReducer,   // ✅ Manages dishes
  properties: propertyReducer, // ✅ Manages properties
});

export default rootReducer;
