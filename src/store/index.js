import { createSlice, configureStore} from '@reduxjs/toolkit';

const initialState = {
    currentPage: 1,
    loading: false,
    searchPhrase: ""
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
        }
    }
})

const store = configureStore({
    reducer: gamesSlice.reducer
});

export const gamesActions = gamesSlice.actions;
export default store;