import { Link } from 'react-router-dom';
import "./RatingForm.css";
import DarkBox from '../DarkBox/DarkBox';
import RatingRow from '../RatingRow/RatingRow'
import StarredCircle from '../StarredCircle/StarredCircle';
import SubmitButton from '../UI/SubmitButton/SubmitButton';

const RatingForm = () => {
    return (
        <DarkBox>
            <StarredCircle />
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <RatingRow />
            <Link to="/success"><SubmitButton /></Link>
      </DarkBox>
    );
};

export default RatingForm;