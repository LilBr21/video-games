//import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import MenuContent from './HamburgerMenu/MenuContent';
import Search from './Search/Search';
import './header.styles.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className="main-title">Video Games</h1>
            </Link>
            <div className="header-right-side">
                <Search />
                <img className="cart-img" src='/assets/cart.svg' alt="cart" />
                <MenuContent />
            </div>
        </div>
    )
};

export default Header;