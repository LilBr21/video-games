import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    gamesQuant: 0,
    gameToCartName: '',
    cartNames: [],
    gameToCartPrice: 0,
    cartPrices: [],
    cartPairs: [], 
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        incrementGamesQuant(state) {
            state.gamesQuant++;
        },
        decrementGamesQuant(state) {
            state.gamesQuant = state.gamesQuant - 1;
        },
        addGameToCart(state, action) {
            state.gameToCartName = action.payload;
            state.cartNames = ([...state.cartNames, state.gameToCartName]);
        },
        addPriceToCart(state, action) {
            state.gameToCartPrice = action.payload;
            state.cartPrices = ([...state.cartPrices, state.gameToCartPrice]);
        },
        addNewCartPair(state, action) {
            state.cartPairs = ([...state.cartPairs, action.payload]);
        },
        deleteFromCart(state, action) {
            state.cartPairs.splice(action.payload, 1);
        },
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;