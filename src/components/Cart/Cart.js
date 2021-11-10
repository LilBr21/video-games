import { useSelector } from 'react-redux';

import Header from '../Header/Header';

import './cart.styles.scss';

const Cart = () => {
    const cartNames =useSelector(state => state.games.cartNames);
    const cartPrices = useSelector(state => state.prices.allPrices);
    let finalGamesNames = [...new Set(cartNames)]
    console.log(finalGamesNames);
    console.log(cartPrices);

    //const totalPrice = cartPrices.reduce((a, b) => a + b, 0);

    return (
        <div className="cart-page">
            <Header />
            <div className="cart-container">
                <h3 className="cart-title">Cart items:</h3>
                <div className="bought-games-container">
                    <div className="cart-names-container">
                        {finalGamesNames.map(name => (
                            <p key={name.index + Math.random()}>{name}</p>
                        ))}
                    </div>
                    <div className="cart-prices-container">
                        {cartPrices.map(price => (
                            <p key={price.index + Date.now()}>{price.price}$</p>
                        ))}
                    </div>
                </div>
                <div className="total-container">
                    <p>Total:</p>
                    <div className="total-price-container">
                        <p>totalPrice $</p>
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