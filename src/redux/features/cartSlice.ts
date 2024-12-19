import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IProduct {
    id: string;
    title: string;
    img: string;
    price: number;
    quantity: number;
}

const initialState: Array<IProduct> = [];

export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (state.findIndex((pro) => pro.id === action.payload.id) === -1) {
                state.push(action.payload);
            } else {
                state.forEach((item, index) => {
                    if (item.id === action.payload.id) {
                        state[index] = { ...item, quantity: item.quantity + 1 };
                    }
                });
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const id = action.payload;
            return state.filter((item) => item.id !== id);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
