import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { gamesActions } from '../../../store/index';

import './search.styles.css';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        event.preventDefault();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        dispatch(gamesActions.searchGames(searchTerm));
        history.push('/allgames');
        // let searchTerm = searchPhrase.split(' ').join('-').toLowerCase();
        // setFoundGames([]);
        // fetch(`https://api.rawg.io/api/games?key=f32778b2bef84d9fb2f4fd9f8a200fd5&search=${searchTerm}`)
        // .then(resp => resp.json())
        // .then(({results}) => {
        //     results === undefined ? alert('No games found') : setFoundGames(results);
        // })
        //dispatch(gamesActions.resetSearch());
    }

    return (
        <div>
        <div className="input-container">
            <form onSubmit={onSubmit}>
                <img className="search-img" src="/assets/search.svg" alt="search" />
                <input type="text" onChange={handleChange} value={searchTerm} className="input"></input>
                <Link to='/allgames'>
                    <button onClick={onSubmit} type="submit" className="search-btn">Search</button>
                </Link>
            </form>
        </div>
        </div>
    )
};

export default Search;