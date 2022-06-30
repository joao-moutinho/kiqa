import './loading.scss';
import { FaSpinner } from "react-icons/fa";

export const Loading = () => {

    return(
        <div className="loading">
            <FaSpinner className="loading-spining" size={60} />
        </div>
    )
} 