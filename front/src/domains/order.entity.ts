import { TourId } from './tour.entity';
import { UserId } from './user.entity';

export class Order {
  constructor(
    readonly userId: UserId,
    readonly tourId: TourId,
    readonly numberOfParticipants: number,
    readonly totalPrice: number,
  ) {}
}
