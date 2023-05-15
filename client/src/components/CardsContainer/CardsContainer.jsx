import { useSelector } from "react-redux";
import Card from "../Cards/Card";
import style from "./CardsContainer.module.css";
// Has to receive array of dogs and for each user render a Card

const CardsContainer = () => {
  // gives us info from state
  const dogs = useSelector((state) => state.dogs);
  return (
    <div className={style.container}>
      {dogs.map((dog) => {
        return (
          <Card
            id={dog.id}
            name={dog.name}
            weight={dog.weight}
            height={dog.height}
            life_span={dog.life_span}
            temperament={dog.temperament}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
