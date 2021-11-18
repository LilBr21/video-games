// import Header from '../Header/Header';
// import GameCard from '../GameCard/GameCard';
// import Buttons from '../Buttons/Buttons';
import useGames from './useAllGames';
import MainGamesPage from './MainGamesPage/MainGamesPage';

const Games = () => {
    const { 
        fetchedData,
        isLoading 
    } = useGames();


    return (
        <MainGamesPage gamesData={fetchedData} pageTitle={"All games:"} isLoading={isLoading}/>
    )
}


export default Games;