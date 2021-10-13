export type TourId = string;
export type TourTitle = string;
export type Difficulty = 'easy' | 'medium' | 'difficult';
export type Location = [number, number];

export class Tour {
  constructor(
    private readonly _tourId: TourId,
    private readonly _tourTitle: TourTitle,
    private readonly _describeTour: string,
    private readonly _price: number,
    private readonly _difficulty: Difficulty,
    private readonly _participantsCount: number,
    private readonly _availableQuantity: number,
    private readonly _startDate: Date,
    private readonly _location: Location,
    private readonly _rating: Rating,
  ) {}

  get id() {
    return this._tourId;
  }

  get price() {
    return this._price;
  }

  get availableSeats(): number {
    return this._availableQuantity
  }

  isAvailableSeats(numberOfParticipants: number): boolean {
    return numberOfParticipants >= this._availableQuantity;
  }

  calculateTourPrice(numberOfParticipants: number): number {
    return this.price * numberOfParticipants;
  }
}
