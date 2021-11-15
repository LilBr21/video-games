import { useSelector } from 'react-redux';

import './cartitemscounter.styles.scss';

const CartItemsCounter = () => {
    const gamesQuant = useSelector(state => state.cart.gamesQuant);

    return (
        <div className="counter-container">
            <p>{gamesQuant}</p>
        </div>
    )
}

export default CartItemsCounter;