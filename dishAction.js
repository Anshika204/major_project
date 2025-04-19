import AsyncStorage from "@react-native-async-storage/async-storage";

// Action Types
export const ADD_DISH = "ADD_DISH";
export const REMOVE_DISH = "REMOVE_DISH";
export const SET_DISHES = "SET_DISHES";

// Load dishes from AsyncStorage
export const loadDishes = () => async (dispatch) => {
  try {
    const storedDishes = await AsyncStorage.getItem("dishes");
    if (storedDishes) {
      dispatch({ type: SET_DISHES, payload: JSON.parse(storedDishes) });
    }
  } catch (error) {
    console.error("Error loading dishes:", error);
  }
};

// Add a dish
export const addDish = (dish) => async (dispatch, getState) => {
  try {
    const newDish = { ...dish, id: `${dish.dishName}-${Date.now()}` };
    const updatedDishes = [...getState().dish.dishes, newDish];

    await AsyncStorage.setItem("dishes", JSON.stringify(updatedDishes));
    dispatch({ type: ADD_DISH, payload: newDish });
  } catch (error) {
    console.error("Error saving dish:", error);
  }
};

// Remove a dish
export const removeDish = (id) => async (dispatch, getState) => {
  try {
    const updatedDishes = getState().dish.dishes.filter((dish) => dish.id !== id);
    await AsyncStorage.setItem("dishes", JSON.stringify(updatedDishes));
    dispatch({ type: REMOVE_DISH, payload: id });
  } catch (error) {
    console.error("Error removing dish:", error);
  }
};
