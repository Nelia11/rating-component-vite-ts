import "./Circle.css";
import { Props } from "../../interfaces/Interfaces";

const Circle = ({children}: Props) => {
    return (
        <button className="circle"
        >
            {children}
        </button>
    );
};

export default Circle;