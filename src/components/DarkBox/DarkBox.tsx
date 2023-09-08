import "./DarkBox.css";
import { Props } from '../../interfaces/Interfaces';

const DarkBox = ({ children }:Props) => {
    return (
        <div className="container">
            <div className="row-wrap">
                {children}
            </div>
        </div>
    );
};

export default DarkBox;