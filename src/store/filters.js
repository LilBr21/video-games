import { createSlice } from '@reduxjs/toolkit';

const initialFiltersState = {
    consoleName: ''
}

const filtersSlice = createSlice({
    name: 'cart',
    initialState: initialFiltersState,
    reducers: {
        assignConsoleName(state, action) {
            state.consoleName = action.payload;
        }
    }
})

export const filtersActions = filtersSlice.actions;
export default filtersSlice.reducer;