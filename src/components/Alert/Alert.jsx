
import "./Alert.css";
import { IoIosAlert, IoMdClose } from "react-icons/io";

export default function Alert({ alert }) {

    return (
        <div className={`alert-container ${alert.clase}`}>
            <div className="alert">
                <IoIosAlert className="icon" />
                <span className="msg">{alert.message}</span>
                <IoMdClose className="icon-close"/>
            </div>
        </div>
    )
}