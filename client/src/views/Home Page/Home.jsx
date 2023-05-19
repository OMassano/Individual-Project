import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { closeDog, getDogs } from "../../redux/action";

const Home = () => {
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(closeDog(id));
  };

  const getAllDogs = () => {
    dispatch(getDogs());
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <CardsContainer onClose={onClose} />
    </div>
  );
};

export default Home;
