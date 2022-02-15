import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {
    return (
        <div className="dsmovies-pagination-container">
            <div className="dsmovies-pagination-box">
            <div className="setas">
                <button className="dsmovies-pagination-button" 
                disabled={true}>
                   
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovies-pagination-button" disabled={false}>
                    <Arrow className="dsmovie-flip-horizontal" />
                </button>
            </div>
            </div>
        </div>
    );
}

export default Pagination;