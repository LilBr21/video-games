import useGamesRanking from './useGamesRanking';
import MainGamesPage from '../MainGamesPage/MainGamesPage';

const GamesRanking = () => {
    const { fetchedRanking, isLoading } = useGamesRanking();

    return (
        <div>
            <MainGamesPage 
                gamesData={fetchedRanking} 
                pageTitle={"Top games ranking"} 
                isLoading={isLoading}
            />
        </div>    
    )

}

export default GamesRanking;