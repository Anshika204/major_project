import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Ensure correct path
import dishRootReducer from "./dishReducer/dishRootReducer";

const store = configureStore({
  reducer: rootReducer, // ✅ Single reducer that includes both dishes & properties
  dishes: dishRootReducer,
});

export default store;
