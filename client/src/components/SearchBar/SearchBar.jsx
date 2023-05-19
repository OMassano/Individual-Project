import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const dogs = useSelector((state) => state.dogs);

  const onSearch = () => {
    const existingDog = dogs.find(
      (dog) => dog.name.toLowerCase() === name.toLowerCase() //checking to see if i already searched up dog
    );
    if (!existingDog) {
      dispatch(getDogByName(name));
    } else {
      alert("You have already searched up that name!");
    }
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={name} />
      <button onClick={onSearch}>Search by Breed</button>
    </div>
  );
};

export default SearchBar;
