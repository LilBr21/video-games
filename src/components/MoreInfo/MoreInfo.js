import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

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
    } = useMoreInfo();

    const dispatch = useDispatch();

    const newCartPair = {name: name, gamePrice: gamePrice, platforms: platforms};

    const gameToCartHandler = () => {
        dispatch(cartActions.addGameToCart(name));
        dispatch(cartActions.addPriceToCart(gamePrice));
        dispatch(cartActions.addNewCartPair(newCartPair));
        dispatch(cartActions.incrementGamesQuant());
    }
    
    return (
        <div className="more-info-container">
            <div>
                <Header />
            </div>
            <div className="extended-container">
                <div className="top-container">
                    <div className="game-name-container">
                        <h3 className="game-name">{name}</h3>
                    </div>
                    <p className="game-price">{gamePrice}$</p>
                    <div onClick={()=>gameToCartHandler(gamePrice, name, newCartPair)} className="add-btn-container">
                        <button className="add-btn">Add to cart</button>
                    </div>
                </div>
                <div className="main-img-container">
                    <img 
                        className="game-pic" 
                        src={background_image} 
                        alt="main game" 
                    />
                </div>
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
                <div className="screenshots-container">
                    {fetchedScreenshots && fetchedScreenshots.map(image => (
                        <img className="game-screenshots" key={Math.floor(Math.random() * Date.now())} src={image.image} alt="gameplay screenshot"></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;