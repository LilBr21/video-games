/* eslint-disable jsx-a11y/img-redundant-alt */
import Header from '../Header/Header';
import useMoreInfo from './useMoreInfo';

import './moreinfo.styles.scss';

const MoreInfo = () => {
    const { fetchedScreenshots, ...fetchedExtension } = useMoreInfo();

    console.log(fetchedExtension);
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="extended-container">
                <div className="top-container">
                    <div className="game-name-container">
                        <h3 className="game-name">{fetchedExtension.name}</h3>
                    </div>
                    <div className="add-btn-container">
                        <button className="add-btn">Add to cart</button>
                    </div>
                </div>
                <img 
                    className="game-pic" 
                    src={fetchedExtension.background_image} 
                    alt="main game picture" 
                />
                <p className="game-description">{fetchedExtension.description_raw}</p>
                <p className="game-description">Date of release: 
                    <span className="game-data">{fetchedExtension.released}</span>
                </p>
                <p className="game-description">Rating: 
                    <span className="game-data">{fetchedExtension.rating}</span>
                </p>
                <p className="game-description">Platforms:</p>
                {fetchedExtension.platforms && fetchedExtension.platforms.map(platform => (
                    <p key={platform.id} className="game-platform">{platform.platform.name}</p>
                ))}
                <div>
                    {fetchedScreenshots && fetchedScreenshots.map(image => (
                        <img className="game-screenshots" key={image.id} src={image.image} alt="gameplay screenshot"></img>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MoreInfo;