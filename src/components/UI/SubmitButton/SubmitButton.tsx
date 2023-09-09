import React from "react";
import "./SubmitButton.css";
import { SubmitButtonProps } from "../../../interfaces/Interfaces";

const SubmitButton: React.FC<SubmitButtonProps> = ({ handleSubmit }) => {
    return (
        <button className="orange-btn" onClick={handleSubmit} >
            SUBMIT
        </button>
    );
};

export default SubmitButton;