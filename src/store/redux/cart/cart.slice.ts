import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartProduct extends Api.IProduct {
  quantity: number;
}

interface CartState {
  cartProducts: CartProduct[];
}

const initialState: CartState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartProduct>) => {
      const existingProduct = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push(action.payload);
      }
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cartProducts = [];
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
