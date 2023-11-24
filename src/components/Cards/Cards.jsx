import Card from "../Card/Card";
import style from "./Cards.module.css";

import Slides from "../Slides/Slides"

export default function Cards({ cities, onClose }) {
    return (
        <div className={style.container}>
            {/* {
                cities.length ? (
                    <div className={style.cards}>
                        {
                            cities.map((c) => <Card
                                key={c.id}
                                max={c.max}
                                min={c.min}
                                name={c.name}
                                img={c.img}
                                onClose={() => onClose(c.id)}
                                id={c.id}
                            />)
                        }
                    </div>
                ) : (
                    <div>
                        <p></p>
                    </div>
                )
            } */}

            <Slides cities={cities} onClose={onClose}/>
        </div>
    )
}