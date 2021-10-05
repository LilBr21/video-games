import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import './header.styles.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="main-title">Video Games</h1>
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