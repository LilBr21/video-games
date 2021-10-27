import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useMoreInfo = () => {
    const [fetchedExtension, setFetchedExtension] = useState([]);
    const moreInfoId = useSelector(state => state.moreInfoId);
    const [chosenId, setChosenId] = useState(moreInfoId);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    useEffect(() => {
       setChosenId(moreInfoId)
    }, [moreInfoId])

    console.log(moreInfoId);
    //const state = useSelector(state => state);

    let fetcher = `https://api.rawg.io/api/games/${chosenId}?key=${API_KEY}`;

    //`https://api.rawg.io/api/games?key=${API_KEY}&id=${chosenId}`

    const fetchGameInfo = () => {
        fetch(fetcher)
          .then((resp) => resp.json())
          .then(( results ) => {
          setFetchedExtension(results);
          console.log(results);
          console.log(fetcher);
          }).catch((err)=>{
              alert("Something went wrong")
          });
        };

        useEffect(() => {
            fetchGameInfo();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [chosenId])

        useEffect(() => {
            console.log(fetchedExtension);
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [fetchedExtension])

        return {
            ...fetchedExtension
        }
      
}

export default useMoreInfo;