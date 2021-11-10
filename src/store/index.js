import { configureStore} from '@reduxjs/toolkit';

import priceReducer from './prices';
import gamesReducer from './games';


const store = configureStore({
    reducer: { games: gamesReducer, prices: priceReducer }
});


export default store;