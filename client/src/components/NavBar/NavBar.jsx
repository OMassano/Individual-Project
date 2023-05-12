import { Link } from "react-router-dom";
import style from "./NavBar.module.css"

// creates a link at top of page to all my routes
const NavBar = ()=>{
    return(
        <div className={style.mainContainer}>
            <Link to="/homepage">Home</Link>
            <Link to="/create-dog">Form</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default NavBar;