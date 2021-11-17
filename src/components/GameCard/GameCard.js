import {  useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gamesActions } from '../../store/games';
import './gamecard.styles.scss';

const GameCard = ({
        id,
        background_image,
        name,
        rating
    }) => {
    
    const dispatch = useDispatch();
    const history = useHistory();

    const showMoreHandler = () => {
    dispatch(gamesActions.getMoreInfo(id));
    
    history.push('/moreinfo');
    }
    return (
        <div className="game-container" key={id}>
            <img 
                className="game-img" 
                src={background_image} 
                alt="game" 
            />
            <div className="card-second-part-container">
                <h3 className="game-name">{name}</h3>
                <p className="game-rating">rating: {rating}</p>
                <button onClick={showMoreHandler} className="more-btn">More</button>
            </div>

        </div>           
    )
}

export default GameCard;