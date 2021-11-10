import './homepage.styles.scss';

import Header from '../Header/Header';

import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage">
            <Header />
            <div className="homepage-content">
                <div className="leftside">
                    <img className='pad-img' src='/assets/pad.png' alt='pad' />
                </div>
                <div className="rightside">
                    <ul className="home-list">
                        <li>over 10 000 games</li>
                        <li>new releases and top rankings</li>
                        <li>games for different consoles</li>
                        <li>best prices</li>
                    </ul>
                    <div className="btn-container">
                        <Link to='/allgames'>
                            <button className="seeallbtn">See all</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;