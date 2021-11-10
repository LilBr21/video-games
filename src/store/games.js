import { createSlice } from '@reduxjs/toolkit';

const initialGamesState = {
    currentPage: 1,
    loading: false,
    searchPhrase: "",
    moreInfoId: 0,
    gameToCartName: '',
    cartNames: [],
    gameToCartPrice: 0,
    cartPrices: []
};

const gamesSlice = createSlice({
    name: 'games',
    initialState: initialGamesState,
    reducers: {
        nextPage(state) {
            state.currentPage = state.currentPage + 1;
        },
        prevPage(state) {
            state.currentPage = state.currentPage - 1;
        },
        searchGames(state, action) {
            state.searchPhrase = action.payload;
        },
        resetSearch(state) {
            state.searchPhrase = "";
        },
        getMoreInfo(state, action) {
            state.moreInfoId = action.payload;
        },
        addGameToCart(state, action) {
            state.gameToCartName = action.payload;
            state.cartNames = ([...state.cartNames, state.gameToCartName]);
        },
        addPriceToCart(state, action) {
            state.gameToCartPrice = action.payload;
            state.cartPrices = ([...state.cartPrices, state.gameToCartPrice]);
        },
    },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;