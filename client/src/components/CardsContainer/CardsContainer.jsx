import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from "./CardsContainer.module.css";

const CardsContainer = ({ onClose }) => {
  const dogs = useSelector((state) => state.dogs);

  return (
    <div className={style.container}>
      {dogs.map((dog) => (
        <Card key={dog.id} dog={dog} onClose={onClose} />
      ))}
    </div>
  );
};

export default CardsContainer;
