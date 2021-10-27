import { createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    loading: false,
    searchPhrase: "",
    moreInfoId: 0
};

const gamesSlice = createSlice({
    name: 'games-slice',
    initialState,
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
            console.log(state.moreInfoId);
        }
    }
})

const store = configureStore({
    reducer: gamesSlice.reducer
});

export const gamesActions = gamesSlice.actions;
export default store;