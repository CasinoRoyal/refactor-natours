export class Order {
  constructor(
    private readonly _userId: string,
    private readonly _tourId: string,
    private readonly _numberOfParticipants: number,
    private readonly _totalPrice: number,
  ){}

  get totalPrice(): number {
    return this._totalPrice
  }
}