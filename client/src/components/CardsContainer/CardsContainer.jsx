import React from "react";
import Card from "../Cards/Card";
import Paginate from "../Paginate/Paginate";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";

const CardsContainer = ({ onClose }) => {
  const dogs = useSelector((state) => state.dogs);
  const numPage = useSelector((state) => state.numPage);
  // I want to see 8 out of x dogs per page
  const start = (numPage - 1) * 8;
  const finish = numPage * 8;

  const totalPages = Math.ceil(dogs.length / 8);
  const viewDogs = dogs.slice(start, finish);

  return (
    <div className={style.container}>
      {viewDogs && viewDogs.map((dog) => (
        <Card key={dog.id} dog={dog} onClose={onClose} />
      ))}
      {console.log(start, finish, totalPages, numPage)}
      {viewDogs.length === 0 ? null : (// only shows pages after it
        <Paginate totalPages={totalPages} />
      )}
    </div>
  );
};

export default CardsContainer;
