import { createSlice } from "@reduxjs/toolkit";
const initialState = { items: [], total: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
        console.log("state", state.items);
      }
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
      console.log("item: ", item);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) item.quantity = quantity;
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      state.total = state.items.reduce(
        (sum, i) => sum + i.price * i.quantity,
        0
      );
    },
    emptyCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, emptyCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
