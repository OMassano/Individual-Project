//should receive array of dogs and for each dog render the card component
import Card from "../Cards/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";


const CardsContainer = () => {
    const dogs = useSelector(state => state.dogs)
  return (
    <div className={style.container}>
      {dogs.map((dog) => {
        return (
          <Card
            id={dog.id}
            image={dog.image}
            name={dog.name}
            height={dog.height}
            weight={dog.weight}
            life_span={dog.life_span}
            temperaments={dog.temperaments.join(", ")}
          />
        );
      })}
    </div>
  );
};

export default CardsContainer;
