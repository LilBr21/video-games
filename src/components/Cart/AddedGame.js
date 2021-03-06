import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

import './addedgame.styles.scss';

const AddedGame = (props) => {
    const dispatch = useDispatch();
    const cartPairs = useSelector(state => state.cart.cartPairs);

    const deleteFromCartHandler = () => {
        let deletedGame = cartPairs.find(({name}) => name === props.name);
        const index = cartPairs.indexOf(deletedGame);
        if (index > -1) {
            dispatch(cartActions.deleteFromCart(index))
        }
        console.log(deletedGame);
        dispatch(cartActions.decrementGamesQuant());
    }

    return (
        <div> 
        <div className="addedgame-container">
            <p className="addedgame-name">{props.name}</p>
            <div className="platform-option-container">
                <label>Choose a platform:</label>
                <select id="platforms" name="platforms" className="platform-select">
                    {props.platforms.map(platform => {
                        return (
                            <option 
                                className="platform-option" 
                                value={platform.platform.name}>
                                {platform.platform.name}
                            </option>
                        )
                    })}
                </select>
            </div>
            <p className="addedgame-price">{props.price} $</p>
            <div className="addedgame-btn-container">
                <button 
                    onClick={deleteFromCartHandler} 
                    className="addedgame-close-btn">x
                </button>
            </div>
        </div> 
        </div>
    )
}

export default AddedGame;