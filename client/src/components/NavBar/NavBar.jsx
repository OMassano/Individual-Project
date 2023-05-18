import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
    const onSearch = ()=>{
        alert("here is where the search would happen")
    }
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
