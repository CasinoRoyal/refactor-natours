import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Cart, CartItem, CartItems } from '../../domains/cart.entity';
import { useCart } from '../../application/services/cart.service';

const cartService = useCart(new Cart());

type CartState = {
  items: CartItems;
  isLoading: boolean;
};

const initialState: CartState = {
  items: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItems>) {
      const cart = cartService.addToCart(action.payload);
      state.items = cart.getItems();
    },
    removeFromCart(state, action: PayloadAction<CartItem>) {
      const cart = cartService.removeFromCart(action.payload);
      state.items = cart.getItems();
    },
    clearCart(state) {
      state.items = cartService.clearCart().getItems();
    },
  },
});

export const selectCart = (state: RootState): CartState => state.cart;

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
