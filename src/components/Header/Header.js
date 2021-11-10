//import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import MenuContent from './HamburgerMenu/MenuContent';
import Search from './Search/Search';
import './header.styles.scss';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' className="homepage-link">
                <h1 className="main-title">Video Games</h1>
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