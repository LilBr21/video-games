import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { gamesActions } from '../../../store/games';

import './search.styles.scss';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    //debounce <- lodash
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        event.preventDefault();
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        dispatch(gamesActions.searchGames(searchTerm));
        history.push('/allgames');
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