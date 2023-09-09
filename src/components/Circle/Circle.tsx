import "./Circle.css";
import { RatingProps } from "../../interfaces/Interfaces";

const Circle = ({children, handleRating}: RatingProps) => {
    return (
        <button 
            className="circle" 
            onClick={() => handleRating()} 
        >
            {children}
        </button>
    );
};

export default Circle;