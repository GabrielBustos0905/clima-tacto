import style from "./Home.module.css"
import NavBar from "../NavBar/NavBar"
import { useState } from "react"
import Cards from "../Cards/Cards";

export default function Home() {
    const [cities, setCities] = useState([]);
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

    function onClose(id) {
        setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

    function onSearch(ciudad) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
            .then(r => r.json())
            .then((recurso) => {
                if (recurso.main !== undefined) {
                    const ciudad = {
                        min: Math.round(recurso.main.temp_min),
                        max: Math.round(recurso.main.temp_max),
                        img: recurso.weather[0].icon,
                        id: recurso.id,
                        wind: recurso.wind.speed,
                        temp: recurso.main.temp,
                        name: recurso.name,
                        weather: recurso.weather[0].main,
                        clouds: recurso.clouds.all,
                        latitud: recurso.coord.lat,
                        longitud: recurso.coord.lon
                    };
                    setCities(oldCities => [...oldCities, ciudad]);
                } else {
                    alert("Ciudad no encontrada");
                }
            });
    };

    return (
        <div className={style.container}>
            <NavBar onSearch={onSearch}/>
            <Cards cities={cities} onClose={onClose} />
        </div>
    )
};