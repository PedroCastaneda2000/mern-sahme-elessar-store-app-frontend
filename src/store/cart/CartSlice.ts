import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItemsType {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  material: string;
  stone: string;
}

interface CartState {
  items: CartItemsType[];
}

const loadCartFromSessionStorage = (): CartItemsType[] => {
  const storedCart = sessionStorage.getItem("cartItems");
  return storedCart ? JSON.parse(storedCart) : [];
};

const initialState: CartState = {
  items: loadCartFromSessionStorage(),
};

const saveCartToSessionStorage = (cartItems: CartItemsType[]) => {
  sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemsType>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      saveCartToSessionStorage(state.items);
    },

    addOneToCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }

      saveCartToSessionStorage(state.items);
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const itemToRemove = state.items.find(
        (item) => item._id === action.payload
      );
      if (itemToRemove) {
        state.items = state.items.filter((item) => item._id !== action.payload);
      }

      saveCartToSessionStorage(state.items);
    },

    removeOneFromCart: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find(
        (item) => item._id === action.payload
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (item) => item._id !== action.payload
          );
        }
      }

      saveCartToSessionStorage(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      sessionStorage.removeItem("cartItems");
    },
  },
});

// Selector to calculate the total number of items in the cart
export const selectTotalCartItems = (state: { cart: CartState }) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);

// Selector to calculate the cart subtotal
export const selectCartSubtotal = (state: { cart: CartState }) => {
  const totalInPennies = state.cart.items.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  );
  return (totalInPennies / 100).toFixed(0);
};

export const {
  addToCart,
  removeFromCart,
  removeOneFromCart,
  addOneToCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
