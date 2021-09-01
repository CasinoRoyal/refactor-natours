import { Tour } from '../tour/tour.entity';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';

export class OrderTours {
  constructor(
    private readonly _user: User,
    private readonly _tour: Tour,
    private readonly _numberOfParticipants: number,
  ) {}

  createOrder() {
    const isAvailable = this._tour.isAvailableSeats(this._numberOfParticipants);

    if (!isAvailable) {
      throw new Error(
        `Available number of participants is ${this._tour.availableSeats}`,
      );
    }

    const totalPrice = this._tour.calculateTourPrice(
      this._numberOfParticipants,
    );

    const order = new Order(
      this._user,
      this._tour,
      this._numberOfParticipants,
      totalPrice,
    );
    
    return order;
  }
}
