import { useDispatch } from "react-redux";
import { useState } from "react";
import { getDogByName } from "../../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const onSearch = () => {
    dispatch(getDogByName(name));
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={name} />
      <button onClick={onSearch}>Search by Breed</button>
    </div>
  );
};

export default SearchBar;
