import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { priceActions } from '../../store/prices';

const useMoreInfo = () => {
    const [fetchedExtension, setFetchedExtension] = useState([]);
    const [fetchedScreenshots, setFetchedScreenshots] = useState([]);
    const [gamePrice, setGamePrice] = useState(0);
    const moreInfoId = useSelector(state => state.games.moreInfoId);
    const allPrices = useSelector(state => state.prices.allPrices);
    const [chosenId, setChosenId] = useState(moreInfoId);

    const API_KEY = process.env.REACT_APP_VIDEO_API_KEY;
    const dispatch = useDispatch();

    console.log(allPrices.length);

    const generateRandomPrice = (min, max) => {
        return (
            Math.floor(Math.random() * (max - min + 1) + min)
        )
    }

    const newPair = {id: chosenId, price: generateRandomPrice(30, 200)};

    useEffect (() => {
    let existingPricePair = allPrices.find(({id}) => id === chosenId);
    if (existingPricePair) {
        setGamePrice(existingPricePair.price);
    } else {
        dispatch(priceActions.createPrice(newPair));
        setGamePrice(newPair.price);
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [chosenId])

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

        return {
            ...fetchedExtension,
            fetchedScreenshots,
            gamePrice, 
            chosenId
        }
    }  


export default useMoreInfo;