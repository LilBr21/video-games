import useGames from './useGames';

import './games.styles.css';

const Games = () => {
    const {games} = useGames();

    return (
        <div>
            <h2>Must play:</h2>
        <div>
        {games.map(game => (
            <div key={game.id}>
                <h3>{game.name}</h3>
                <img className="game-img" src={game.background_image} alt="game" />
            </div>
        ))}
        </div>
        </div>
    )
}


export default Games;