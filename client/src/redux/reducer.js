import {
  GET_DOG,
  GET_DOGS,
  CLOSE_DOG,
  PREVIEW_DOG,
  GET_DOG_NAME,
  CLOSE_DOGS,
  FILTER,
  ORDER_NAME,
  ORDER_WEIGHT,
} from "./action";

const initialState = {
  dogs: [],
  dog: [],
  dogsCopy: [],
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
      return { dogs: action.payload };

    case FILTER:
      return {};

    case ORDER_NAME:
      return {};

    case ORDER_WEIGHT:
      return {};

    default:
      return state;
  }
};

export default reducer;
