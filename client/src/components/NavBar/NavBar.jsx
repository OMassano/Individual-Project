import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/action";
const NavBar = () => {
  const dispatch = useDispatch();

  const onSearch = (name) => {
    dispatch(getDogByName(name));
  };
  
  return (
    <div className={style.container}>
      <Link to="/home">Home</Link>
      <Link to="/create-dog">Form</Link>
      <Link to="/about">About Us</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
