import { createSlice } from '@reduxjs/toolkit';

const initialPriceState = {allPrices: []};

// const generateRandomPrice = (min, max) => {
//     return (
//         Math.floor(Math.random() * (max - min + 1) + min)
//     )
// }

const priceSlice = createSlice({
    name: 'price',
    initialState: initialPriceState,
    reducers: {
        createPrice(state, action) {
                // for (let priceIndex = 0; priceIndex < state.allPrices.length; priceIndex++) {
                //     if (state.allPrices[priceIndex].id === action.payload.chosenId) {
                //         state.activePrice = state.allPrices[priceIndex].price;
                //     } else {
                    //let firstPrice = action.payload.randomPrice;
                    //let newPair = {id: action.payload.chosenId, price: generateRandomPrice()};
                    console.log('shot')
                    state.allPrices = [...state.allPrices, action.payload];
                }
            }
});

export const priceActions = priceSlice.actions;
export default priceSlice.reducer;