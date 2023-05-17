import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useDispatch } from "react-redux";
import { closeDog, getDogs, previewDogs } from "../../redux/action";
import { useEffect } from "react";

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

  return (
    <div>
      <h1>Home</h1>
      <button onClick={getAllDogs}>Load all dogs</button>
      <CardsContainer onClose={onClose} />
    </div>
  );
};

export default Home;
