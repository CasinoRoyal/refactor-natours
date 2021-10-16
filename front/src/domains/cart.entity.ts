import { Tour } from './tour.entity';

export type CartItem = Tour;
type CartItems = CartItem[];

export class Cart {
  constructor(readonly items: CartItems = []) {}

  getCart() {
    return this.items;
  }

  addToCart(items: CartItems): Cart {
    return new Cart([...this.items, ...items]);
  }

  removeFromCart(itemId: string): CartItems {
    return this.items.filter(({ id }) => id !== itemId);
  }

  clearCart(): Cart {
    return new Cart([]);
  }

  contains(itemId: string): boolean {
    const result = this.items.find(({ id }) => id === itemId);

    return !result;
  }
}
