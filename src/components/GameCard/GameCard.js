import './gamecard.styles.css';

const GameCard = ({
        id,
        background_image,
        name,
        rating
    }) => {

    return (
        <div className="game-container" key={id}>
            <img 
                className="game-img" 
                src={background_image} 
                alt="game" 
            />
            <h3 className="game-name">{name}</h3>
            <p className="game-rating">rating: {rating}</p>
            <button className="more-btn">More</button>
        </div>           
    )
}

export default GameCard;