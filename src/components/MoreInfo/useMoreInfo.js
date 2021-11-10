import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { priceActions } from '../../store/prices';

const useMoreInfo = () => {
    const [fetchedExtension, setFetchedExtension] = useState([]);
    const [fetchedScreenshots, setFetchedScreenshots] = useState([]);
    //const [fetchedMoreInfo, setFetchedMoreInfo] = useState([]);
    const [randomPrice, setRandomPrice] = useState(0);
    const moreInfoId = useSelector(state => state.games.moreInfoId);
    const [chosenId, setChosenId] = useState(moreInfoId);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;
    const dispatch = useDispatch();

    const generateRandomPrice = (min, max) => {
        return (
            Math.floor(Math.random() * (max - min + 1) + min)
        )
    }

    // randomPrice setPrice usestate
    //useEffect

    useEffect(() => {
        setRandomPrice(generateRandomPrice(30, 200));
    }, []);


    dispatch(priceActions.createPrice({chosenId: chosenId, randomPrice: randomPrice}));

    //let gamePrice = {price: randomPrice};

    useEffect(() => {
       setChosenId(moreInfoId)
    }, [moreInfoId])

    let infoFetcher = `https://api.rawg.io/api/games/${chosenId}?key=${API_KEY}`;
    let screenshotsFetcher = `https://api.rawg.io/api/games/${chosenId}/screenshots?key=${API_KEY}`;

    const fetchGameInfo = () => {
        fetch(infoFetcher)
          .then((resp) => resp.json())
          .then(( results ) => {
          setFetchedExtension(results);
          console.log(fetchedExtension);
          }).catch((err)=>{
              alert("Something went wrong")
          });
    };

    const fetchScreenshots = () => {
      fetch(screenshotsFetcher)
        .then((resp) => resp.json())
        .then(({ results }) => {
        setFetchedScreenshots(results);
        }).catch((err)=>{
            alert("Something went wrong")
        });
    };

        useEffect(() => {
            fetchGameInfo();
            fetchScreenshots();
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [chosenId])

       // useEffect(() => {
            // if (fetchedExtension[0] !== undefined) {
            //     setFetchedMoreInfo({...fetchedExtension, ...gamePrice})
            //     console.log(fetchedMoreInfo);
            // }
        // }, [fetchedExtension])

        return {
            ...fetchedExtension,
            fetchedScreenshots,
            randomPrice, 
            chosenId
        }
      
}

export default useMoreInfo;