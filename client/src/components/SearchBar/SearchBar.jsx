import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/action";
import style from "./SearchBar.module.css";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const dogs = useSelector((state) => state.dogs);

  let searchTimeout;

  const onSearch = () => {
    const existingDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );

    if (!existingDog) {
      clearTimeout(searchTimeout);

      // Start a new timeout so that it wont load dogs twice
      searchTimeout = setTimeout(() => {
        dispatch(getDogByName(name)).catch(() => {
          window.alert(
            "That dog does not exist! Please attempt to search for a different dog breed or add the dog yourself in our new form section!"
          );
        });
      }, 100);
    } else {
      alert("You have already searched up that name!");
    }
  };
  return (
    <div>
      <input
        type="search"
        onChange={handleChange}
        value={name}
        className={style.bar}
      />
      <button onClick={onSearch} className={style.button}>
        Search by Breed
      </button>
    </div>
  );
};

export default SearchBar;
