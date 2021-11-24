import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { gamesActions } from '../../../store/games'
import { filtersActions } from '../../../store/filters';

import HamburgerMenu from './HamburgerMenu';

import './menu.styles.scss';

const MenuContent = () => {
    const [menuIsShown, setMenuIsShown] = useState(false);

    const dispatch = useDispatch();

    const resetSearchHandler = () => {
        dispatch(gamesActions.resetSearch())
        console.log('123')
    }

    const openMenuHandler = () => {
        setMenuIsShown(!menuIsShown);
    }

    const chooseConsoleHandler = (chosenConsole, consoleName) => {
        dispatch(filtersActions.filterByPlatform(chosenConsole));
        dispatch(filtersActions.assignConsoleName(consoleName));
    }

    const seeTopRankingHandler = () => {
        dispatch(gamesActions.seeTopRanking);
    }

    return (
        <div>
        <div onClick={openMenuHandler}>
            <HamburgerMenu menuIsShown={menuIsShown}/>
        </div>
        <div className="menu-content" style={{transform: menuIsShown ? 'translateX(-78%)' : 'translateX(100%)'}}>
                <h3 className="menu-title-consoles">Consoles:</h3>
                <ul className="menu-list">
                    <div className="menu-section-container">
                        <Link to="/gamesbyplatform" className="console-link">
                            <li onClick={() => chooseConsoleHandler(4, 'PC')} className="console">PC</li>
                        </Link>
                        <Link to="/gamesbyplatform" className="console-link">
                            <li  onClick={() => chooseConsoleHandler(5, 'MacOS')} className="console">MacOS</li>
                        </Link>
                    </div>
                    <h3>Playstation:</h3>
                    <div className="menu-section-container">
                        <Link to="/gamesbyplatform" className="console-link">
                            <li onClick={() => chooseConsoleHandler(187, 'PlaysStation 5')} className="console">PlayStation 5</li>
                        </Link>
                        <Link to="/gamesbyplatform" className="console-link">
                            <li  onClick={() => chooseConsoleHandler(18, 'PlayStation 4')} className="console">PlayStation 4</li>
                        </Link>
                        <Link to="/gamesbyplatform" className="console-link">
                            <li  onClick={() => chooseConsoleHandler(16, 'PlayStation 3')} className="console">PlayStation 3</li>
                        </Link>
                    </div>
                    <h3>Xbox:</h3>
                    <div className="menu-section-container">
                        <Link to="/gamesbyplatform" className="console-link">
                            <li  onClick={() => chooseConsoleHandler(1, 'Xbox One')} className="console">Xbox One</li>
                        </Link>
                        <Link to="/gamesbyplatform" className="console-link">
                            <li  onClick={() => chooseConsoleHandler(14, 'Xbox 360')} className="console">Xbox 360</li>
                        </Link>
                    </div>
                </ul>
                <Link to="/ranking" className="router-link">
                    <h3 onClick={seeTopRankingHandler} className="menu-title">Rankings</h3>
                </Link>
                <Link to='/allgames' className="router-link">
                    <h3 onClick={resetSearchHandler} className="menu-title">See all</h3>
                </Link>
        </div>
        </div>
    )
};

export default MenuContent;