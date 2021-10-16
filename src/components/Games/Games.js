import Header from '../Header/Header';
import GameCard from '../GameCard/GameCard';
import useGames from './useGames';

import './games.styles.css';

const Games = () => {
    const { fetchedData,
          isLoading,
          goToNextPageHandler,
          goToPreviousPageHandler} = useGames();

    console.log("fetchedData:", fetchedData)

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
                <div className="games-container">
                {fetchedData.map(game => (
                    <GameCard 
                    key={game.id}
                    {...game}
                    />
                    ))}
                </div>
                }
                <div>
                    <button className="next-btn" onClick={goToPreviousPageHandler}>BACK</button>
                    <button className="prev-btn" onClick={goToNextPageHandler}>NEXT</button>
                </div>
            </div>
        </div>
    )
}


export default Games;