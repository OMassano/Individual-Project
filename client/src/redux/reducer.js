import {
  GET_DOG,
  GET_DOGS,
  CLOSE_DOG,
  PREVIEW_DOG,
  GET_DOG_NAME,
  CLOSE_DOGS,
} from "./action";

const initialState = {
  dogs: [],
  dog: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload };
    case GET_DOG:
      return { ...state, dog: action.payload };
    case CLOSE_DOG:
      const updatedDogs = state.dogs.filter((dog) => dog.id !== action.payload);
      return { ...state, dogs: updatedDogs, dog: [] };
    case PREVIEW_DOG:
      return { ...state, dogs: action.payload };
    case GET_DOG_NAME:
      return { ...state, dogs: [...state.dogs, ...action.payload] };
    case CLOSE_DOGS:
      return {dogs: action.payload};
    default:
      return state;
  }
};

export default reducer;
