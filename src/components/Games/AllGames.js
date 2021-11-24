import useGames from './useAllGames';
import MainGamesPage from './MainGamesPage/MainGamesPage';

import'./allgames.styles.scss'

const Games = () => {
    const { 
        fetchedData,
        isLoading 
    } = useGames();


    return (
        <div className="allgames-container">
            <MainGamesPage 
                gamesData={fetchedData} 
                pageTitle={"All games:"} 
                isLoading={isLoading}
            />
        </div>
    )
}


export default Games;