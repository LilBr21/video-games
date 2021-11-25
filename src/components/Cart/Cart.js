import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import AddedGame from './AddedGame';
import Form from './Form/Form';

import './cart.styles.scss';

const Cart = () => {
    const [formIsShown, setFormIsShown] = useState(false);
    const [isReadyToOrder, setIsReadyToOrder] = useState(false);

    const cartPairs = useSelector(state => state.cart.cartPairs);

    let allCartPrices = [];
    for (let i = 0; i < cartPairs.length; i++) {
            allCartPrices.push(cartPairs[i].gamePrice)
    }
         
    const totalPrice = allCartPrices.reduce((a, b) => a + b, 0);

    useEffect(() => {
        if (totalPrice !== 0) {
            setIsReadyToOrder(true);
        }
    }, [totalPrice])


    const showFormHandler = () => {
        setFormIsShown(true);
    }

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-main-container"> 
                {!formIsShown &&
                <div className="cart-games-container">
                    <h3 className="cart-title">Cart items:</h3>
                    <div className="bought-games-container">
                        {cartPairs.map(pair => (
                            <AddedGame 
                                key={Math.floor(Math.random() * 100)} 
                                price={pair.gamePrice} 
                                name={pair.name} 
                                platforms={pair.platforms}
                            />
                        ))}
                    </div>
                    <div className="total-container">
                        <p>Total:</p>
                        <div className="total-price-container">
                            <p>{totalPrice} $</p>
                        </div>
                    </div>
                    <div>
                        {isReadyToOrder && 
                            <button onClick={showFormHandler} className="order-btn">Order</button> 
                        }
                    </div> 
                </div> }
            </div>
            <div>
                {formIsShown && <Form />}
            </div>
        </div>
    )
}

export default Cart;