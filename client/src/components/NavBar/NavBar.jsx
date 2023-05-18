import { Link } from "react-router-dom";
import style from "./Navbar.module.css"
// import SearchBar from "../SearchBar/SearchBar";

const NavBar = () =>{
 return(
    <div className={style.container}>
        <Link to="/home">Home</Link>
        <Link to="/create-dog">Form</Link>
        <Link to="/about">About Us</Link>
        {/* <SearchBar /> */}
    </div>
 )   
}

export default NavBar;