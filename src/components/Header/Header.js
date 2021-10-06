import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import './header.styles.css';

import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className="main-title">Video Games</h1>
            </Link>
            <div className="header-right-side">
                <div className="input-container">
                    <img className="search-img" src="/assets/search.svg" alt="search" />
                    <input type="search" className="input"></input>
                </div>
                <img className="cart-img" src='/assets/cart.svg' alt="cart" />
                <HamburgerMenu />
            </div>
        </div>
    )
};

export default Header;