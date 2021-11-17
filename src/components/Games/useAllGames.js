import {useEffect,useState} from "react"
import { useSelector } from 'react-redux';

const useGames = () => {      
    const currentPage = useSelector(state => state.games.currentPage);
    const searchPhrase = useSelector(state => state.games.searchPhrase);
    //const seeTopRanking = useSelector(state => state.games.seeTopRanking);

    const [fetchedData, setFetchedData] = useState([])

    const [isLoading, setLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    const queryBuilder=()=>{
        let baseUrl=`https://api.rawg.io/api/games?key=${API_KEY}`;
        if (currentPage && searchPhrase) {
          baseUrl+=`&search=${searchPhrase}`
        }
        if(currentPage){
          baseUrl+=`&page=${currentPage}`
        }
        if(searchPhrase){
          baseUrl+=`&search=${searchPhrase}`
        }

        return baseUrl;
    }

    const fetchGames = () => {
    setLoading(true);
    fetch(queryBuilder())
      .then((resp) => resp.json())
      .then(({ results }) => {
      setFetchedData(results);
      setLoading(false);
      }).catch((err)=>{
          alert("Something went wrong")
      });
  };

      useEffect(() => {
        fetchGames();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [searchPhrase, currentPage])
    
      return {
          fetchedData,
          isLoading
      }
}

export default useGames;
