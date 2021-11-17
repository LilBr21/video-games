import useGamesRanking from './useGamesRanking';
import GameCard from '../../GameCard/GameCard';
import Buttons from '../../Buttons/Buttons';
import Header from '../../Header/Header';

import'./gamesranking.styles.scss';

const GamesRanking = () => {
    const { fetchedRanking } = useGamesRanking();

    return (
        <div>
            <Header />
            <div className="ranking-games-container">
                <div>
                    <h2 className="ranking-title">Top games</h2>
                </div>
                <div className="inside-ranking-container">
                    {fetchedRanking.map(game => (
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

export default GamesRanking;