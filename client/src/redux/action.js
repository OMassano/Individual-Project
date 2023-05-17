import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const CLOSE_DOG = "CLOSE_DOG";
export const PREVIEW_DOG = "PREVIEW_DOG";

export const getDogs = () => {
  return async function (dispatch) {
    const localDogs = await axios.get("http://localhost:3001/getalldogs");

    const dogsData = localDogs.data;
    dispatch({ type: GET_DOGS, payload: dogsData });
  };
};

export const getDogById = (id) => {
  return async function (dispatch) {
    const localDogs = await axios.get(
      `http://localhost:3001/dogs/${id}`
    );

    const dogData = localDogs.data;
    dispatch({ type: GET_DOG, payload: dogData });
  };
};

export const closeDog = (id) => {
  return { type: CLOSE_DOG, payload: id };
};

export const previewDogs = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/getalldogs");

    const dogData = response.data.slice(0,8);
    dispatch({ type: PREVIEW_DOG, payload: dogData });
  };
};
