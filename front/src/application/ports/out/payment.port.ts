export interface IPayment {
  pay(tourPrice: number): Promise<boolean>;
}
