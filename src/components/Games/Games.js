import useGames from './useGames';

import './games.styles.css';

const Games = () => {
    const {games} = useGames();

    return (
        <div className="games-container">
            <h2 className="games-title">Our games:</h2>
            <div>
            {games.map(game => (
                <div className="game-container" key={game.id}>
                    <h3 className="game-name">{game.name}</h3>
                    <p className="game-rating">rating: {game.rating}</p>
                    <img 
                        className="game-img" 
                        src={game.background_image} 
                        alt="game" 
                    />
                </div>
            ))}
            </div>
        </div>
    )
}


export default Games;