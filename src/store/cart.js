import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
    gamesQuant: 0,
    //gamesQuantIsShown: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        incrementGamesQuant(state) {
            // if (state.gamesQuant > 0) {
            //     state.gamesQuantIsShown = true;
            // }
            state.gamesQuant++;
        },
        decrementGamesQuant(state) {
            // if (state.gamesQuant < 1) {
            //     state.gamesQuantIsShown = false;
            // }
            state.gamesQuant = state.gamesQuant - 1;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;