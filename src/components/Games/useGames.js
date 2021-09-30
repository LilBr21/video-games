import { useEffect, useState } from 'react';

const useGames = () => {
    useEffect(() => {
        fetchGames()
      },[])
    
      const [games, setGames] = useState([])
    
      const fetchGames = () => {
        fetch('https://rawg.io/api/collections/must-play/games?key=2989b3e6293c4ef68887b2acde1f6efa')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
      }
    
      return {
          games
      }
}

export default useGames;