import Card from "../Card/Card";
import style from "./Cards.module.css";
import Slides from "../Slides/Slides"
import Loader from "../Loader/Loader";

export default function Cards({ cities, onClose }) {
    return (
        <div className={style.container}>
            {
                cities.length ? <Slides cities={cities} onClose={onClose} /> : <Loader />
            }
            {/* <Slides cities={cities} onClose={onClose}/>
            <Loader /> */}
        </div>
    )
}