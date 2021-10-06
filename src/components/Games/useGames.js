import { useState, useEffect } from 'react';

const useGames = () => {
  const [howManyGames, setHowManyGames] = useState(20);

  const loadMoreGamesHandler = () => {
    setHowManyGames(howManyGames + 20);
    console.log(howManyGames);
    fetchGames();
  }

    useEffect(() => {
        fetchGames()
      })
    
      const [games, setGames] = useState([])
      
      const fetchGames = () => {
        //fetch('https://rawg.io/api/collections/must-play/games?key=2989b3e6293c4ef68887b2acde1f6efa')
        fetch(`https://api.rawg.io/api/games?key=2989b3e6293c4ef68887b2acde1f6efa&page_size=${howManyGames}`)
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
      }
    
      return {
          games,
          loadMoreGamesHandler
      }
}

export default useGames;