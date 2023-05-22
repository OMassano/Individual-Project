import React from "react";
import Card from "../Cards/Card";
import Paginate from "../Paginate/Paginate";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
const CardsContainer = ({ onClose }) => {
  const dogs = useSelector((state) => state.dogs);
  const numPage = useSelector((state) => state.numPage);
  // I want to see 8 out of x dogs per page
  let start = (numPage - 1) * 8;// from 0
  let finish = numPage * 8;// to 8

  let totalPages = Math.floor(dogs.length / 8);
  let viewDogs = dogs?.slice(start, finish); // asking to see a portion of dogs

  return (
    <div className={style.container}>
      {viewDogs &&
        viewDogs.map((dog) => (
          <Card key={dog.id} dog={dog} onClose={onClose} />
        ))}
      <Paginate totalPages={totalPages}></Paginate>
    </div>
  );
};

export default CardsContainer;
