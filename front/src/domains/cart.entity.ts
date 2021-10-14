import {Tour} from './tour.entity';

export type CartItem = Tour;
type CartItems = CartItem[];

export class Cart {
  constructor(private readonly _items: CartItems = []) {}

  getCart() {
    return this._items;
  }

  addToCart(items: CartItems): Cart {
    return new Cart([...this._items, ...items]);
  }

  removeFromCart(itemId: string): CartItems {
    return this._items.filter(({ id }) => id !== itemId);
  }

  clearCart(): Cart {
    return new Cart([])
  }

  contains(itemId: string): boolean {
    const result = this._items.find(({ id }) => id === itemId);

    return !!result;
  }
}
