import axios from "axios";
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
  NEXT_PAGE,
} from "./index";

export const getDogs = () => {
  return async function (dispatch) {
    const localDogs = await axios.get("http://localhost:5002/getalldogs");

    const dogsData = localDogs.data;
    dispatch({ type: GET_DOGS, payload: dogsData });
  };
};
//----------------------------------------------------------------------------------------------------------------------------
export const getDogById = (id) => {
  return async function (dispatch) {
    const localDogs = await axios.get(`http://localhost:5002/dogs/${id}`);

    const dogData = localDogs.data;
    dispatch({ type: GET_DOG, payload: dogData });
  };
};
//----------------------------------------------------------------------------------------------------------------------------
export const getDogByName = (searchName) => {
  return async function (dispatch) {
    const localDogs = await axios.get(
      `http://localhost:5002/dogs/?name=${searchName}`
    );

    const dogData = localDogs.data;
    dispatch({ type: GET_DOG_NAME, payload: dogData });
  };
};
//----------------------------------------------------------------------------------------------------------------------------
export const closeDog = (id) => {
  return { type: CLOSE_DOG, payload: id };
};
//----------------------------------------------------------------------------------------------------------------------------
export const previewDogs = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:5002/getalldogs");

    const dogData = response.data.slice(0, 8);
    dispatch({ type: PREVIEW_DOG, payload: dogData });
  };
};
//----------------------------------------------------------------------------------------------------------------------------
export const closeAllDogs = () => {
  return { type: CLOSE_DOGS, payload: [] };
};
//----------------------------------------------------------------------------------------------------------------------------
export const filterDogs = (temperament) => {
  return { type: FILTER, payload: temperament };
};
//----------------------------------------------------------------------------------------------------------------------------
export const orderDogsName = (order) => {
  return { type: ORDER_NAME, payload: order };
};
//----------------------------------------------------------------------------------------------------------------------------
export const orderDogsWeight = (order) => {
  return { type: ORDER_WEIGHT, payload: order };
};
//----------------------------------------------------------------------------------------------------------------------------
export const getTemps = () => {
  return async function (dispatch) {
    const localTemps = await axios.get("http://localhost:5002/temperaments");

    const tempData = localTemps.data.sort((a, b) => {
      // sorting data in alphabetical order
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    dispatch({ type: GET_TEMPS, payload: tempData });
  };
};
//----------------------------------------------------------------------------------------------------------------------------
export const nextPage = () => {
  return { type: NEXT_PAGE, };
};
