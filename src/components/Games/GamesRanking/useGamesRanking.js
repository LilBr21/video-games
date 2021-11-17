import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useGamesRanking = () => {
    const [fetchedRanking, setFetchedRanking] = useState([]);
    const currentPage = useSelector(state => state.games.currentPage);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    const queryRankingBuilder = () => {
        let rankingUrl = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-rating`
        if(currentPage){
            rankingUrl+=`&page=${currentPage}`
          }
        return rankingUrl;
    }

    const fetchRankingGames = () => {
        fetch(queryRankingBuilder())
            .then((resp) => resp.json())
            .then(({ results }) => {
            setFetchedRanking(results);
            console.log(fetchedRanking);
        }).catch((err)=>{
            alert("Something went wrong")
        });
    };
    
    useEffect(() => {
        fetchRankingGames()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return {
        fetchedRanking
    }
}

export default useGamesRanking;