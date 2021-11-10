import { createSlice } from '@reduxjs/toolkit';

const initialPriceState = {allPrices: [], activePrice: 0};

// const generateRandomPrice = (min, max) => {
//     return (
//         Math.floor(Math.random() * (max - min + 1) + min)
//     )
// }

//state.allPrices.push({id: action.payload.chosenId, price: firstTimePrice});

const priceSlice = createSlice({
    name: 'price',
    initialState: initialPriceState,
    reducers: {
        createPrice(state, action) {
            // console.log(state.allPrices);
            // if (state.allPrices.length === 0) {
            //     let firstTimePrice = action.payload.randomPrice;
            //     let newPair = {id: action.payload.chosenId, price: firstTimePrice};
            //     console.log(newPair);
            //     state.allPrices = [...state.allPrices, {...newPair}]
            //     state.activePrice = firstTimePrice;
            //     console.log(action.payload.randomPrice);
            //     console.log(action.payload.chosenId);
            // }
            // else {
                // let priceIndex = state.allPrices.findIndex(({obj}) => obj.id === action.payload.chosenId);
                for (let priceIndex = 0; priceIndex < state.allPrices.length; priceIndex++) {
                    if (state.allPrices[priceIndex].id === action.payload.chosenId) {
                        state.activePrice = state.allPrices[priceIndex].price;
                    } else {
                    let firstPrice = action.payload.randomPrice;
                    let newPair = {id: action.payload.chosenId, price: firstPrice};
                    state.allPrices = [...state.allPrices, {...newPair}];
                    state.activePrice = firstPrice;
                }
            }
        }
    }
});

export const priceActions = priceSlice.actions;
export default priceSlice.reducer;