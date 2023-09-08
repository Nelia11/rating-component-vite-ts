import React from 'react';
import "./RatingRow.css";
import Circle from '../Circle/Circle';

const RatingRow = () => {
    
    return (
        <div className="rating-row">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <Circle key={index} 
                    >{index}</Circle>
                )
            })}
        </div>
    );
};

export default RatingRow;