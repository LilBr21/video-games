//import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import {useDispatch} from 'react-redux';
import { gamesActions } from '../../store/games';
//import { useResearchSearch } from '../useResetSearch';
import MenuContent from './HamburgerMenu/MenuContent';
import Search from './Search/Search';
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
                <Link to="/cart">
                    <img className="cart-img" src='/assets/cart.svg' alt="cart" />
                </Link>
                <MenuContent />
            </div>
        </div>
    )
};

export default Header;