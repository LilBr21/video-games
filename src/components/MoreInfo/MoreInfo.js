/* eslint-disable jsx-a11y/img-redundant-alt */
import { useDispatch, useSelector } from 'react-redux';
import { gamesActions } from '../../store/games';
//import { priceActions } from '../../store/prices';
//import { useEffect, useState } from 'react';

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
        randomPrice,
        chosenId
    } = useMoreInfo();

    const dispatch = useDispatch();
    //try with useMemo (,[])
    //const randomPrice = generateRandomPrice(30, 200);
    const gameToCartHandler = (randomPrice, chosenId) => {
        dispatch(gamesActions.addGameToCart(name));
        dispatch(gamesActions.addPriceToCart(randomPrice));
    }

    //dispatch(priceActions.createPrice({chosenId: chosenId, randomPrice: randomPrice}));

    useSelector(state => state.prices.activePrice)

    // useEffect(() => {
    //     setGamePrice()
    // }, [])

    //console.log(fetchedExtension);
    
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
                    <p className="game-price">{randomPrice}$</p>
                    <div onClick={()=>gameToCartHandler(randomPrice, chosenId)} className="add-btn-container">
                        <button className="add-btn">Add to cart</button>
                    </div>
                </div>
                <img 
                    className="game-pic" 
                    src={background_image} 
                    alt="main game picture" 
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
                    <p key={platform.index} className="game-platform">{platform.platform.name}</p>
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