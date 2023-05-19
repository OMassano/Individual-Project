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
  GET_TEMPS,
} from "./action";

const initialState = {
  // dogs and dogsCopy are exactly the same, but we only see dogs in our app. We created dogsCopy to be able to filter dogs
  // without stepping on its values
  dogs: [],
  dog: [],
  dogsCopy: [],
  temperaments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, dogsCopy: action.payload };

    case GET_DOG:
      return { ...state, dog: action.payload };

    case CLOSE_DOG:
      const updatedDogs = state.dogs.filter((dog) => dog.id !== action.payload);
      return { ...state, dogs: updatedDogs, dog: [], dogsCopy: updatedDogs };

    case PREVIEW_DOG:
      return { ...state, dogs: action.payload, dogsCopy: action.payload };

    case GET_DOG_NAME:
      return {
        ...state,
        dogs: [...state.dogsCopy, ...action.payload],
        dogsCopy: [...state.dogsCopy, ...action.payload],
      };

    case CLOSE_DOGS:
      return { dogs: action.payload, dogsCopy: action.payload };

    case GET_TEMPS:
      return { ...state, temperaments: action.payload };

    case FILTER:
      const dogsFiltered = state.dogsCopy.filter(
        (dog) => dog.temperament === action.payload
      ); // I want to stay with all dogs that have certain temp
      return { ...state, dogs: dogsFiltered }; // setting dogs as filtered dogs

    case ORDER_NAME:
      const dogsCopied = [...state.dogsCopy]; // create a copy of the dogs array
      if (action.payload === "A-Z") {
        //ASCENDING
        dogsCopied.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });
      } else {
        dogsCopied.sort((a, b) => {
          //DESCENDING
          if (b.name < a.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        });
      }
      return { ...state, dogs: dogsCopied };

    case ORDER_WEIGHT:
      return {};

    default:
      return state;
  }
};

export default reducer;