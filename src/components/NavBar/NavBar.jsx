import style from "./NavBar.module.css"
import { FaSearch } from "react-icons/fa";

export default function NavBar() {
    return (
        <div className={style.container}>
            <form className={style.form}>
                <div className={style.containerInput}>
                    <input type="text" placeholder="Search" className={style.input}/>
                    <span className={style.span}></span>
                </div>
                <button className={style.buttonContainer}>
                    <FaSearch className={style.button}/>
                </button>
            </form>
        </div>
    )
};