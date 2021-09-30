import { useEffect, useState } from 'react';

const useGames = () => {
    useEffect(() => {
        fetchGames()
      },[])
    
      const [games, setGames] = useState([])
    
      const fetchGames = () => {
        //fetch('https://rawg.io/api/collections/must-play/games?key=2989b3e6293c4ef68887b2acde1f6efa')
        fetch('https://api.rawg.io/api/games?key=2989b3e6293c4ef68887b2acde1f6efa&page_size=20')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
      }
    
      return {
          games
      }
}

export default useGames;