import {
  GET_DOG,GET_DOGS,CLOSE_DOG,PREVIEW_DOG,GET_DOG_NAME,CLOSE_DOGS,FILTER,ORDER_NAME,ORDER_WEIGHT,GET_TEMPS,NEXT_PAGE, PREV_PAGE
} from "./index";

const initialState = {
  // dogs and dogsCopy are exactly the same, but we only see dogs in our app. We created dogsCopy to be able to filter dogs
  // without stepping on its values
  dogs: [],
  dog: [],
  dogsCopy: [],// in my cases like filter, i don't change dogsCopy so that it continues to see everything prev in dogs
  temperaments: [],
  numPage: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return{...state, numPage:state.numPage+1}
    
    case PREV_PAGE:
      return{...state, numPage:state.numPage-1}
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
        // each dog has multiple temps
        (dog) => dog.temperament.some((temp) => temp === action.payload) // if it finds one out of all the temperaments
      );
      return { ...state, dogs: dogsFiltered };

    case ORDER_NAME:
      const dogsCopied = [...state.dogs]; // create a copy of the dogs array
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
      const dogsCopied2 = [...state.dogs];// create copy
      if (action.payload === "min") {
        dogsCopied2.sort((a, b) => {
          if (
            parseInt(a.weight.split("-")[0]) < parseInt(b.weight.split("-")[0])// seeing if first number is bigger
          )
            return -1;
          else if (
            parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0])
          )
            return 1;
          else {
            // if they are the same I check my max value
            if (parseInt(a.weight.split("-")[1]) <parseInt(b.weight.split("-")[1]))return -1;
            else if (parseInt(a.weight.split("-")[1]) > parseInt(b.weight.split("-")[1]))return 1;
            else return 0;
          }
        });
      } else {// if i receivied max
        dogsCopied2.sort((a, b) => {
          if (parseInt(a.weight.split("-")[1]) > parseInt(b.weight.split("-")[1]))return -1;
          else if (parseInt(a.weight.split("-")[1]) < parseInt(b.weight.split("-")[1]))return 1;
          else {
            // if they are the same i check my min value
            if (parseInt(a.weight.split("-")[0]) > parseInt(b.weight.split("-")[0])) return -1;
            else if (parseInt(a.weight.split("-")[0]) < parseInt(b.weight.split("-")[0])) return 1;
            else return 0;
          }
        });
      }
      return { ...state, dogs: dogsCopied2 };

    default:
      return state;
  }
};

export default reducer;
