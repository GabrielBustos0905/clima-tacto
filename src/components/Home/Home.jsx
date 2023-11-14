import style from "./Home.module.css"
import NavBar from "../NavBar/NavBar"

export default function Home() {
    return (
        <div className={style.container}>
            <NavBar />
            <h1>Home</h1>
        </div>
    )
};