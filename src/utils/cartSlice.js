import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        noOfItemsOrder: 0
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.noOfItemsOrder += 1;
        },
        addSameItem: (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload) item.noOfItem += 1;
            })
            state.noOfItemsOrder += 1;
        },
        removeItem: (state, action) => {
            const selectedItem = (e) => e.id === action.payload.id;
            const index = state.items.findIndex(selectedItem);
            state.items.splice(index, 1);
            state.noOfItemsOrder -= 1;
        },
        removeSameItem: (state, action) => {
            state.items.map(item => {
                if (item.id === action.payload) item.noOfItem -= 1;
            })
            state.noOfItemsOrder -= 1;
        },
        clearCart: (state) => {
            state.items = [];
            state.noOfItemsOrder = 0;
        },
    },
});

export const { addItem, addSameItem, removeItem, removeSameItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;