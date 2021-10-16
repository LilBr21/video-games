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

    const queryBuilder=()=>{
        console.log("query builder", state);
        let baseUrl=`https://api.rawg.io/api/games?key=f32778b2bef84d9fb2f4fd9f8a200fd5`;
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
