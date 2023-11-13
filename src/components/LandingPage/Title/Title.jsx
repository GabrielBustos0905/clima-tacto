import style from  "./Title.module.css"

export default function Title(){
    return(
        <div className={style.container}>
            <div className={style.firstCircle}></div>
            <div className={style.secondCircle}></div>
            <div className={style.thirdCircle}></div>
            <div>
                <h1>Clima Tacto</h1>
                <p>Weather App</p>
            </div>
        </div>
    )
}