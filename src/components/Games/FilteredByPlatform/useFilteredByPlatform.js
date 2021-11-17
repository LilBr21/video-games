import { useSelector } from 'react-redux'; 
import { useState, useEffect } from 'react'

const useFilteredByPlatform = () => {
    const [fetchedPlatformGames, setFetchedPlatformGames] = useState([])
    const filterPlatform = useSelector(state => state.games.platformFilter);
    const currentPage = useSelector(state => state.games.currentPage);
    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    const queryPlatformBuilder = () => {
        let platformUrl = `https://api.rawg.io/api/games?key=${API_KEY}&platforms=${filterPlatform}`
        if(currentPage){
            platformUrl+=`&page=${currentPage}`
          }
        return platformUrl;
    }

    const fetchFilteredPlatform = () => {
        fetch(queryPlatformBuilder())
            .then((resp) => resp.json())
            .then(({ results }) => {
            setFetchedPlatformGames(results);
            console.log(fetchedPlatformGames);
        }).catch((err)=>{
          alert("Something went wrong")
        });
    };

    useEffect(() => {
        fetchFilteredPlatform();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterPlatform, currentPage])

    return {
        fetchedPlatformGames
    }

}



export default useFilteredByPlatform;