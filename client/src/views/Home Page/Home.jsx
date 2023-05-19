import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { closeDog, closeAllDogs, getDogs, filterDogs, orderDogsName, orderDogsWeight } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(closeDog(id));
  };

  const getAllDogs = () => {
    dispatch(getDogs());
  };

  const closeAll = () =>{
    dispatch(closeAllDogs())
  }

  const handleOrderName = (event) =>{
    dispatch(orderDogsName(event.target.value))
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <button onClick={closeAll}>Close all dogs</button>

      <select onChange={handleOrderName}>
      <option value="A-Z">A-Z</option>
      <option value="Z-A">Z-A</option>
      </select>

      <CardsContainer onClose={onClose} />
    </div>
  );
};

export default Home;
