import { createSlice } from '@reduxjs/toolkit';

const initialPriceState = {allPrices: []};

const priceSlice = createSlice({
    name: 'price',
    initialState: initialPriceState,
    reducers: {
        createPrice(state, action) {
                    state.allPrices = [...state.allPrices, action.payload];
                }
            }
});

export const priceActions = priceSlice.actions;
export default priceSlice.reducer;