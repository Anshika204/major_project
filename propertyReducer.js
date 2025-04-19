// // reducers/propertyReducer.js
// import { ADD_PROPERTY, DELETE_PROPERTY, UPDATE_PROPERTY, FETCH_PROPERTIES } from '../actions/propertyActions';

// const initialState = {
//   properties: [],
// };

// const propertyReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_PROPERTIES:
//       return {
//         ...state,
//         properties: action.payload,
//       };

//     case ADD_PROPERTY:
//       return {
//         ...state,
//         properties: [...state.properties, action.payload],
//       };

//     case DELETE_PROPERTY:
//       return {
//         ...state,
//         properties: state.properties.filter(property => property.id !== action.payload),
//       };

//     case UPDATE_PROPERTY:
//       return {
//         ...state,
//         properties: state.properties.map(property =>
//           property.id === action.payload.id ? action.payload : property
//         ),
//       };
//   //   case UPDATE_PROPERTY:
//   // return {
//   //   ...state,
//   //   properties: state.properties.map(property =>
//   //     property.id === action.payload.id
//   //       ? { ...property, ...action.payload }  // Merges the updated property with the existing one
//   //       : property  // Return the existing property if IDs don't match
//   //   ),
//   // };


//     default:
//       return state;
//   }
// };

// export default propertyReducer;



import { ADD_PROPERTY, DELETE_PROPERTY, UPDATE_PROPERTY, FETCH_PROPERTIES } from "../actions/propertyActions";

const initialState = {
  properties: [],
};

const propertyReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    case ADD_PROPERTY:
      return {
        ...state,
        properties: [...state.properties, action.payload],
      };

    case DELETE_PROPERTY:
      return {
        ...state,
        properties: state.properties.filter((property) => property.id !== action.payload),
      };

    case UPDATE_PROPERTY:
      return {
        ...state,
        properties: state.properties.map((property) =>
          property.id === action.payload.id ? action.payload : property
        ),
      };

    default:
      return state;
  }
};

export default propertyReducer;
