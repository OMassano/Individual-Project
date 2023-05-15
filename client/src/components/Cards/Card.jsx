//has to show the info of each props and give us a link to be able to see props detail
import style from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={style.card}>
      <p>Name:{props.name}</p>
      <p>Weight:{props.weight}</p>
      <p>Height:{props.height}</p>
      <p>LifeSpan:{props.life_span}</p>
      <p>Temperaments:{props.temperament}</p>
    </div>
  );
};

export default Card;
