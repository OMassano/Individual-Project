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
      const dogsFiltered = state.dogsCopy.filter(// each dog has multiple temps
        (dog) => dog.temperament.some((temp) => temp === action.payload) // if it finds one out of all the temperaments
      );
      return { ...state, dogs: dogsFiltered, dogsCopy: dogsFiltered };

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
      return { ...state, dogs: dogsCopied, dogsCopy: dogsCopied };

    case ORDER_WEIGHT:
      const dogsCopied2 = [...state.dogsCopy]
      if(action.payload = "min"){
        dogsCopied2.sort((a, b)=>{
          //need to see if there is a "-" for each, if there is sort before it, if not just use that
          if (a.weight.includes("-")) a.weight = a.weight.split("-")[0]
          if (b.weight.includes("-")) b.weight = b.weight.split("-")[0]

          if (b.name < a.name) return -1;
          if (b.name > a.name) return 1;
          return 0;
        })
      }
      else{
        dogsCopied2.sort((a, b)=>{
          if (a.weight.includes("-")) a.weight = a.weight.split("-")[0]
          if (b.weight.includes("-")) b.weight = b.weight.split("-")[0]

          if (b.name > a.name) return -1;
          if (b.name < a.name) return 1;
          return 0;
        })
      }
      return {...state, dogs: dogsCopied2};

    default:
      return state;
  }
};

export default reducer;
