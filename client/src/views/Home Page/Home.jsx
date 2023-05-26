import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Paginate from "../../components/Paginate/Paginate";
import { useDispatch, useSelector } from "react-redux";
import style from "./Home.module.css";
import {
  closeDog,
  closeAllDogs,
  getDogs,
  filterDogs,
  orderDogsName,
  getTemps,
  orderDogsWeight,
} from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperaments);
  
  const dogs = useSelector(state => state.dogs)
  const totalPages = Math.ceil(dogs.length / 8);

  const onClose = (id) => {
    dispatch(closeDog(id));
  };

  const getAllDogs = () => {
    dispatch(getDogs());
  };

  const closeAll = () => {
    dispatch(closeAllDogs());
  };

  const handleOrderName = (event) => {
    dispatch(orderDogsName(event.target.value));
  };

  const handleOrderWeight = (event) => {
    dispatch(orderDogsWeight(event.target.value));
  };
  const viewTemps = () => {
    dispatch(getTemps());
  };

  const handleFilter = (event) => {
    const temperament = event.target.value;
    dispatch(filterDogs(temperament));
  };

  return (
    <div>
      <div className={style.buttoncontainer}>

        <button onClick={getAllDogs} className={style.button}>Load all dogs</button>
        <button onClick={closeAll} className={style.button}>Close all dogs</button>
      </div>

      <div className={style.order}>
        <select onChange={handleFilter} onClick={viewTemps}>
          {temperaments &&
            temperaments.map((temp) =>
              temp.name ? <option key={temp.id}>{temp.name}</option> : null
            )}
        </select>

        <select onChange={handleOrderName}>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>

        <select onChange={handleOrderWeight}>
          <option value="min">min</option>
          <option value="max">max</option>
        </select>
      </div>

      <CardsContainer onClose={onClose} />

      {dogs.length > 8 ?(// only shows pages after it
        <Paginate totalPages={totalPages} />
      ): null}
    </div>
  );
};

export default Home;
