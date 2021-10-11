import { useState } from 'react';

import HamburgerMenu from './HamburgerMenu';

import './menu.styles.css';

const MenuContent = () => {
    const [menuIsShown, setMenuIsShown] = useState(false);

    const openMenuHandler = () => {
        setMenuIsShown(!menuIsShown);
    }

    return (
        <div>
        <div onClick={openMenuHandler}>
            <HamburgerMenu menuIsShown={menuIsShown}/>
        </div>
        <div className="menu-content" style={{transform: menuIsShown ? 'translateX(-85%)' : 'translateX(100%)'}}>
                <h3 className="menu-title-consoles">Consoles:</h3>
                <ul className="menu-list">
                    <li className="console">PlayStation</li>
                    <li className="console">Xbox</li>
                    <li className="console">Nintendo Switch</li>
                </ul>
                <h3 className="menu-title">Rankings</h3>
                <h3 className="menu-title">See all</h3>
        </div>
        </div>
    )
};

export default MenuContent;