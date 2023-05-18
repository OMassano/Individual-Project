import { GET_DOG, GET_DOGS, CLOSE_DOG, PREVIEW_DOG, GET_DOG_NAME } from "./action";

const initialState = {
  dogs: [],
  dog: [], // Update the property name to "dog"
  searchDog:[], 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG:
      return {...state, dog: action.payload }; // Update the property name to "dog"
    case CLOSE_DOG:
      const updatedDogs = state.dogs.filter((dog) => dog.id !== action.payload);
      return { ...state, dogs: updatedDogs };
    case PREVIEW_DOG:
      return { ...state, dogs: action.payload };
    case GET_DOG_NAME:
      return{...state, searchDog: action.payload}
      
    default:
      return state;
  }
};

export default reducer;
