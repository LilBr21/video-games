import {useEffect,useState} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { gamesActions } from '../../store/index';
//import {useFetch} from "../useFetch";

const useGames = () => {      
      const dispatch = useDispatch();
      const currentPage = useSelector(state => state.currentPage);
      const searchPhrase = useSelector(state => state.searchPhrase);

      //const {fetchedData, isLoading,fetchGames}=useFetch()

      const [fetchedData, setFetchedData] = useState([])
    /*
    cały stan z reduxa - parametry zapytania
    na podstawie parametrów -> budować zapytanie
    API -> dane
    dane -> component
    */

    const state = useSelector(state => state)

    const [isLoading, setLoading] = useState(false);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    const queryBuilder=()=>{
        console.log(API_KEY);
        console.log("query builder", state);
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

        console.log("url for fetching", baseUrl)


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
      }, [state])
  
  const goToNextPageHandler = () => {
    dispatch(gamesActions.nextPage());
  }

  const goToPreviousPageHandler = () => {
    if (currentPage > 1) {
      dispatch(gamesActions.prevPage());
    }
  }
    
      return {
          fetchedData,
          isLoading,
          goToNextPageHandler,
          goToPreviousPageHandler
      }
}

export default useGames;
