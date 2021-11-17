import { configureStore} from '@reduxjs/toolkit';

import priceReducer from './prices';
import gamesReducer from './games';
import cartReducer from './cart'
import filtersReducer from './filters';


const store = configureStore({
    reducer: { 
        games: gamesReducer, 
        prices: priceReducer, 
        cart: cartReducer, 
        filters: filtersReducer 
    }
});


export default store;