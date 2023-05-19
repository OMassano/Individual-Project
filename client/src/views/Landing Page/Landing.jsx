import style from './Landing.module.css'
import {useNavigate} from "react-router-dom"
import { previewDogs } from '../../redux/action'
import { useDispatch } from 'react-redux'

const Landing = () =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleClick = ()=>{
        navigate("/home")
        dispatch(previewDogs())// so that it only renders when button is clicked 
    }
        return(
            <div className={style.background}>
                <h1 className={style.title}>Encyclopedia of Dogs</h1>
                <p className={style.thisp}>To learn more about dogs please click the button below!</p>
                <button onClick={handleClick} className={style.button}>Click Me</button>
            </div>
        )
    }
    
    export default Landing