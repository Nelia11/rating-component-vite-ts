import "./RatingComplete.css"
import DarkBox from '../DarkBox/DarkBox';

const RatingCompete = () => {
    return (
        <DarkBox>
            <img className="thank-you" src="images/illustration-thank-you.svg"  alt="thank you" />
            <div className="rating-info">
                <p>You selected *** out of 5</p>
            </div>
            <h2 className="centered-txt">Thank you!</h2>
            <p className="centered-txt">
                We appreciate you taking the time to give a rating. 
                If you ever need more support, don't hesitate to get in touch!
            </p>
        </DarkBox>
    );
};

export default RatingCompete;