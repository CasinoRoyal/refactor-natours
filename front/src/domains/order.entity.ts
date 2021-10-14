import {TourId} from './tour.entity';
import {UserId} from './user.entity';

export class Order {
  constructor(
    private readonly _userId: UserId,
    private readonly _tourId: TourId,
    private readonly _numberOfParticipants: number,
    private readonly _totalPrice: number,
  ){}

  get totalPrice(): number {
    return this._totalPrice
  }
}