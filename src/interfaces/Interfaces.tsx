import { ReactNode } from 'react';

export interface Props {
    children?: ReactNode
}

export interface RatingProps {
    children?: ReactNode
    handleRating: Function
}

export interface FormProps {
    handleRating: Function
}

export interface SubmitButtonProps {
    handleSubmit: () => void;
}
