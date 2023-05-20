import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDog,
  closeAllDogs,
  getDogs,
  filterDogs,
  orderDogsName,
  // orderDogsWeight,
  getTemps,
  orderDogsWeight,
} from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();

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
  const temperaments = useSelector((state) => state.temperaments);
  // console.log(temperaments); // works fine

  const handleFilter = (event) => {
    const temperament = event.target.value;
    dispatch(filterDogs(temperament));
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <button onClick={closeAll}>Close all dogs</button>

      <select onChange={handleFilter} onClick={viewTemps}>
        {temperaments && temperaments.map((temp) =>
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

      <CardsContainer onClose={onClose} />
    </div>
  );
};

export default Home;
