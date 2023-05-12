import style from "./Landing.module.css"
const Landing = ()=>{
    return(
        <div className={style.background}>
        <h1>Welcome to the official dog API</h1>
        <p>To access site please click on the button below</p>
        <a href="/homepage" className={style.button}>
            Click Me
            </a>
        </div>
    )
}

export default Landing;