import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    gamesQuant: 0,
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
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;