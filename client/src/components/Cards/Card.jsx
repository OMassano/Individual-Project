import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ dog, onClose }) => {
  const { id, image, name, temperaments, weight } = dog;

  return (
    <div className={style.card}>
      <button onClick={() => onClose(id)}>X</button>
      <img src={image} alt={name} className={style.dogImage} />
      <Link to={`/dogdetail/${id}`}>
        <p>Name: {name}</p>
      </Link>
      <p>Temperaments: {temperaments}</p>
      <p>Weight: {weight}kg</p>
    </div>
  );
};

export default Card;
