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
      <h1 className={style.title}>Encyclopedia of Dogs</h1>
      <div className={style.links}>
        <Link to="/home" className={style.link}>Home</Link>
        <Link to="/create-dog" className={style.link}>Form</Link>
        <Link to="/about" className={style.link}>About Us</Link>
      </div>
      <SearchBar onSearch={onSearch} className={style.link} />
    </div>
  );
};

export default NavBar;
