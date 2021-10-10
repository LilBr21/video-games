import Header from '../Header/Header';
import useGames from './useGames';

import './games.styles.css';

const Games = () => {
    const {games, loading} = useGames();

    return (
        <div>
            <Header />
            <div className="game-part-container">
                <div>
                    <h2 className="games-title">All games:</h2>
                </div>
                {loading ?  
                    <p className="loading">Loading...</p>
                :
                <div className="games-container">
                {games.map(game => (
                    <div className="game-container" key={game.id}>
                        <img 
                            className="game-img" 
                            src={game.background_image} 
                            alt="game" 
                        />
                        <h3 className="game-name">{game.name}</h3>
                        <p className="game-rating">rating: {game.rating}</p>
                        <button className="more-btn">More</button>
                    </div>
                ))}
                </div>
                }
                <div>
                    <button>Load more</button>
                </div>
            </div>
        </div>
    )
}


export default Games;