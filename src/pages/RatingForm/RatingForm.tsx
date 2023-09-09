import "./RatingForm.css";
import DarkBox from '../../components/DarkBox/DarkBox';
import RatingRow from '../../components/RatingRow/RatingRow'
import StarredCircle from '../../components/StarredCircle/StarredCircle';
import SubmitButton from '../../components/UI/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { FormProps } from '../../interfaces/Interfaces';
import { useContext } from 'react';
import { RatingContext } from '../../context/RatingContext';

const RatingForm = ({handleRating }: FormProps) => {
    const navigate = useNavigate();
    const rating = useContext(RatingContext);
    const handleSubmit: () => void = () => {
        if(rating === 0) {
            alert("Please choose a rating before submitting");
        } else {
            navigate("/success");
        }
    }
    return (
        <DarkBox>
            <StarredCircle />
            <h2>How did we do?</h2>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <RatingRow handleRating={handleRating} />
            <SubmitButton handleSubmit={handleSubmit} />

      </DarkBox>
    );
};

export default RatingForm;