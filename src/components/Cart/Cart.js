import { useSelector } from 'react-redux';
//import { useState } from 'react';

import Header from '../Header/Header';
import AddedGame from './AddedGame';

import './cart.styles.scss';

const Cart = () => {
    const cartPairs = useSelector(state => state.games.cartPairs);

    let allCartPrices = [];
    for (let i = 0; i < cartPairs.length; i++) {
            allCartPrices.push(cartPairs[i].gamePrice)
    }
         
    const totalPrice = allCartPrices.reduce((a, b) => a + b, 0);

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-container">
                <h3 className="cart-title">Cart items:</h3>
                <div className="bought-games-container">
                    {cartPairs.map(pair => (
                        <AddedGame key={Math.floor(Math.random() * 100)} price={pair.gamePrice} name={pair.name}/>
                    ))}
                </div>
                <div className="total-container">
                    <p>Total:</p>
                    <div className="total-price-container">
                        <p>{totalPrice} $</p>
                    </div>
                </div>
                <div>
                    <button className="order-btn">Order</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;