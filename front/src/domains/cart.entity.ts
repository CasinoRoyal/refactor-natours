import {Tour} from './tour.entity';

export type CartItem = Tour;
type CartItems = CartItem[];

export class Cart {
  constructor(private readonly _items: CartItems = []) {}

  getCart() {
    return this._items;
  }

  addToCart(items: CartItems) {
    return new Cart([...this._items, ...items]);
  }

  removeFromCart(itemId: string) {
    return this._items.filter(({ id }) => id !== itemId);
  }

  clearCart(): Cart {
    return new Cart([])
  }
}
