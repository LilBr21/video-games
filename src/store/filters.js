import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
    consoleName: '',
    platformFilter: 0,
}

const filtersSlice = createSlice({
    name: 'cart',
    initialState: initialFiltersState,
    reducers: {
        assignConsoleName(state, action) {
            state.consoleName = action.payload;
        },
        filterByPlatform(state, action) {
            state.platformFilter = action.payload;
        },
    }
})

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;