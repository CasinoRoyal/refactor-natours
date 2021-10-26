import { Tour } from './tour.entity';

export type CartItem = Tour;
export type CartItems = CartItem[];

export class Cart {
  constructor(readonly items: CartItems = []) {}

  getItems() {
    return this.items;
  }

  addToCart(items: CartItems): Cart {
    return new Cart([...this.items, ...items]);
  }

  removeFromCart(itemId: string): Cart {
    const filtredItems = this.items.filter(({ id }) => id !== itemId);
    return new Cart(filtredItems);
  }

  clearCart(): Cart {
    return new Cart([]);
  }

  contains(itemId: string): boolean {
    const result = this.items.find(({ id }) => id === itemId);

    return !result;
  }
}
