import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (
            state: { products: { id: string; quantity: number }[] },
            action: { payload: { id: string; quantity: number } }
        ) => {
            const itemIndex = state.products.findIndex(
                (item: { id: string }) => item.id === action.payload.id
            );

            if (itemIndex !== -1) {
                state.products[itemIndex].quantity += action.payload.quantity;
            } else {
                state.products = [...state.products, action.payload];
            }
        },

        removeItem: (
            state: { products: { id: string; quantity: number }[] },
            action: { payload: string }
        ) => {
            const itemIndex = state.products.findIndex(
                (item: { id: string }) => item.id === action.payload
            );

            if (itemIndex !== -1) {
                state.products[itemIndex].quantity -= 1;
                if (state.products[itemIndex].quantity <= 0) {
                    state.products = state.products.filter(
                        (item: { id: string }) => item.id !== action.payload
                    );
                }
            }
        },

        resetCart: (state: { products: never[] }) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
