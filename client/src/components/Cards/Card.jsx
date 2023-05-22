import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card = ({ dog, onClose }) => {
  const { id, image, name, temperament, weight } = dog;

  return (
    <div className={style.card}>
      <button onClick={() => onClose(id)} className={style.button}>X</button>
      <Link to={`/dogdetail/${id}`}className={style.link}>
        <div>
        <p className={style.dogName}>{name}</p>
        <img src={image} alt={name} className={style.dogImage} />
        <p>Temperaments: {temperament.join(", ")}</p>
        <p>Weight: {weight} lbs</p>   
        </div>
      </Link>
    </div>
  );
};

export default Card;
