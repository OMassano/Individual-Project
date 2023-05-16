//should show the info of each dog from cards and give us a link to open dog detail
import style from "./Card.module.css";
const Card = (dog) => {
  return (
    <div className={style.card}>
      <img src={dog.image} alt={dog.name} className={style.dogImage} />
      <p>Name:{dog.name}</p>
      <p>Temperaments:{dog.temperaments}</p>
      {/* <p>Height:{dog.height}cm</p> */}
      <p>Weight:{dog.weight}kg</p>
      {/* <p>LifeSpan:{dog.life_span}</p> */}
    </div>
  );
};

export default Card;
