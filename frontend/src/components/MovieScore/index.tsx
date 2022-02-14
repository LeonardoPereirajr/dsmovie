import MovieStars from 'components/MovieStars';
import './styles.css';

type Props = {
    score: 3.5;
    count: 13;
}

function MovieScore({ score, count } : Props) {
    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>

    );
}

export default MovieScore;