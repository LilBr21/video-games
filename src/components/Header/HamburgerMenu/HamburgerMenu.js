import './hamburger.styles.scss';

const HamburgerMenu = ({menuIsShown}) => {
    return (
        <div className="hamburger-menu">
            <div 
                className="burger-line" 
                style={{transform: menuIsShown ? 'rotate(45deg)' : 'rotate(0)'}}>
            </div>
            <div 
                className="burger-line" 
                style={{transform: menuIsShown ? 'translateX(300%)' : 'translateX(0)'}}>
            </div>
            <div 
                className="burger-line" 
                style={{transform: menuIsShown ? 'rotate(-45deg)' : 'rotate(0)'}}>                    
            </div>
        </div>
    )
}

export default HamburgerMenu;