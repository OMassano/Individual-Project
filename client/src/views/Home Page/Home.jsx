import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch, useSelector } from "react-redux";
import { closeDog, getDogs, previewDogs } from "../../redux/action";
import { useEffect } from "react";
import Card from "../../components/Cards/Card";
const Home = () => {
  const dispatch = useDispatch();

  const onClose = (id) => {
    dispatch(closeDog(id));
  };

  const getAllDogs = () => {
    dispatch(getDogs());
  };

  useEffect(() => {
    dispatch(previewDogs());
  }, [dispatch]); // Add an empty dependency array to run the effect only once

  const dogs = useSelector(state => state.dogs)
  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <CardsContainer dog={dogs}onClose={onClose} />
    </div>
  );
};

export default Home;
