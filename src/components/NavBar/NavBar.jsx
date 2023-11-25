import { useState } from "react";
import style from "./NavBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function NavBar({ onSearch }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(input);
        setInput("")
    };

    return (
        <div className={style.container}>
            <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={style.containerInput}>
                    <input
                        type="text"
                        placeholder="Search Place" 
                        className={style.input} 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <span className={style.span}></span>
                </div>
                <button className={style.buttonContainer}>
                    <FaSearch className={style.button} />
                </button>
            </form>
        </div>
    )
};