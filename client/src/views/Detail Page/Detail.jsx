import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogById } from "../../redux/action";
import { useEffect } from "react";
const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDogById(id));
  }, [dispatch, id]);

  const dog = useSelector((state) => state.dog[0]);
  console.log(dog)
  console.log(dog.temperament);
  if (!dog) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <img src={dog.image} alt={dog.name} />
        <h2>Name: {dog.name}</h2>
        <p>ID: {dog.id}</p>
        <p>Height: {dog.height}</p>
        <p>Weight: {dog.weight}</p>
        <p>Temperaments: {dog.temperament.join(", ")}</p>
        <p>LifeSpan: {dog.life_span}</p>
      </div>
    </div>
  );
};

export default Detail;
