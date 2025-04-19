// // actions/propertyActions.js
// import axios from 'axios';
// import AsyncStorage from "@react-native-async-storage/async-storage";



// export const getAuthToken = async () => {
//   try {
//     const token = await AsyncStorage.getItem('jwtToken');
//     console.log("tokenn is here")
//     if (token) {
//       console.log(token)
//       return token;
//     } else {
//       throw new Error('No token found');
//     }
//   } catch (error) {
//     console.error('Error retrieving token:', error);
//     throw error;
//   }
// };


// const API_URL = 'https://final-main-1-3mad.onrender.com/properties'; 


// export const ADD_PROPERTY = 'ADD_PROPERTY';
// export const DELETE_PROPERTY = 'DELETE_PROPERTY';
// export const UPDATE_PROPERTY = 'UPDATE_PROPERTY';
// export const FETCH_PROPERTIES = 'FETCH_PROPERTIES';

// // Fetch properties
// export const fetchProperties = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`${API_URL}/all`);
//     dispatch({
//       type: FETCH_PROPERTIES,
//       payload: response.data,
//     });
//   } catch (error) {
//     console.error("Error fetching properties:", error);

//   }
// };


// export const addProperty = (property) => async (dispatch) => {
//   try {
//     console.log("Sending property data:", property);
//     console.log("Adding property...");

//     // Retrieve token
//     const token = await getAuthToken();
//     console.log("Retrieved Token:", token); // Debugging

//     const response = await axios.post(
//       `${API_URL}/add`,
//       property,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (response.status === 201) {
//       dispatch({
//         type: ADD_PROPERTY,
//         payload: response.data,
//       });
//       return response.data;
//     } else {
//       throw new Error("Failed to add property");
//     }
//   } catch (error) {
//     console.error("Add Property Error:", error.response?.data || error.message);
//     // No dispatch for ADD_PROPERTY_FAILURE
//     throw error; // Optional: Rethrow if you want to handle it in the component
//   }
// };




// // Delete property
// export const deleteProperty = (id) => async (dispatch) => {
//   try {
//     await axios.delete(`${API_URL}/${id}`);
//     dispatch({
//       type: DELETE_PROPERTY,
//       payload: id,
//     });
//   } catch (error) {
//     console.error("Error deleting property:", error);
//   }
// };


// export const updateProperty = (property) => async (dispatch) => {
//   try {
//     console.log("Sending updated property data:", property);
//     console.log("Updating property...");

//     // Retrieve token
//     const token = await getAuthToken();
//     console.log("Retrieved Token:", token); // Debugging

//     const response = await axios.put(
//       `${API_URL}/${property.id}`,  // Assuming the endpoint needs the property id
//       property,
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     if (response.status === 200) {
//       dispatch({
//         type: UPDATE_PROPERTY,
//         payload: property,
//       });
//       return response.data;
//     } else {
//       throw new Error("Failed to update property");
//     }
//   } catch (error) {
//     console.error("Update Property Error:", error.response?.data || error.message);
//     // No dispatch for UPDATE_PROPERTY_FAILURE
//     throw error; // Optional: Rethrow if you want to handle it in the component
//   }
// };




import AsyncStorage from "@react-native-async-storage/async-storage";

export const ADD_PROPERTY = "ADD_PROPERTY";
export const DELETE_PROPERTY = "DELETE_PROPERTY";
export const UPDATE_PROPERTY = "UPDATE_PROPERTY";
export const FETCH_PROPERTIES = "FETCH_PROPERTIES";

// Fetch properties from AsyncStorage
export const fetchProperties = () => async (dispatch) => {
  try {
    const storedProperties = await AsyncStorage.getItem("properties");
    const properties = storedProperties ? JSON.parse(storedProperties) : [];

    dispatch({
      type: FETCH_PROPERTIES,
      payload: properties,
    });
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
};

// Add property and store in AsyncStorage
export const addProperty = (property) => async (dispatch, getState) => {
  try {
    const newProperty = {
      ...property,
      id: `${property.title}-${Date.now()}`,
    };

    const { properties } = getState().property;
    const updatedProperties = [...properties, newProperty];

    await AsyncStorage.setItem("properties", JSON.stringify(updatedProperties));

    dispatch({
      type: ADD_PROPERTY,
      payload: newProperty,
    });
    console.log(newProperty)

    return newProperty;
  } catch (error) {
    console.error("Error adding property:", error);
  }
};

// Delete property from AsyncStorage
export const deleteProperty = (id) => async (dispatch, getState) => {
  try {
    const { properties } = getState().property;
    const updatedProperties = properties.filter((property) => property.id !== id);

    await AsyncStorage.setItem("properties", JSON.stringify(updatedProperties));

    dispatch({
      type: DELETE_PROPERTY,
      payload: id,
    });
  } catch (error) {
    console.error("Error deleting property:", error);
  }
};

// Update property in AsyncStorage
export const updateProperty = (updatedProperty) => async (dispatch, getState) => {
  try {
    const { properties } = getState().property;
    const updatedProperties = properties.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    );

    await AsyncStorage.setItem("properties", JSON.stringify(updatedProperties));

    dispatch({
      type: UPDATE_PROPERTY,
      payload: updatedProperty,
    });
  } catch (error) {
    console.error("Error updating property:", error);
  }
};
