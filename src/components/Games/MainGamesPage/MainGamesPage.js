import GameCard from '../../GameCard/GameCard';
import Buttons from '../../Buttons/Buttons';
import Header from '../../Header/Header';

import'./maingamespage.styles.scss';


const MainGamesPage = (props) => {
    return (
        <div>
            <Header />
            <div className="game-part-container">
                <div>
                    <h2 className="games-title">{props.pageTitle}</h2>
                </div>
                {props.isLoading ?  
                    <p className="loading">Loading...</p>
                : 
                <div className="all-games-container">
                    {props.gamesData.map(game => (
                        <GameCard 
                        key={game.id}
                        {...game}
                    />
                    ))}
                </div> }
                <div>
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default MainGamesPage;