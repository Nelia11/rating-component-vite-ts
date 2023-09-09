import "./RatingRow.css";
import Circle from '../Circle/Circle';

const RatingRow = ({ handleRating }:any) => {
    return (
        <div className="rating-row">
            {[...Array(5)].map((_, index) => {
                index += 1;
                return (
                    <Circle 
                        key={index} 
                        handleRating={() => handleRating(index)} 
                    >
                        {index}
                    </Circle>
                )
            })}
        </div>
    );
};

export default RatingRow;