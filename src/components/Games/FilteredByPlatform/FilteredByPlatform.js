import Header from '../../Header/Header';
import useFilteredByPlatform from './useFilteredByPlatform';
import GameCard from '../../GameCard/GameCard';
import Buttons from '../../Buttons/Buttons';

import { useSelector } from 'react-redux';

import './filteredbyplatform.styles.scss';

const FilteredByPlatform = () => {
    const { fetchedPlatformGames } = useFilteredByPlatform();

    const consoleName = useSelector(state => state.filters.consoleName);

    console.log(fetchedPlatformGames)

    return (
        <div>
            <Header />
            <div className="platform-games-container">
                <div>
                    <h2 className="console-title">{consoleName}</h2>
                </div>
                <div className="inside-container">
                {fetchedPlatformGames.map(game => (
                    <GameCard 
                    key={game.id}
                    {...game}
                    />
                    ))}
                </div>
                <div>
                    <Buttons />
                </div>
            </div>
        </div>
    )

}

export default FilteredByPlatform;