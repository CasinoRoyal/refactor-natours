import { Cart, CartItems, CartItem } from '../../../domains/cart.entity';

export interface CartUseCase {
  addToCart(items: CartItems): Cart;
  removeFromCart(item: CartItem): Cart;
  clearCart(): Cart;
  contains(itemId: string): boolean;
  getItems(): CartItems;
}
