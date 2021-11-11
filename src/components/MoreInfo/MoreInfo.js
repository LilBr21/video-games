import { useDispatch, useSelector } from 'react-redux';
import { gamesActions } from '../../store/games';

import Header from '../Header/Header';
import useMoreInfo from './useMoreInfo';

import './moreinfo.styles.scss';

const MoreInfo = () => {
    const { 
        fetchedScreenshots, 
        name,
        background_image, 
        description_raw, 
        released, 
        rating, 
        platforms,
        gamePrice,
        chosenId
    } = useMoreInfo();

    const dispatch = useDispatch();

    const gameToCartHandler = (gamePrice) => {
        dispatch(gamesActions.addGameToCart(name));
        dispatch(gamesActions.addPriceToCart(gamePrice));
    }

    useSelector(state => state.prices.activePrice)
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="extended-container">
                <div className="top-container">
                    <div className="game-name-container">
                        <h3 className="game-name">{name}</h3>
                    </div>
                    <p className="game-price">{gamePrice}$</p>
                    <div onClick={()=>gameToCartHandler(gamePrice, chosenId)} className="add-btn-container">
                        <button className="add-btn">Add to cart</button>
                    </div>
                </div>
                <img 
                    className="game-pic" 
                    src={background_image} 
                    alt="main game" 
                />
                <p className="game-description">{description_raw}</p>
                <p className="game-description">Date of release: 
                    <span className="game-data">{released}</span>
                </p>
                <p className="game-description">Rating: 
                    <span className="game-data">{rating}</span>
                </p>
                <p className="game-description">Platforms:</p>
                {platforms && platforms.map(platform => (
                    <p key={Math.floor(Math.random() * 100)} className="game-platform">{platform.platform.name}</p>
                ))}
                <div>
                    {fetchedScreenshots && fetchedScreenshots.map(image => (
                        <img className="game-screenshots" key={Math.floor(Math.random() * Date.now())} src={image.image} alt="gameplay screenshot"></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;