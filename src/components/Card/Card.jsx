import style from "./Card.module.css"


export default function Card({ max, min, name, img, onClose, id }) {
    
    return (
        <div className={style.card}>
            <h3>{name}</h3>
            <img src={"http://openweathermap.org/img/wn/" + img + "@2x.png"} alt="Imagen" />
            <div className={style.temperature}>
                <div>
                    <h4>Maxima</h4>
                    <p>{max}°</p>
                </div>
                <div>
                    <h4>Minima</h4>
                    <p>{min}°</p>
                </div>
            </div>
        </div>
    )
}