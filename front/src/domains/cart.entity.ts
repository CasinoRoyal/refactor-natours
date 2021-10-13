import { Tour, TourId } from '../tour/tour.entity';

export class Cart {
  private _items: Tour[] = [];

  getCart(): Tour[] {
    return this._items;
  }

  addToCart(tours: Tour[]): Tour[] {
    return [...this._items, ...tours];
  }

  removeFromCart(tourId: TourId): Tour[] {
    return this._items.filter(({ id }) => id !== tourId);
  }

  clearCart(): void {
    this._items = [];
  }
}
