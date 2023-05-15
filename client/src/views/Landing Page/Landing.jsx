import style from "./Landing.module.css"
const Landing = ()=>{
    return(
        <div className={style.background}>
        <h1 className={style.landing}>Welcome to the official dog API</h1>
        <p className={style.thisp}>To access site please click on the button below</p>
        <a href="/homepage" className={style.button}>
            Click Me
            </a>
        </div>
    )
}

export default Landing;