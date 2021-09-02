import { Cart } from './cart.entity';
import { Tour, TourId } from '../tour/tour.entity';

const cart = new Cart();

export function useCart() {

  function addToCart(tours: Tour[]) {
    cart.addToCart(tours);
  }


  function removeFromCart(tour: Tour) {
    const tourId: TourId = tour.id;

    cart.removeFromCart(tourId)
  }

  function clearCart() {
    cart.clearCart();
  }


  return {
    addToCart,
    removeFromCart,
    clearCart
  }

}