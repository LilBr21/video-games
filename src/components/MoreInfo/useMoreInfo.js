import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useMoreInfo = () => {
    const [fetchedExtension, setFetchedExtension] = useState([]);
    const [fetchedScreenshots, setFetchedScreenshots] = useState([]);
    const moreInfoId = useSelector(state => state.moreInfoId);
    const [chosenId, setChosenId] = useState(moreInfoId);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;

    useEffect(() => {
       setChosenId(moreInfoId)
    }, [moreInfoId])

    console.log(moreInfoId);
    //const state = useSelector(state => state);

    let infoFetcher = `https://api.rawg.io/api/games/${chosenId}?key=${API_KEY}`;
    let screenshotsFetcher = `https://api.rawg.io/api/games/${chosenId}/screenshots?key=${API_KEY}`;

    //`https://api.rawg.io/api/games?key=${API_KEY}&id=${chosenId}`

    const fetchGameInfo = () => {
        fetch(infoFetcher)
          .then((resp) => resp.json())
          .then(( results ) => {
          setFetchedExtension(results);
          console.log(results);
          }).catch((err)=>{
              alert("Something went wrong")
          });
    };

    const fetchScreenshots = () => {
      fetch(screenshotsFetcher)
        .then((resp) => resp.json())
        .then(({ results }) => {
        setFetchedScreenshots(results);
        console.log(results);
        //console.log(results);
        }).catch((err)=>{
            alert("Something went wrong")
        });
    };

        useEffect(() => {
            fetchGameInfo();
            fetchScreenshots();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [chosenId])

        return {
            ...fetchedExtension,
            fetchedScreenshots
        }
      
}

export default useMoreInfo;