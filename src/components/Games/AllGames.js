import Header from '../Header/Header';
import GameCard from '../GameCard/GameCard';
import Buttons from '../Buttons/Buttons';
import useGames from './useAllGames';

import './allgames.styles.scss';

const Games = () => {
    const { 
        fetchedData,
        isLoading 
    } = useGames();


    return (
        <div>
            <Header />
            <div className="game-part-container">
                <div>
                    <h2 className="games-title">All games:</h2>
                </div>
                {isLoading ?  
                    <p className="loading">Loading...</p>
                :
                <div className="all-games-container">
                {fetchedData.map(game => (
                    <GameCard 
                    key={game.id}
                    {...game}
                    />
                    ))}
                </div>
                }
                <div>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}


export default Games;