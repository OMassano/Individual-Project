import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { closeDog, closeAllDogs, getDogs } from "../../redux/action";

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
  
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <button onClick={closeAll}>Close all dogs</button>
      <CardsContainer onClose={onClose} />
    </div>
  );
};

export default Home;
