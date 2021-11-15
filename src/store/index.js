import { configureStore} from '@reduxjs/toolkit';

import priceReducer from './prices';
import gamesReducer from './games';
import cartReducer from './cart'


const store = configureStore({
    reducer: { games: gamesReducer, prices: priceReducer, cart: cartReducer }
});


export default store;