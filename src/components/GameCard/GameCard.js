import {  useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gamesActions } from '../../store/index';
import './gamecard.styles.css';

const GameCard = ({
        id,
        background_image,
        name,
        rating
    }) => {
    
    const dispatch = useDispatch();
    const history = useHistory();
    
    // useEffect(() => {
    //     dispatch(gamesActions.getMoreInfo(id));
    // }, [])

    const showMoreHandler = () => {
    dispatch(gamesActions.getMoreInfo(id));
    
    console.log(id);
    history.push('/moreinfo');
    }
    return (
        <div className="game-container" key={id}>
            <img 
                className="game-img" 
                src={background_image} 
                alt="game" 
            />
            <h3 className="game-name">{name}</h3>
            <p className="game-rating">rating: {rating}</p>
            <button onClick={showMoreHandler} className="more-btn">More</button>
        </div>           
    )
}

export default GameCard;