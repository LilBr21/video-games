import { createSlice } from '@reduxjs/toolkit';

const initialGamesState = {
    currentPage: 1,
    loading: false,
    searchPhrase: "",
    moreInfoId: 0,
    gameToCartName: '',
    cartNames: [],
    gameToCartPrice: 0,
    cartPrices: [],
    cartPairs: [], 
    platformFilter: 0,
    seeTopRanking: false
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
        addNewCartPair(state, action) {
            state.cartPairs = ([...state.cartPairs, action.payload]);
        },
        deleteFromCart(state, action) {
            state.cartPairs.splice(action.payload, 1);
        },
        filterByPlatform(state, action) {
            state.platformFilter = action.payload;
        },
        seeTopRanking(state) {
            state.seeTopRanking = true;
        }
    },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;