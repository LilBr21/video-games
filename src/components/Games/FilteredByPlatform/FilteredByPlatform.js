//import Header from '../../Header/Header';
import useFilteredByPlatform from './useFilteredByPlatform';
import MainGamesPage from '../MainGamesPage/MainGamesPage';

import { useSelector } from 'react-redux';

const FilteredByPlatform = () => {
    const { fetchedPlatformGames, isLoading } = useFilteredByPlatform();

    const consoleName = useSelector(state => state.filters.consoleName);

    return (
        <MainGamesPage 
            gamesData={fetchedPlatformGames} 
            pageTitle={consoleName}
            isLoading={isLoading}
        />
    )

}

export default FilteredByPlatform;