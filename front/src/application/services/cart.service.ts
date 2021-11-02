import { Cart, CartItems, CartItem } from '../../domains/cart.entity';
import { CartUseCase } from '../ports/in/cart-use-case.port';

export function useCart(cart: Cart): CartUseCase {
  function addToCart(items: CartItems) {
    const newCart = cart.addToCart(items);
    return newCart;
  }

  function removeFromCart(item: CartItem) {
    const itemId = item.id;

    if (!itemId) {
      throw new Error("Can't find item");
    }

    return cart.removeFromCart(itemId);
  }

  function clearCart(): Cart {
    return cart.clearCart();
  }

  function contains(itemId: string): boolean {
    return cart.contains(itemId);
  }

  function getItems(): CartItems {
    return cart.getItems();
  }

  return {
    addToCart,
    removeFromCart,
    clearCart,
    contains,
    getItems,
  };
}
