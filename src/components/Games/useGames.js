import { useState, useEffect } from 'react';

const useGames = () => {
  // const [howManyGames, setHowManyGames] = useState(20);

  // const loadMoreGamesHandler = () => {
  //   setHowManyGames(howManyGames + 20);
  //   console.log(howManyGames);
    // fetchGames();
 // }

   // useEffect(() => {
       // fetchGames()
      // eslint-disable-next-line react-hooks/exhaustive-deps
     // },[])
    
     // const [games, setGames] = useState([])
      
      /*const queryBuilder=()=>{
        useSelctor()
        let query = '`https://api.rawg.io/api/games?' 
        if(startDate)){
          query+='dates=2019-01-01'
        }
        return query;
      }*/

     // const fetchGames = () => {
        //fetch('https://rawg.io/api/collections/must-play/games?key=2989b3e6293c4ef68887b2acde1f6efa')
        // from env file ${REACT_APP_YOUR}
       // fetch(`https://api.rawg.io/api/games?key=9e40a65de4664feeba30438a2ac8cd47&page_size=${howManyGames}`)
       // .then(resp => resp.json())
       // .then(({results}) => setGames(results))
        // .catch((err)=>{
        //   //alert()
        // }
     // }

      // in proges
      // review
      // done

      const [games, setGames] = useState([]);
      const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      fetchGames();
    }, []);

  const fetchGames = () => {
    setLoading(true);
    fetch(
      `https://api.rawg.io/api/games?key=f32778b2bef84d9fb2f4fd9f8a200fd5&page_size=20`
    )
      .then((resp) => resp.json())
      .then(({ results }) => {
      setGames(results);
      setLoading(false);
      });
  };
    
      return {
          games,
          loading
      }
}

export default useGames;
