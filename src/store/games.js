import { createSlice } from '@reduxjs/toolkit';

const initialGamesState = {
    currentPage: 1,
    loading: false,
    searchPhrase: "",
    moreInfoId: 0
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
        }
    },
});

export const gamesActions = gamesSlice.actions;
export default gamesSlice.reducer;