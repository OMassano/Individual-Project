import style from './Landing.module.css'
import {Link} from "react-router-dom"
const Landing = () =>{
    return(
        <div className={style.background}>
            <h1 className={style.title}>Encyclopedia of Dogs</h1>
            <p className={style.thisp}>To learn more about dogs please click the button below!</p>
            <Link to="/home" className={style.button}>Click Me</Link>
        </div>
    )
}

export default Landing