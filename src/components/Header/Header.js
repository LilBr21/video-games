import { useDispatch } from 'react-redux';
import { gamesActions } from '../../store/games';
import MenuContent from './HamburgerMenu/MenuContent';
import Search from './Search/Search';
import CartItemsCounter from './CartItemsCounter/CartItemsCounter';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const resetSearchHandler = () => {
        dispatch(gamesActions.resetSearch())
    }


    return (
        <div className="header">
            <Link to='/' className="homepage-link">
                <h1 onClick={resetSearchHandler} className="main-title">Video Games</h1>
            </Link>
            <div className="header-right-side">
                <Search />
                <div className="cart-menu-container">
                    <div className="cart-container">
                        <Link to="/cart">
                            <img className="cart-img" src='/assets/cart.svg' alt="cart" />
                        </Link>
                        <div className="cart-counter-container">
                            <CartItemsCounter /> 
                        </div>
                    </div>
                    <div className="menu-container">
                        <MenuContent />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;