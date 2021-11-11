import './homepage.styles.scss';
import Header from '../Header/Header';
import { useDispatch } from 'react-redux'
import {gamesActions} from '../../store/games'
import { Link } from 'react-router-dom';


const Homepage = () => {

    const dispatch = useDispatch();

    const resetSearchHandler = () => {
        dispatch(gamesActions.resetSearch())
        console.log('123')
    }

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
                            <button onClick={resetSearchHandler} className="seeallbtn">See all</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage;